import React from 'react'
import "./Footer.css"
export default function Footer() {
  return <>
  <footer>
        <div className='text-center text-white  py-5'>
        <div className="container">
          <div className="row m-4">
            <div className="col ">
              <h3 className='fw-bold'>
              LOCATION
              </h3>
              <p >
                Bani Sauef
              </p>
              <p>
                Egypt
              </p>
            </div>
            <div className="col">
              <h3 className='fw-bold'>AROUND THE WEB</h3>
              <div className="icons d-flex justify-content-center align-item-center m-3 ">
                <div className='footer-icon'> 
                <i class="fa-brands fa-facebook mx-1 "></i>
                </div>
                <div className='footer-icon'>
                <i class="fa-brands fa-twitter mx-1 "></i>
                </div>
                <div className='footer-icon'>
                <i class="fa-brands fa-linkedin-in mx-1 "></i>
                </div>
                <div className='footer-icon'>
                <i class="fa-solid fa-globe mx-1 "></i>
                </div>
              </div>
            </div>

            <div className="col">
              <h3 className='fw-bold'>
              ABOUT FREELANCER
              </h3>
              <p>
              Freelance is a free to use, licensed Bootstrap theme created by Route
              </p>
            </div>
          </div>
        </div>
        </div>
        <div className='py-4 text-center text-white bg-dark text-capitalize'> copyright &copy; Hussein Ashraf 2024</div>



  </footer>
  
  
  
  </>
}
