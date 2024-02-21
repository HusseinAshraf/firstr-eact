import React from 'react'
import Line from '../Line/Line'


export default function About() {
  return <>
  <section className='bg-main py-4 text-center text-white'>
  <div className="container py-5">
       <div className="row">
         <div className="content">
           <div className="row">
             <div className="content ">
              <h1>ABOUT ME</h1>
              <Line/>
             </div>
           </div>
           <div className="row">
            <div className="col-md-6">
              <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
           </div>
         </div>
       </div>
  </div>

  </section>
  
  </>
}
