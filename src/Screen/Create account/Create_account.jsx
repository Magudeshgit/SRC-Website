import React from 'react'
import './Create_account.css'
export const Create_account = () => {
  return (
    <>
    <div className="create_acc_container">
        <div className="row">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="create_content">
                    <div className="top mt-5 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4">
                        <img src="srclogo.png" alt="" />
                        <p className=''>Dr. Mahalingam College of Engineering and Technology</p>
                        <h3 className=''>Student Research Council</h3>
                    </div>
                    <div className="create_acc">
                        <h2 className="text-center mt-3 fs-3">Create Account</h2>
                        <form action="">
                            <div className="form_group">
                                <label htmlfor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                <div className="dept_year row">
                                    <div className="col">
                                        <label htmlFor="dept">Department</label>
                                        <input type="text" className="form-control" id='dept' placeholder='Enter your department' />
                                    </div>
                                    <div className="col">
                                        <label htmlfor="year">Year of study</label>
                                        <input type="text" className="form-control" id='year' placeholder='Enter your year of study' />
                                    </div>
                                </div>
                                <label htmlFor="rollno">Roll No (eg:727323BAD***)</label>
                                <input type="text" className="form-control" id="rollno" placeholder="Enter your roll no" />
                                <label htmlFor="contact">Contact No</label>
                                <input type="text" className="form-control" id="contact" placeholder="Enter your contact no" />
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                <a href="#" className='row'>
                                    <button className="btn btn-primary mt-3">Create Account</button>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-none  d-md-block d-lg-block d-xl-block d-xxl-block">
                {/* <img src="Group 24.svg" className='img-fluid' alt="" /> */}
                <div className="create_content_right">
                    <img src="Box1.svg" className='box1' alt="" />
                    <h2>Join the SRC Community:</h2>
                    <h2>Where Innovation Meets Opportunity</h2>
                    <p>Let’s scape your MCET lifestyle to the next level</p>
                    <img src="Group 24.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
