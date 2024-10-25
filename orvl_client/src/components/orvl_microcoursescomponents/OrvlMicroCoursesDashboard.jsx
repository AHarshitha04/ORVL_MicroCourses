import React, { useEffect, useState } from 'react'
import '../orvl_mc_styles/OrvlMicroCourses.css'
import OrvlHeader from './OrvlHeader'
import axios  from 'axios'
import LeftNavbar from './LeftNavBar'
const OrvlMicroCoursesDashboard = () => {
  const [courses,setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [openModal,setOpenModal] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
       
        try {
            const response = await axios.get(`http://localhost:8000/MicroCourses/microcourses`);
            setCourses(response.data); // Adjust this based on the structure of your response
        } catch (err) {
            console.error('Error fetching courses:', err);
            setError('Failed to fetch courses.');
        } finally {
          
        }
    };
    
    fetchCourses();
}, []);
// const opencourse = () => {
//   setOpenModal(!openModal)
//   try {
//     const response = await axios.get(`http://localhost:8000/MicroCourses/chapters/${courseId}`);
//     setData(response.data);
//   } catch (err) {
//     setError('Failed to fetch data');
//     console.error(err);
//   }
// };
// fetchData();
// };



  return (
    <div>
      <OrvlHeader/>
      <LeftNavbar/>
      {courses.map((course) => (
                            
                            <div className="exam-cardvl" key={course.course_id}>
                                <div className="imgsrc">  {course.course_image ? (
                <img src={`data:image/jpeg;base64,${course.course_image}`} alt={course.course_name} />
            ) : (
                <p>No image available</p>
            )} </div>
                                <div className="headec"><h5>{course.course_name}</h5></div>
                                <div className="fsvnsv subcardgrid valinosubvid">
                                    <div className='fsvnsv subhcard'>Validity: <div>(course.start_date)-(course.end_date)</div></div>
                                    
                                    <div className='fsvnsv'>No of Videos: <div>{course.video_count}</div></div>
                                </div>
                                <div className="comcardbuyprice">
                                    <div className='fsvnsv pricebuy'>₹{course.total_price}</div>
                                    <button className="btnbut" >view</button>
                                    {/* <button className="btnbut" onClick={() =>  handleOpenPayment(course)}>BUY NOW</button> */}
                                </div>
                            </div>
                        ))}
                        {openModal && (
                          <div>

                          </div>
                        )}
         </div>
  )
}

export default OrvlMicroCoursesDashboard