import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';
import img from '../../data/events/back.png'
import img1 from '../../data/events/1.jpg'
import PS from '../../data/documents/PS3D(Junior).pdf'
import RR from '../../data/documents/RR3D(Junior).pdf'

const Printing3d = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/bharattech/Events');
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
          <div className='flex flex-col w-full xl:w-[60%] justify-evenly items-center mt-4 gap-4 text-center'>
            <h1 className='text-[32px] sm:text-[48px] text-[#FF721F] font-bold'>
              3D PRINTING TECHNOLOGY
            </h1>
            <p className='text-[16px] tracking-[0.4em] sm:tracking-[0.8em]'>
              JUNIOR LEVEL PROBLEM STATEMENT
            </p>
            <div className='flex flex-col sm:flex-row mt-4 justify-between gap-8 sm:gap-16'>
              <a href={PS} download="Problem Statement 3D printing Junior.pdf">
                <button className='bg-[#FF721F] text-white text-[14px] px-4 py-4 rounded-[10px]'>
                  DOWNLOAD PROBLEM STATEMENT
                </button>
              </a>
              <a href={RR} download="3D Printing Rules and Regulations.pdf">
                <button className='bg-[#FF721F] text-white text-[14px] px-4 py-4 rounded-[10px]'>
                  DOWNLOAD RULES & REGULATIONS
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* <h1 className='text-[32px] sm:text-[40px] font-bold mt-12 text-center'>DRONE JUNIOR LEVEL</h1> */}
        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify mt-12'>
          <p className='text-[20px] text-center sm:text-left'>
            3D printing is revolutionizing agriculture by enhancing productivity, sustainability, and
            efficiency. Here are some key applications and benefits:
          </p>
          <p>
            <b>Prototyping and Production: &nbsp;</b>Farmers can quickly create custom tools and parts, reducing
            downtime and repair costs.
          </p>
          <p>
            <b>Cost-Effective Production: &nbsp;</b> Small-scale or niche tools can be produced affordably to meet
            unique farming needs.
          </p>
          <p>
            <b>Models and Demonstrations: &nbsp;</b>3D printed models of crops, farm layouts, and equipment are
            useful for education, helping farmers and students understand agricultural practices and
            technologies.
          </p>
          <div className='flex flex-col gap-6'>
            <p className='font-bold text-[24px]'>
              Problem Statement:
            </p>
            <p>
              &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The problem statement for young participants is to design and create useful equipment
              or objects for agriculture using 3D printing technology. Use your creativity and knowledge to
              solve agricultural problems. Each level will provide a specific design statement for you to follow
              and design a 3D model.
            </p>
          </div>
        </div>

        <h1 className='text-[32px] font-bold mt-12 text-center'>PRELIMINARY LEVEL</h1>


        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Task:</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Create a unique 3D model of a flowerpot with dimensions less than or equal to 10 x 10 x
                10 cm (L x B x H) using 3D design software such as Tinker CAD, 123D Design, etc.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Submission Requirements:</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Submit a video or timelapse video (max 2 minutes) showcasing the 3D design of
                flowerpot, describing the design process.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>In the video, participants should mention their names, school name, and location.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>Export and submit 3D design file in ‘.stl’, ‘.obj’, or ‘.3mf’ format. The file must not be more
                than 25 MB.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>Upload the video to a specified platform (e.g., YouTube, Google Drive) and share the link
                for review.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>Submit the video link & 3D file through email to bharatteckleague@gmail.com.
              </span>
            </li>
          </ul>
        </div>

        <h1 className='text-[32px] font-bold mt-12 text-center'>ZONAL LEVEL</h1>

        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Competition: </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>Create a detailed 3D model of a self-watering pot using CAD-based software such as
                123D, Fusion 360, AutoCAD, CATIA, etc (offline CAD software only). </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>Export the design files in ‘.stl’, ‘.obj’, or ‘.3mf’format and should submit to the coordinator.</span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>Detailed dimensions and part descriptions will be provided during the competition.  </span>
            </li>
          </ul>
        </div>


        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Criteria:</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Participants must bring their own laptops along with offline CAD software installed.
                Internet access will not be provided or permitted in the competition.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>Each team can submit 1 or 2 design models within the 3-hour time limit.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>The self-watering pot model for the zonal level competition should differ from the design
                created at the preliminary level.
              </span>
            </li>
          </ul>
        </div>


        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Performance Judging: </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>Designs will be judged based on their uniqueness of model and total design time.</span>
            </li>
          </ul>
        </div>

        <h1 className='text-[32px] font-bold mt-12 text-center'>FINAL LEVEL</h1>

        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Competition: </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>Create and 3D print a drip irrigation system incorporating a water bottle in real-time. The
                design must be watertight, user-friendly, printable in less time.</span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>Participants will have maximum 2 hours for designing and an additional 2 hours for 3D
                printing, totally a 4-hour competition.</span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>Detailed dimensions and part descriptions will be provided during the competition.</span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Criteria:</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>Participants must bring their own laptops along with offline CAD software installed.
                Internet access will not be provided or permitted in the competition.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Performance Judging: </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>Designs will be judged based on their quality, including how they look, how well they
                function, and the time taken to design, slicing, and 3D print the model.</span>
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

export default Printing3d