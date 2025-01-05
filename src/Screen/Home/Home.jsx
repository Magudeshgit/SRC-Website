import React, { useState } from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Home.css"
import "./Unwilling.css"
import "./Mission_vission.css"
import "./OurTeam.css"
import "./Footter.css"
import "./Animation.css"
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';

export const Home = () => {
    const [homeRightImage, setHomeRightImage] = useState("home_right_image.svg")
    const [countTrigger, setCountTrigger] = useState(false)
  return (
    <>
    <div className="home">
        
        <div className="home_container row">
            <div className="home_left col-xl-6 col-lg-6 col-xxl-6 col-md-6 col-12  slide-in-tl-norma">
                <h3>Empowering Students Through Education and Innovation</h3>
                <p>Join us in our mission to upskill students and create a brighter future for all.</p>
                <div className="home_left_buttons row">
                    <button className='learnmore col-md-12 col-xxl-5 col-xl-5 col-sm-12 col-xs-12'>Learn more</button>
                    <button className='viewfacilities col-md-12 col-xxl-5 col-xl-5 col-sm-12 col-xs-12'>View Facilities</button>
                </div>
            </div>
            <div className="home_right col-xl-6 col-lg-6 col-xxl-6 col-md-6 col-12">
                <img src={homeRightImage} alt="hi" className='img-fluid' />
            </div>
        </div>
        <div className="box_image row ">
            <img src="Box.svg" alt="" className='linear_opacity img-fluid col-md-2 col-xl-2 col-xxl-2 col-3' />
        </div>
        
        {/* Unwilling our vision and  mission */}
        <ScrollTrigger onEnter={()=> setCountTrigger(true)} onExit={()=> setCountTrigger(false)} >
        <div className="unwilling mb-5 linear_opacity ">
            <div className='heading mb-5 '>
                <h2>Unwilling our</h2>
                <h2>mission and vission</h2>
            </div>
            <div className="row main_container">
                <div className="col-12 col-md-8 col-xxl-8 col-xl-8 col-lg-8">
                    <div className="row mt-sm-3">
                        <img src="unwilling image.svg" alt="" className='img-fluid umwilling_image' />
                    </div>
                    <div className="row down_box_container  ">
                        <div className=" down_image_box" style={{backgroundColor:"#77C6FF"}} >
                            <div className="content">
                                <h1> 
                                { countTrigger &&
                                    <CountUp   start={0}
                                    end={5}
                                    duration={5.75}
                                    >
                                    </CountUp>}+
                                </h1>
                                <h4>Successful technical events.</h4>
                                <p>Starting from AY 2023</p>
                            </div>
                        </div>
                        <div className=" down_image_box" style={{backgroundColor:"#FF5894"}}>
                            <div className="content">
                                <h1>{ countTrigger &&
                                    <CountUp   start={0}
                                    end={75}
                                    duration={5.75}
                                    >
                                    </CountUp>}%
                                    </h1>
                                <h4>success rate In less than a year</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-4 unwilling_right_box mt-sm-3">
                    <div className="right_box_count row">
                        <div className="right_box_count_up col-xxl-12 col-lg-12 col-md-12 col-xs-6 col-5">
                            <h1>{ countTrigger &&
                                    <CountUp   start={0}
                                    end={40}
                                    duration={5.75}
                                    >
                                    </CountUp>}+</h1>
                            <h4>Students project has been funded for patent</h4>
                        </div>
                        <hr className='col-xxl-12 col-lg-12 col-md-12 col-xs-6 col-2' />
                        <div className="right_box_count_down col-xxl-12 col-lg-12 col-md-12 col-xs-6 col-5">
                            <h1>{ countTrigger &&
                                    <CountUp   start={0}
                                    end={75}
                                    duration={5.75}
                                    >
                                    </CountUp>}+</h1>
                            <h4>Spent for patent and development</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </ScrollTrigger>

        {/* mission vission and facilities */}
        
        <div className="mission_vission">
            {/* mission */}
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <div className=' mission_left'>
                        <p>Our mision</p>
                        <h1>Innovation & Creativity</h1>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <div className=' mission_right'>
                        <p>Fostering a dynamic community of student researchers committed to driving innovation and positive change through their collaborative, ethical, and impactful research endeavors is the cornerstone of our mission. With an unwavering dedication to excellence, we empower our students to explore the frontiers of knowledge, push boundaries, and create solutions that address the pressing challenges of our time. </p>
                        <p>Together, we strive to cultivate an environment where curiosity thrives, diversity is celebrated, and ideas flourish, inspiring the next generation of leaders and change-makers to make a meaningful difference in the world.</p>
                    </div>
                </div>
            </div>


            {/* visson */}
            <div className="row mt-5">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <div className=' mission_left'>
                        <p>Our vission</p>
                        <h1>Leading the Young Minds</h1>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <div className=' mission_right'>
                        <p>Fostering a dynamic community of student researchers committed to driving innovation and positive change through their collaborative, ethical, and impactful research endeavors is the cornerstone of our mission. With an unwavering dedication to excellence, we empower our students to explore the frontiers of knowledge, push boundaries, and create solutions that address the pressing challenges of our time. </p>
                        <p>Together, we strive to cultivate an environment where curiosity thrives, diversity is celebrated, and ideas flourish, inspiring the next generation of leaders and change-makers to make a meaningful difference in the world.</p>
                    </div>
                </div>
            </div>

            {/* Facilities */}

            <div className="facilities mt-5">
                <h2>Facilities</h2>
                <div className="row facilities_conatiner mt-5 linear_opacity">
                    <div className="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 " style={{padding:0}}>
                        <img src="Seedfunding.svg" alt="Seed funding" className='facilities_img' />
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6  facilities_right">
                        <p className=' firstP'>FUNDING</p>
                        <h3>Seed Funding</h3>
                        <p className='secondP'>Fostering a dynamic community of student researchers committed to driving innovation and positive change through their collaborative, ethical, and impactful research endeavors is the cornerstone of our mission With an of knowledge, push boundaries.</p>
                        <div className='submit mt-5 mb-3'>
                            <a href="#">Submit proposal <FaArrowRight/> </a>
                        </div>
                    </div>
                </div>

                <div className="row facilities_conatiner mt-5">
                    <div className="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 " style={{padding:0}}>
                        <img src="product.svg" alt="Seed funding" className='facilities_img ' />
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6  facilities_right">
                        <p className=' firstP'>FUNDING</p>
                        <h3>Project Identification</h3>
                        <p className='secondP'>Fostering a dynamic community of student researchers committed to driving innovation and positive change through their collaborative, ethical, and impactful research endeavors is the cornerstone of our mission With an of knowledge, push boundaries.</p>
                        <div className='submit mt-5 mb-3'>
                            <a href="#">Submit proposal <FaArrowRight/> </a>
                        </div>
                    </div>
                </div>

                <div className="row facilities_conatiner mt-5">
                    <div className="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 " style={{padding:0}}>
                        <img src="resource.svg" alt="Seed funding" className='facilities_img ' />
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6  facilities_right">
                        <p className=' firstP'>GUIDANCE</p>
                        <h3>Resource Allocation</h3>
                        <p className='secondP'>Fostering a dynamic community of student researchers committed to driving innovation and positive change through their collaborative, ethical, and impactful research endeavors is the cornerstone of our mission With an of knowledge, push boundaries.</p>
                        <div className='submit mt-5 mb-3'>
                            <a href="#">Submit proposal <FaArrowRight/> </a>
                        </div>
                    </div>
                </div>
                
            </div>


            {/* Our Team */}
            <div className="ourteam mt-5">
                <div className="pattern_dot">
                    <img src="pattern_dot.svg" alt="" className='img-fluid' />  
                </div>
                <div className="pattern_box">
                    <img src="pattern_box.svg" alt="" className='img-fluid' />
                </div>
                <div className="top">
                    <h2>Our Team</h2>
                    <p>SRC Office Bearers</p>
                </div>
                <div className="firstperson mt-5 row">
                    <div className="col">
                        <img src="Sampleperson.svg" alt="President" className='img-fluid' />
                        <h5 className='mt-3'>Dhanush Narayanan S</h5>
                        <p>President</p>
                    </div>
                </div>
                <div className="secondset">
                    <div>
                        <img src="Sampleperson2.svg" alt="" className='img-fluid' />
                        <h5>Pranesh R</h5>
                        <p>Vice President</p>
                    </div>
                    <div>
                        <img src="Sampleperson2.svg" alt="" className='img-fluid' />
                        <h5>Ratheesh M</h5>
                        <p>Vice President</p>
                    </div>
                </div>
                <div className="firstperson mt-5 row">
                    <div className="col">
                        <img src="Sampleperson2.svg" alt="President" className='img-fluid' />
                        <h5 className='mt-3'>Mohamed Fazil K</h5>
                        <p>Secretary</p>
                    </div>
                </div>
                <div className="secondset">
                    <div>
                        <img src="Sampleperson2.svg" alt="" className='img-fluid' />
                        <h5>Prajith P</h5>
                        <p>Join Secretary</p>
                    </div>
                    <div>
                        <img src="Sampleperson2.svg" alt="" className='img-fluid' />
                        <h5>Uthay Kumar V</h5>
                        <p>Join Secretary</p>
                    </div>
                </div>
                <div className="firstperson mt-5 row">
                    <div className="col">
                        <img src="Sampleperson2.svg" alt="President" className='img-fluid' />
                        <h5 className='mt-3'>Gowtham M</h5>
                        <p>Treasurer</p>
                    </div>
                </div>
                <div className="secondset">
                    <div>
                        <img src="Sampleperson2.svg" alt="" className='img-fluid' />
                        <h5>Mormal Nafeesha M</h5>
                        <p>Executive Member</p>
                    </div>
                    <div>
                        <img src="Sampleperson2.svg" alt="" className='img-fluid' />
                        <h5>Magudeshwaran</h5>
                        <p>Executive Member</p>
                    </div>
                </div>
                <div className="secondset">
                    <div>
                        <img src="Sampleperson2.svg" alt="" className='img-fluid' />
                        <h5>Dharshini S</h5>
                        <p>Executive Member</p>
                    </div>
                    <div>
                        <img src="Sampleperson2.svg" alt="" className='img-fluid' />
                        <h5>Ashwin K</h5>
                        <p>Executive Member</p>
                    </div>
                </div>
                <div className="secondset">
                    <div>
                        <img src="Sampleperson2.svg" alt="" className='img-fluid' />
                        <h5>Vaishali S</h5>
                        <p>Executive Member</p>
                    </div>
                    <div>
                        <img src="Sampleperson2.svg" alt="" className='img-fluid' />
                        <h5>Mageswaran S</h5>
                        <p>Executive Member</p>
                    </div>
                </div>
                <div className="underguidance mt-5  ">
                    <h2>Under the Guidance of</h2>
                    <div className="dean mt-5">
                        <img src="Dean.svg" alt="Dean" className='img-fluid mb-4' />
                        <h5>Dr.S.Ramakrishnan</h5>
                        <p>Dean Research and Innovation, 
                        Dr.Mahalingam College of Engineering and Technology</p>
                    </div>
                </div>
            </div>
        </div>
        
        {/* About SRC */}
        <div className="aboutSRC">
            <div className="src_image">
                <img src="srclogo.png" alt="SRC logo" className='img-fluid' />
                <p className='mt-4' >Research || Innovation</p>
            </div>
            <div className="star">
                <span><FaStar/></span>
                <span><FaStar/></span>
                <span><FaStar/></span>
                <span><FaStar/></span>
                <span><FaStar/></span>
            </div>
            <div className='mt-4'>
                <p className='para'>The council's support and programs have been instrumental in helping the students develop their new skills and achieve  goals. I am grateful for their dedication to education.</p>
            </div>
            <p className='end_para mt-3'>John Deo</p>
            <p className='end_para'>Head of Department IT</p>
        </div>

        {/* footer */}
        <div className="footer">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                    <div className='footer_para' >
                        <p>Let’s scape your MCET experience fueled with innovation and creativity</p>
                        <p>With</p>
                    </div>
                    <div className='footer_logo' >
                        <div className='logo_container'>
                            <img src="srclogo.png" alt="src logo" className='img-fluid' />
                        </div>
                        <div>
                            <p>Dr. Mahalingam College of Engineering and Technology</p>
                            <h5>Student Research Council</h5>
                        </div>
                    </div>
                    <div>
                        <a href="#">
                            <button>Learn More</button>
                        </a>
                    </div>
                </div>
                <div className="col">
                    <div className="footer_details">
                        <div className="location">
                            <p className='icon1'>
                                <IoLocationOutline/>
                            </p>
                            <p>A-116, Dr. Mahalingam college of engineering and technology</p>
                        </div>
                        <div className="location">
                            <p className='icon'>
                                <FiPhone/>
                            </p>
                            <p>8838492241, 9854634872</p>
                        </div>
                        <div className="location">
                            <p className='icon'>
                                <HiOutlineMail/>
                            </p>
                            <p>srcofficials@drmcet.ac.in</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}
