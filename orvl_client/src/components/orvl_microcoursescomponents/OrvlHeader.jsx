import React from 'react'
import logo from '../orvl_mc_images/logo.jpg'
import '../orvl_mc_styles/OrvlMicroCourses.css'

const OrvlHeader = () => {
  return (
    <div>
        <div className='orvlMcHeader'>
            <div className='orvlsubMcHeader'>
                <div className="HeaderLogoImg">
                    <img src={logo} alt="logo" />
                </div>

            </div>

        </div>
    </div>
  )
}

export default OrvlHeader