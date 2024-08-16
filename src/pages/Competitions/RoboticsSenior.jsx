import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';
import img from '../../data/events/back2.png'
import img1 from '../../data/events/6.jpg'
import arena from '../../data/events/robotics.jpg'
import robot from '../../data/events/robot.jpg'
import ball from '../../data/events/ball.jpg'
import pipe from '../../data/events/pipe.jpeg'
import PS from '../../data/documents/PSRobotics(Senior).pdf'
import RR from '../../data/documents/RRRobotics(Senior).pdf'

const RoboticsSenior = () => {
  const navigate = useNavigate();

  const sampleRobotRef = useRef(null);


  const handleClick = () => {
    navigate('/bharatteck/Events');
  };
  const handleSampleRobotClick = () => {
    // Calculate the offset position with 70px padding
    const yOffset = -70; // Adjust the offset as needed
  
    // Get the position of the element
    const elementPosition = sampleRobotRef.current.getBoundingClientRect().top + window.scrollY;
  
    // Scroll to the position with smooth behavior
    window.scrollTo({
      top: elementPosition + yOffset,
      behavior: 'smooth',
    });
  };

  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col justify-center items-center w-[90%] m-8 mx-auto gap-8'>
        <div className='w-full pl-4 sm:pl-20'>
          <img src={img} alt='back' className='w-[40px] h-[40px] cursor-pointer' onClick={handleClick} />
        </div>

        <div className='flex flex-col xl:flex-row justify-around w-full'>
          <div className='w-full xl:w-[40%] flex flex-col justify-start items-center xl:pl-20'>
            <img src={img1} alt='img1' className='w-[350px] sm:w-[300px] h-[300px]' />
          </div>
          <div className='flex flex-col w-full xl:w-[60%] justify-evenly items-center gap-4 text-center mt-4'>
            <h1 className='text-[32px] sm:text-[48px] text-[#1B8534] font-bold'>
              Robotics
            </h1>
            <p className='text-[16px] tracking-[0.4em] sm:tracking-[0.8em]'>
              SENIOR LEVEL PROBLEM STATEMENT
            </p>
            <div className='flex flex-col sm:flex-row mt-4 justify-between gap-8 sm:gap-16'>
              <a href={PS} download="Problem Statement Robotics Senior.pdf">
                <button className='bg-[#1B8534] text-white text-[14px] px-4 py-4 rounded-[10px]'>
                  DOWNLOAD PROBLEM STATEMENT
                </button>
              </a>
              <a href={RR} download="Robotics Rules and Regulations.pdf">
                <button className='bg-[#1B8534] text-white text-[14px] px-4 py-4 rounded-[10px]'>
                  DOWNLOAD RULES & REGULATIONS
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* <h1 className='text-[32px] sm:text-[40px] font-bold mt-12 text-center'>DRONE JUNIOR LEVEL</h1> */}
        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify mt-12'>
          <p className='text-[20px] text-center'>
            Robotics in agriculture enhances efficiency and productivity. Key applications include:
          </p>
          <p>
            <b>Automated Harvesting : &nbsp;</b> Robots equipped with sensors and AI can pick fruits and vegetables,
            reducing labor costs and increasing speed.
          </p>
          <p>
            <b>Precision Farming : &nbsp;</b>Autonomous tractors apply fertilizers, pesticides, and water with precision,
            optimizing resource use and minimizing waste.
          </p>
          <p>
            <b>Planting and Seeding : &nbsp;</b>  Robots ensure accurate planting and seeding, improving crop yields and
            reducing manual labor.
          </p>
          <div className='flex flex-col gap-6 mt-4'>
            <p className='font-bold text-[24px]'>
              Problem Statement:
            </p>
            <p>
              &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; It is essential for the younger generation to understand the practical challenges of robotic
              operation in agriculture. To address this, we are organizing a competition where participants create
              and navigate a robot through a simulated agricultural field, showcasing their skills in controlling the
              robot and completing a designated arena, by pick and place the plants.
            </p>
          </div>
        </div>

        <h1 className='text-[32px] font-bold mt-12 text-center'>PRELIMINARY LEVEL</h1>


        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Video Submission: </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>Submit a video or timelapse video (max 2 minutes) showing control of the robot (forward,
                backward, left, right, pick and place).
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                In the video, participants should mention their names, school name, and location, along with
                the robot specifications.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Upload the video to a specified platform (e.g., YouTube, Google Drive) and share the link for
                review.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Additionally, participants should submit a document (PDF format) on the robot (including
                construction details, materials used, control mechanisms, type of gripper, etc).
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                The video link and document should be sent via email to bharatteckleague@gmail.com.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex justify-center mt-8'>
          <button
            className='bg-[#1B8534] text-white text-[14px] px-6 py-3 rounded-[10px] cursor-pointer'
            onClick={handleSampleRobotClick}
          >
            SAMPLE ROBOT
          </button>
        </div>


        <h1 className='text-[32px] font-bold mt-12 text-center'>ZONAL LEVEL</h1>

        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Robot Approval: </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>The robot dimensions should be less than or equal to <b>40cm X 40cm X 30cm</b> (LxWxH). And weight should not be more than <b>5 kilograms.</b> Specification +/- 5% is acceptable.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>The robot can be either wired or wireless, depending on the team's preference and the
                competition rules.
              </span>
            </li>
          </ul>
        </div>


        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Competition: </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>In the zonal round, teams will control their robot to pick up objects from one side of the arena
                and place them on the other side, avoiding obstacles and completing the task quickly.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>Every robot should have a picker/gripper to hold and carry objects to their respective points.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[20px] font-bold text-left'>NOTE : </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Rules and guidelines may be subjected to changes at the time of the competition based on prevailing conditions and coordinator decisions. However, the core concept of the competition will remain unchanged.
              </span>
            </li>
          </ul>
        </div>

        
        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Objects : </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>The objects in arena (balls and pipes), weigh between 10 grams to 200 grams. The diameter
                of balls ranges from 5 cm to 8 cm, and the diameter of pipes ranges from 3 cm to 6 cm. </span>
            </li>
          </ul>
        </div>

        <h1 className='text-[32px] font-bold mt-12 text-center'>SAMPLE OBJECTS</h1>

        <div className='flex flex-col sm:flex-row w-[80%] gap-6 leading-8 text-justify items-center sm:items-start justify-around'>
          <div className='flex flex-col items-center w-full sm:w-[40%] sm:gap-12 lg:gap-20'>
            <img src={ball} alt='arena' className='w-full h-auto' />
          </div>
          <div className='flex flex-col items-center w-full sm:w-[40%]'>
            <img src={pipe} alt='arena' className='w-full h-auto' />
          </div>
        </div>


        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Performance Judging: </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Teams are evaluated based on their precision, skill in navigating obstacles, and completion
                time. Faster and more accurate teams will score higher.
              </span>
            </li>
          </ul>
        </div>

        <h1 className='text-[32px] font-bold mt-12 text-center'>FINAL LEVEL</h1>

        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Competition: </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                The final level will feature more complex obstacles and challenges compared to the zonal round.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Two teams will participate simultaneously in one arena but compete individually, starting
                from opposite ends of the arena.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                The driver must navigate the robot to pick an object from the pickup point and place it at the
                drop-off point with the navigator's (2nd participant) help.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>The robot should be driven by avoiding obstacles and completing the task quickly
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>Teams must complete 2 laps, with different drivers and navigators for each lap.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[20px] font-bold text-left'>NOTE : </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Rules and guidelines may be subjected to changes at the time of the competition based on prevailing conditions and coordinator decisions. However, the core concept of the competition will remain unchanged.
              </span>
            </li>
          </ul>
        </div>


        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify mb-8'>
          <p className='text-[24px] font-bold'>Performance Judging: </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>Teams are evaluated based on their precision, skill in navigating obstacles, and completion
                time. Faster and more accurate teams will score higher.
              </span>
            </li>
          </ul>
        </div>


        <div className='flex flex-col sm:flex-row w-[80%] gap-6 leading-8 text-justify items-center sm:items-start justify-around' ref={sampleRobotRef}>
          <div className='flex flex-col items-center w-full sm:w-[50%] sm:gap-12 lg:gap-20'>
            <p className='text-[28px] font-bold'>SAMPLE ROBOT </p>
            <img src={robot} alt='arena' className='w-full h-auto' />
          </div>
          <div className='flex flex-col items-center w-full sm:w-[40%]'>
            <p className='text-[28px] font-bold'>SAMPLE ARENA </p>
            <img src={arena} alt='arena' className='w-full h-auto' />
          </div>
        </div>

        <div className='flex items-center justify-center w-[80%] gap-6 leading-8 mb-8'>
          <ul className="list-none space-y-4 w-full">
            <li className="w-full text-center text-[16px] sm:text-[20px] lg:text-[24px]">
              The images shown are for reference purposes only and serves as samples.
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

export default RoboticsSenior