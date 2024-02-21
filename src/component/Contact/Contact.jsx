import React from "react";

export default function Contact() {
  return (
    <>
      <section className=" py-4 text-center">
        <div className="container py-5">
          <div className="row">
            <div className="content">
              <div className="row">
                <div className="content ">
                  <h1>CONATCT SECTION</h1>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="line-after"></div>
                    <i className="fa-solid fa-star star m-4 "></i>
                    <div className="line-after"></div>
                  </div>
                </div>
              </div>
        
            </div>
          </div>
          <div className="row w-50 m-auto">
              <form action="">
               <input type="text"
               placeholder="userName"
               className="w-100 form-control form-control-lg border-0 border-bottom shadow-none rounded-0 mb-5 "
               />
               <input type="number"
               placeholder="userAge"
               className="w-100 form-control form-control-lg border-0 border-bottom shadow-none rounded-0 mb-5 "
               />
               <input type="email"
               placeholder="userEmail"
               className="w-100 form-control form-control-lg border-0 border-bottom shadow-none rounded-0 mb-5 "
               />
               <input type="password"
               placeholder="userPassword"
               className="w-100 form-control form-control-lg border-0 border-bottom shadow-none rounded-0 mb-5 "
               />
               <button className="btn bg-main text-white mx-auto d-block">Send Message</button>

              </form>
          </div>
         
        </div>
      </section>
    </>
  );
}
