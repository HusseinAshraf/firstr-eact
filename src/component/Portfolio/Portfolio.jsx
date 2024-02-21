import React, { useEffect, useState } from "react";
import tent from "../../assists/images/tent.png";
import cake from "../../assists/images/cake.png";
import house from "../../assists/images/house.png";
import "./Portfolio.css"

export default function Portfolio() {

  const [src , setSrc] = useState('')


  useEffect( ()=>{
   let projects = document.querySelectorAll('.projects')

   for (let i = 0; i < projects.length; i++) {
     projects[i].addEventListener("click" , function(){
        setSrc(this.children[0].src)
        document.querySelector('#details').classList.remove('d-none')
     })
    
   }
    document.querySelector('#details').addEventListener('click', function(e){
      document.querySelector('#details').classList.add('d-none')
    })

    document.querySelector('#details img').addEventListener('click' , function(e){
      e.stopImmediatePropagation()
    })

  })
  
  return (
    <>
      <section className="py-4 text-center">
        <div className="container py-5">
          <div className="row">
            <div className="content">
              <div className="row">
                <div className="content ">
                  <h1>PROTFOLIO COMPONENT</h1>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="line-after"></div>
                    <i className="fa-solid fa-star star m-4 "></i>
                    <div className="line-after"></div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
          <div className="container">
              <div className="row gy-5">
                <div className="col-md-4">
                  <div className=" position-relative overflow-hidden rounded-3 projects">
                    <img src={cake} className="w-100" alt="" />

                    <div
                      className={ ` hover-portfolio position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `}
                    >
                      <i className="fa-solid fa-plus text-white   display-1   "></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="position-relative overflow-hidden rounded-3 projects">
                    <img src={house} className="w-100" alt="" />

                    <div
                      className={`hover-portfolio position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `}
                    >
                      <i className="fa-solid fa-plus text-white   display-1   "></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="position-relative overflow-hidden rounded-3 projects">
                    <img src={tent} className="w-100" alt="" />

                    <div
                      className={`hover-portfolio position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `}
                    >
                      <i className="fa-solid fa-plus text-white   display-1   "></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="position-relative overflow-hidden rounded-3 projects">
                    <img src={cake} className="w-100" alt="" />

                    <div
                      className={` hover-portfolio position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `}
                    >
                      <i className="fa-solid fa-plus text-white   display-1   "></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="position-relative overflow-hidden rounded-3 projects">
                    <img src={house} className="w-100" alt="" />

                    <div
                      className={`hover-portfolio position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `}
                    >
                      <i className="fa-solid fa-plus text-white   display-1   "></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="position-relative overflow-hidden rounded-3 projects">
                    <img src={tent} className="w-100" alt="" />

                    <div
                      className={`hover-portfolio position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `}
                    >
                      <i className="fa-solid fa-plus text-white   display-1   "></i>
                    </div>
                  </div>
                </div>
              </div>
                
            {/* <div className="row gy-5">
                   { data.map((item)=> <>
                    
                    <div className="col-md-4">
                  <div className=" position-relative overflow-hidden rounded-3 project">
                    <img src={item} className="w-100" alt="" />

                    <div
                      className={ ` hover-portfolio position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `}
                    >
                      <i className="fa-solid fa-plus text-white   display-1   "></i>
                    </div>
                  </div>
                </div>
                   </>)

                   }
            </div> */}


           </div>


        </div>
      </section>

      <div id="details"  className="d-none bg-primary bg-opacity-75 d-flex justify-content-center align-items-center position-fixed  top-0 bottom-0 start-0 end-0 z-3">
      
      <div className="container">
          <div className="inner mx-auto pt-5 w-50 ">
                    <img src={src} alt=""  className="w-100"/>
          </div>
      </div>
        
     

      </div>
    </>
  );
}
