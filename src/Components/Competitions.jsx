import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'
import img from '../data/events/back.png'
import img1 from '../data/events/1.png'
import PSDroneJunior from '../data/documents/PSDroneJunior.pdf'
import RRDroneJunior from '../data/documents/RRDroneJunior.pdf'

const Competitions = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/bharattech/Events');
    };

    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-col justify-center items-center w-[90%] m-8 mx-auto gap-8'>
                <div className='w-full pl-4 sm:pl-20'>
                    <img src={img} alt='back' className='w-[40px] h-[40px] cursor-pointer' onClick={handleClick}/>
                </div>

                <div className='flex flex-col xl:flex-row justify-around w-full'>
                    <div className='w-full xl:w-[40%] flex flex-col justify-start items-center'>
                        <img src={img1} alt='img1' className='w-[350px] sm:w-[400px] h-[250px]' />
                    </div>
                    <div className='flex flex-col w-full xl:w-[60%] justify-evenly items-center gap-4 text-center'>
                        <h1 className='text-[32px] sm:text-[48px] text-[#FF721F] font-bold'>
                            3D PRINTING TECHNOLOGY
                        </h1>
                        <p className='text-[16px] tracking-[0.4em] sm:tracking-[0.8em]'>
                            JUNIOR LEVEL PROBLEM STATEMENT
                        </p>
                        <div className='flex flex-col sm:flex-row mt-4 justify-between gap-8 sm:gap-16'>
                            <a href={PSDroneJunior} download="Problem Statement Drone Junior.pdf">
                                <button className='bg-[#FF721F] text-white text-[14px] px-4 py-4 rounded-[10px]'>
                                    DOWNLOAD PROBLEM STATEMENT
                                </button>
                            </a>
                            <a href={RRDroneJunior} download="Drone Rules and Regulations.pdf">
                                <button className='bg-[#FF721F] text-white text-[14px] px-4 py-4 rounded-[10px]'>
                                    DOWNLOAD RULES & REGULATIONS
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <h1 className='text-[32px] sm:text-[40px] font-bold mt-12 text-center'>DRONE JUNIOR LEVEL</h1>
                <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
                    <p className='text-[20px] text-center'>
                        Enhancing Farming with Agricultural Drones:
                    </p>
                    <p>
                        <b>Monitoring Crops:</b> Drones fly over fields to check crop health, identify pests, and estimate yields, helping farmers make better decisions about watering, fertilizing, and pest control.
                    </p>
                    <p>
                        <b>Precision Mapping:</b> They create detailed maps of farmland, analyze soil conditions, monitor irrigation, and plan the best planting patterns.
                    </p>
                    <p>
                        <b>Spraying:</b> Drones can spray pesticides or fertilizers accurately, reducing waste and improving efficiency, especially in difficult-to-reach areas.
                    </p>
                    <div className='flex flex-col gap-6'>
                        <p className='font-bold text-[24px]'>
                            Problem Statement:
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; With the increasing use of drones in agriculture, it is crucial for the younger generation to understand the real-life challenges of drone operation. To address this, we provide a platform for the competition where participants navigate a drone through a sample arena, showcasing their piloting skills.
                        </p>
                    </div>
                </div>

                <h1 className='text-[32px] font-bold mt-12 text-center'>PRELIMINARY LEVEL</h1>


                <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
                    <p className='text-[24px] font-bold'>Video Submission: </p>
                    <ul className="list-none space-y-4 pl-4 sm:pl-16">
                        <li className="flex">
                            <span className="mr-4">-</span>
                            <span>
                                Submit a video or timelapse video (max 2 minutes) showcasing drone control skills
                                (take-off, landing, forward, backward, left, right, 360 rotation).
                            </span>
                        </li>
                        <li className="flex">
                            <span className="mr-4">-</span>
                            <span>
                                In the video, participants should mention their names, school name, and location,
                                along with the drone specifications.
                            </span>
                        </li>
                        <li className="flex">
                            <span className="mr-4">-</span>
                            <span>
                                Upload the video to a specified platform (e.g., YouTube, Google Drive) and share
                                the link for review.
                            </span>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
                    <p className='text-[24px] font-bold'>Drone Specifications:  </p>
                    <ul className="list-none space-y-4 pl-4 sm:pl-16">
                        <li className="flex">
                            <span className="mr-4">-</span>
                            <span>
                                Only specified drone types are allowed, with a maximum size of 30cm x 30cm (including wings/propellers).
                                (Refer the rules and regulations document for approved drones).
                            </span>
                        </li>
                    </ul>
                </div>

                <h1 className='text-[32px] font-bold mt-12 text-center'>ZONAL LEVEL</h1>

                <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
                    <p className='text-[24px] font-bold'>Drone Approval: </p>
                    <ul className="list-none space-y-4 pl-4 sm:pl-16">
                        <li className="flex">
                            <span className="mr-4">-</span>
                            <span>
                                Drones must be brought to the competition which is showcased in the video of preliminary level.
                                (Refer the rules and regulations document for approved drones)
                            </span>
                        </li>
                    </ul>
                </div>


                <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
                    <p className='text-[24px] font-bold'>Competition: </p>
                    <ul className="list-none space-y-4 pl-4 sm:pl-16">
                        <li className="flex">
                            <span className="mr-4">-</span>
                            <span>
                                In the zonal round, teams will participate hands-on. Each team will control and fly their drone through an arena, avoiding various obstacles, and must complete 2 laps.
                            </span>
                        </li>
                    </ul>
                </div>


                <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
                    <p className='text-[24px] font-bold'>Lap Completion: </p>
                    <ul className="list-none space-y-4 pl-4 sm:pl-16">
                        <li className="flex">
                            <span className="mr-4">-</span>
                            <span>
                                Teams with 2 members will complete 2 laps with the same pilot and co-pilot.
                                Teams with 4 members will switch the pilot and co-pilot for the 2nd lap.
                            </span>
                        </li>
                    </ul>
                </div>


                <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
                    <p className='text-[24px] font-bold'>Performance Judging: </p>
                    <ul className="list-none space-y-4 pl-4 sm:pl-16">
                        <li className="flex">
                            <span className="mr-4">-</span>
                            <span>
                                Teams are evaluated based on their precision, skill in navigating obstacles, and completion time. Faster and more accurate teams will score higher.
                            </span>
                        </li>
                    </ul>
                </div>

                <h1 className='text-[32px] font-bold mt-12 text-center'>FINAL LEVEL</h1>

                <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
                    <p className='text-[24px] font-bold'>Drone Approval: </p>
                    <ul className="list-none space-y-4 pl-4 sm:pl-16">
                        <li className="flex">
                            <span className="mr-4">-</span>
                            <span>
                                Drones must be brought to the competition which are used in Zonal level.
                            </span>
                        </li>
                    </ul>
                </div>


                <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
                    <p className='text-[24px] font-bold'>Competition: </p>
                    <ul className="list-none space-y-4 pl-4 sm:pl-16">
                        <li className="flex">
                            <span className="mr-4">-</span>
                            <span>
                                In the Final round, teams will participate hands-on. Each team will control and fly their drone through an arena, avoiding various obstacles, and must complete 2 laps.
                            </span>
                        </li>
                        <li className="flex">
                            <span className="mr-4">-</span>
                            <span>
                                The arena will feature more obstacles and challenges than the zonal round, requiring advanced skills and precision.
                            </span>
                        </li>
                    </ul>
                </div>


                <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
                    <p className='text-[24px] font-bold'>Lap Completion: </p>
                    <ul className="list-none space-y-4 pl-4 sm:pl-16">
                        <li className="flex">
                            <span className="mr-4">-</span>
                            <span>
                                Teams with 2 members will complete 2 laps with the same pilot and co-pilot.
                                Teams with 4 members will switch the pilot and co-pilot for the 2nd lap.
                            </span>
                        </li>
                    </ul>
                </div>


                <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify mb-16'>
                    <p className='text-[24px] font-bold'>Performance Judging: </p>
                    <ul className="list-none space-y-4 pl-4 sm:pl-16">
                        <li className="flex">
                            <span className="mr-4">-</span>
                            <span>
                                Teams are evaluated based on their precision, skill in navigating obstacles, and completion time. Faster and more accurate teams will score higher.
                            </span>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='relative w-full mt-10 h-auto'>
                <Footer />
            </div>
        </div>

    )
}

export default Competitions