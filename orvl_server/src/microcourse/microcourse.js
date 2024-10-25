const express = require("express");
const router = express.Router();
const db = require("../config/database");

router.get('/microcourses', async (req, res) => {
    try {
        const [rows] = await db.query(`
           SELECT
            c.course_id, c.course_name,
            c.start_date,
            c.end_date,c.cost,
            c.discount, c.discount_amount, c.total_price,
            c.paymentlink, ch.chapter_id, ch.chapter_name, c.course_image,
            COUNT(DISTINCT v.video_id) AS video_count FROM micro_courses c
            LEFT JOIN chapters ch ON ch.course_id = c.course_id
            LEFT JOIN videos v ON v.chapter_id = ch.chapter_id
            GROUP BY c.course_id, ch.chapter_id;
    `);
 
        if (rows.length > 0) {
            // Convert BLOB to Base64 string for each course
            const coursesWithImages = rows.map(course => {
                if (course.course_image) {
                    course.course_image = Buffer.from(course.course_image).toString('base64');
                }
                return course;
            });
 
            res.json(coursesWithImages);
        } else {
            res.status(404).json({ message: 'No courses found' });
        }
       
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Server error');
    }
});


router.get('/chapters/:courseId', async(req, res) => {
    const courseId = req.params.courseId;
    const query = `
      SELECT 
        c.chapter_name,
        v.video_name,
        v.video_link,
        e.excercise_name,
        q.orvl_question,
        q.orvl_question_type,
        o.orvl_option_name,
        a.orvl_answer,
        a.orvl_answer_description_video,
        a.orvl_answer_description_img
      FROM chapters c
      JOIN videos v ON c.chapter_id = v.chapter_id
      JOIN exercises e ON e.video_id = v.video_id
      JOIN orvl_questions q ON q.exercise_id = e.exercise_id
      LEFT JOIN orvl_options o ON o.orvl_question_id = q.orvl_question_id
      LEFT JOIN orvl_answers a ON a.orvl_question_id = q.orvl_question_id
      WHERE c.course_id = ?
    `;
  
    db.query(query, [courseId], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Database query failed' });
      }
      res.json(results);
    });
  });
  


module.exports = router;     