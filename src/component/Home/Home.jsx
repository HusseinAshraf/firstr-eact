import React from 'react'
import "./Home.css"
import hussein from "../../assists/images/img.jpg"
import Line from '../Line/Line'


export default function Home() {
  return <>
   <div className="home">
        <div className="container-fluid d-flex justify-content-center  align-items-center text-white text-center">
          <div className="content ">
          <div className='image w-25 mx-auto m-3 rounded-circle rounded'>
          <img
             src={
              hussein
             }
              alt=""
              className='w-100 rounded-circle rounded'
              
            />
          </div>
            <h3 className='text-uppercase mb-3 fs-1 fw-bolder'>Hussein Ashraf</h3>
            <div className="d-flex justify-content-center  align-items-center">
            <Line/>
            </div>
            <p className='fw-bold'>Front-End , React</p>
          </div>
        </div>
      </div>
  </>
}
