import React, { useState } from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Home.css"
import "./Unwilling.css"
import "./Mission_vission.css"
import "./OurTeam.css"
import "./Footter.css"
import "./Animation.css"
import "swiper/css"

import { Navbar } from '../../Components/Nav bar/Navbar';

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

export const Home = () => {
    const [countTrigger, setCountTrigger] = useState(false)
    const [slideinfo, setslideinfo] = useState({
        activeslide: null,
        nextslide: null,
        allslide: null
    })
    // let activeslide, nextslide, allslide;
    // console.log(document.querySelectorAll('.swiper-slide')[0])
    window.addEventListener('scroll', ()=>{
        const element = document.querySelector('.nav_head')
        if (window.scrollY > 20)
        {
            (!element.classList.contains('active'))?element.classList.add('active'):null
        }
        else
        {
            (element.classList.contains('active'))?element.classList.remove('active'):null
        }
    })
  return (
    <div className='parent'>
    <Navbar/>
    <div className="home">
        {/* Blob */}
        <img src="heroblob.svg" alt="" className='heroblob' />
        <div className="home_container row">
            <div className="home_left col-xl-6 col-lg-6 col-xxl-6 col-md-6 col-12  slide-in-tl-norma">
                <h3>Empowering Students Through Education and Innovation</h3>
                <p>Join us in our mission to upskill students and create a brighter future for all.</p>
                <div className="home_left_buttons">
                    <button className='learnmore'>
                        Learn more
                        <img src="chevron-forward-outline.svg" alt="" />
                    </button>
                    <button className='viewfacilities'>
                        View Facillities
                        <img src="color-filter-outline.svg" alt="" />
                    </button>
                </div>
            </div>
            <div className="home_right col-xl-6 col-lg-6 col-xxl-6 col-md-6 col-12">
                <img src="home_right_image.png" alt="hi" className='img-fluid' />
            </div>
        </div>

        {/* Spotlight */}
        <div className=''>
            <div className="spot-head flex items-center">

                <div className='flex flex-col max-w-[75%] text-left'>
                    <p className="text-3xl tracking-[.5em] mb-1 font-semibold font-[Poppins]">
                        SPOTLIGHT &
                        BEYOND
                    </p>
                    {/* <p className='font-[Poppins] text-xl text-gray-600'>
                    Highlighting exceptional students, impactful events.
                    </p> */}
                </div>
        
                <div className='flex gap-3 max-w-25%]'>
                    <button className='swiper-button-prev border-none outline-none flex hover:-translate-x-1.5 transition'>
                        <img src="chevron-forward-outline black.svg" className='rotate-180 w-[60px]'/>
                    </button>
                    <button className='swiper-button-next border-none outline-none flex hover:translate-x-1.5 transition'>
                        <img src="chevron-forward-outline black.svg" className='w-[60px]'/>
                    </button>
                </div>
            </div>
            <div className='carou-wrap'>
            <div className='rounded-xl border-1 border-black p-4 max-h-[450px] spot-main'>

            <Swiper
                slidesPerView={1}
                spaceBetween={"15px"}
                navigation= {{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                breakpoints={
                    {640: {
                        slidesPerView: 1.2,
                    }}
                }
                // onInit={(e)=>{
                //     console.log("POPOP", e.activeIndex)
                //     setslideinfo({
                //         activeslide:  document.querySelectorAll('.swiper-slide')[e.activeIndex - 1],
                //         nextslide: document.querySelector('.swiper-slide')[e.activeIndex],
                //         allslide: document.querySelectorAll('.swiper-slide')
                //     })
                // }}
                // onSlideChange={(e)=>{
                //     const test = {
                //         allslide: slideinfo.allslide,
                //         activeslide: slideinfo.nextslide,
                //         nextslide: slideinfo.allslide[e.realIndex + 1],
                //     }
                //     console.log(test)
                //     setslideinfo(test)
                //     console.log('lklkl', slideinfo)
                //     // activeslide =  allslide[e.activeIndex]
                //     // nextslide = allslide[e.activeIndex + 1]
                //     // console.log(activeslide, nextslide, allslide)    
                // }}
                // onProgress={(e)=>{
                //     if (slideinfo.activeslide)
                //     {
                //         const tp = slideinfo.activeslide || document.querySelector('.swiper-slide-active')
                //         // console.log("CHECk2", tp, (1 + (e.progress * 0.2)))
                //         tp.childNodes[0].childNodes[0].style.transform = `scale(${1 + e.progress})`
                //     }
                //     // if (e.progress == 1)
                //     // {
                        
                //     // }
                // }}

                loop={true}
                autoplay={
                    {
                        delay: 3000,
                        speed: 1000,
                        disableOnInteraction: true
                    }
                }
                modules={[Autoplay, Navigation]}
            >
                <SwiperSlide>
                    <div className="flex min-w-[50%] h-[300px] flex-col rounded-xl relative min-h-[300px] spotimg-overlay overflow-hidden">
                        <img src="sp2.png" className='absolute top-0 left-0 min-w-full min-h-full '/>

                        <div className="spotcard-content w-full min-h-[100%] p-12 flex flex-col justify-between z-10 text-white font-[Poppins]">
                            <p className='text-xl font-light tracking-widest'>UPCOMING EVENT</p>
                            <div className='flex flex-col'>
                                <p className='text-3xl font-semibold mb-1'>Technofete'1
                            
                                </p>
                                <p className='text-xl font-light text-gray-300'>Fostering a dynamic community of student researchers committed to driving innovation and positive change through their collaborative, ethical, and impactful research endeavors is the cornerstone of our mission. With n the world.</p>
                                <a href="/" className='mt-1 text-white no-underline underline decoration-dotted flex gap-1 text-xl'>
                                    Learn more
                                    <img src="chevron-forward-outline.svg" alt="" className='w-[10.5px] hover:translate-x-2 transition'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex min-w-[50%] h-[300px] flex-col rounded-xl relative min-h-[300px] spotimg-overlay overflow-hidden">
                        <img src="sp2.png" className='absolute top-0 left-0 min-w-full min-h-full '/>

                        <div className="spotcard-content w-full min-h-[100%] p-12 flex flex-col justify-between z-10 text-white font-[Poppins]">
                            <p className='text-xl font-light tracking-widest'>UPCOMING EVENT</p>
                            <div className='flex flex-col'>
                                <p className='text-3xl font-semibold mb-1'>Technofete'2</p>
                                <p className='text-xl font-light text-gray-300'>Fostering a dynamic community of student researchers committed to driving innovation and positive change through their collaborative, ethical, and impactful research endeavors is the cornerstone of our mission. With n the world.</p>
                                <a href="/" className='mt-1 text-white no-underline underline decoration-dotted flex gap-1 text-xl'>
                                    Learn more
                                    <img src="chevron-forward-outline.svg" alt="" className='w-[10.5px] hover:translate-x-2 transition'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex min-w-[50%] h-[300px] flex-col rounded-xl relative min-h-[300px] spotimg-overlay overflow-hidden">
                        <img src="sp2.png" className='absolute top-0 left-0 min-w-full min-h-full '/>

                        <div className="spotcard-content w-full min-h-[100%] p-12 flex flex-col justify-between z-10 text-white font-[Poppins]">
                            <p className='text-xl font-light tracking-widest'>UPCOMING EVENT</p>
                            <div className='flex flex-col'>
                                <p className='text-3xl font-semibold mb-1'>Technofete'3

                                </p>
                                <p className='text-xl font-light text-gray-300'>Fostering a dynamic community of student researchers committed to driving innovation and positive change through their collaborative, ethical, and impactful research endeavors is the cornerstone of our mission. With n the world.</p>
                                <a href="/" className='mt-1 text-white no-underline underline decoration-dotted flex gap-1 text-xl'>
                                    Learn more
                                    <img src="chevron-forward-outline.svg" alt="" className='w-[10.5px] hover:translate-x-2 transition'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex min-w-[50%] h-[300px] flex-col rounded-xl relative min-h-[300px] spotimg-overlay overflow-hidden">
                        <img src="sp2.png" className='absolute top-0 left-0 min-w-full min-h-full '/>

                        <div className="spotcard-content w-full min-h-[100%] p-12 flex flex-col justify-between z-10 text-white font-[Poppins]">
                            <p className='text-xl font-light tracking-widest'>UPCOMING EVENT</p>
                            <div className='flex flex-col'>
                                <p className='text-3xl font-semibold mb-1'>Technofete'4</p>
                                <p className='text-xl font-light text-gray-300'>Fostering a dynamic community of student researchers committed to driving innovation and positive change through their collaborative, ethical, and impactful research endeavors is the cornerstone of our mission. With n the world.</p>
                                <a href="/" className='mt-1 text-white no-underline underline decoration-dotted flex gap-1 text-xl'>
                                    Learn more
                                    <img src="chevron-forward-outline.svg" alt="" className='w-[10.5px] hover:translate-x-2 transition'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex min-w-[50%] h-[300px] flex-col rounded-xl relative min-h-[300px] spotimg-overlay overflow-hidden">
                        <img src="sp2.png" className='absolute top-0 left-0 min-w-full min-h-full '/>

                        <div className="spotcard-content w-full min-h-[100%] p-12 flex flex-col justify-between z-10 text-white font-[Poppins]">
                            <p className='text-xl font-light tracking-widest'>UPCOMING EVENT</p>
                            <div className='flex flex-col'>
                                <p className='text-3xl font-semibold mb-1'>Technofete'5</p>
                                <p className='text-xl font-light text-gray-300'>Fostering a dynamic community of student researchers committed to driving innovation and positive change through their collaborative, ethical, and impactful research endeavors is the cornerstone of our mission. With n the world.</p>
                                <a href="/" className='mt-1 text-white no-underline underline decoration-dotted flex gap-1 text-xl'>
                                    Learn more
                                    <img src="chevron-forward-outline.svg" alt="" className='w-[10.5px] hover:translate-x-2 transition'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex min-w-[50%] h-[300px] flex-col rounded-xl relative min-h-[300px] spotimg-overlay overflow-hidden">
                        <img src="sp2.png" className='absolute top-0 left-0 min-w-full min-h-full '/>

                        <div className="spotcard-content w-full min-h-[100%] p-12 flex flex-col justify-between z-10 text-white font-[Poppins]">
                            <p className='text-xl font-light tracking-widest'>UPCOMING EVENT</p>
                            <div className='flex flex-col'>
                                <p className='text-3xl font-semibold mb-1'>Technofete'6S</p>
                                <p className='text-xl font-light text-gray-300'>Fostering a dynamic community of student researchers committed to driving innovation and positive change through their collaborative, ethical, and impactful research endeavors is the cornerstone of our mission. With n the world.</p>
                                <a href="/" className='mt-1 text-white no-underline underline decoration-dotted flex gap-1 text-xl'>
                                    Learn more
                                    <img src="chevron-forward-outline.svg" alt="" className='w-[10.5px] hover:translate-x-2 transition'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            
            <button className='viewmore w-full border-none outline-none bg-[#1169b6] justify-center text-white text-2xl py-2 flex mt-4'>
                    View more
                    <img src="chevron-forward-outline.svg" className='w-4'/>
            </button>
            </div>
            </div>
              
            </div>
        
        
        {/* Unwilling our vision and  mission */}
        <ScrollTrigger onEnter={()=> setCountTrigger(true)} onExit={()=> setCountTrigger(false)} >
        <div className="unwilling linear_opacity ">
            <div className="box_image">
            <img src="Box.svg" alt="" className='linear_opacity img-fluid' />
            </div>
            <div className='heading mb-5 '>
                <h2>Unveiling our</h2>
                <h2>mission and vision</h2> 
            </div>
            <div className="row umain_container grid container-fluid w-100">
                {/* <div className="bentopar"> */}
                <div className="col-sm-12 col-md-8">
                    <div className="row">
                        <img src="unwilling image.svg" alt="" className='w-100 umwilling_image' />
                    </div>
                    <div className="row mt-4">
                    <div className="col-sm-12 col-md-6">
                        <div className="down_image_box" style={{backgroundColor:"#77C6FF"}} >
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
                    </div>
                    <div className="col-sm-12 col-md-6 dm-wrap">
                        <div className="down_image_box" style={{backgroundColor:"#FF5894"}}>
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
                </div>

                <div className='row-sm col-md-4 mt-sm-4 g-4 '>
                    <div className="grbox h-100 ">
                            <div className="right_box_count">
                                <h1>{ countTrigger &&
                                        <CountUp   start={0}
                                        end={40}
                                        duration={5.75}
                                        >
                                        </CountUp>}+</h1>
                                <h4>Students project has been funded for patent</h4>
                            </div>
                            <div className="hrline"></div>
                            <div className="right_box_count">
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
                    <div className='mission_left'>
                        <p>OUR MISSION</p>
                        <h1>Innovation & Creativity</h1>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <div className='mission_right'>
                        <p>Fostering a dynamic community of student researchers committed to driving innovation and positive change through their collaborative, ethical, and impactful research endeavors is the cornerstone of our mission. With an unwavering dedication to excellence, we empower our students to explore the frontiers of knowledge, push boundaries, and create solutions that address the pressing challenges of our time. </p>
                        <p>Together, we strive to cultivate an environment where curiosity thrives, diversity is celebrated, and ideas flourish, inspiring the next generation of leaders and change-makers to make a meaningful difference in the world.</p>
                    </div>
                </div>
            </div>


            {/* visson */}
            <div className="row mt-5">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <div className=' mission_left'>
                        <p>Our vision</p>
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
                <h2 className='font-[Poppins]'>Facilities</h2>
                
                <div className="fac-wrap">
                    <div className="fac-card p-6 border border-b border-black rounded-lg max-w-[350px]">
                        something
                    </div>
                </div>
            </div>


            {/* Our Team */}
            {/* <div className="ourteam mt-5">
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
            </div> */}
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
    
    
    </div>
  )
}
