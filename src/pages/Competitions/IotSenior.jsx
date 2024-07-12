import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';
import img from '../../data/events/back2.png'
import img1 from '../../data/events/8.jpg'
import PS from '../../data/documents/PSIotSenior.pdf'
import RR from '../../data/documents/RRIotSenior.pdf'

const IotSenior = () => {
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
          <div className='flex flex-col w-full xl:w-[60%] justify-evenly items-center gap-4 text-center mt-4'>
            <h1 className='text-[32px] sm:text-[48px] text-[#1B8534] font-bold'>
              Internet Of Things
            </h1>
            <p className='text-[16px] tracking-[0.4em] sm:tracking-[0.8em]'>
              SENIOR LEVEL PROBLEM STATEMENT
            </p>
            <div className='flex flex-col sm:flex-row mt-4 justify-between gap-8 sm:gap-16'>
              <a href={PS} download="Problem Statement Iot.pdf">
                <button className='bg-[#1B8534] text-white text-[14px] px-4 py-4 rounded-[10px]'>
                  DOWNLOAD PROBLEM STATEMENT
                </button>
              </a>
              <a href={RR} download="Iot Rules and Regulations.pdf">
                <button className='bg-[#1B8534] text-white text-[14px] px-4 py-4 rounded-[10px]'>
                  DOWNLOAD RULES & REGULATIONS
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* <h1 className='text-[32px] sm:text-[40px] font-bold mt-12 text-center'>DRONE JUNIOR LEVEL</h1> */}
        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify mt-12'>
          <p className='text-[18px]'>
            IoT (Internet of Things) in agriculture leverages interconnected devices and sensors to enhance
            farming operations, improving efficiency and resource management. Key applications include:
          </p>
          <p>
            <b>Smart Irrigation: </b> Drones fly over fields to check crop health, identify pests, and estimate yields, helping farmers make better decisions about watering, fertilizing, and pest control.
          </p>
          <p>
            <b>Precision Farming:</b> They create detailed maps of farmland, analyze soil conditions, monitor irrigation, and plan the best planting patterns.
          </p>
          <p>
            <b>Environmental Monitoring:</b> Drones can spray pesticides or fertilizers accurately, reducing waste and improving efficiency, especially in difficult-to-reach areas.
          </p>
          <div className='flex flex-col gap-6 mt-4'>
            <p className='font-bold text-[24px]'>
              Problem Statement:
            </p>
            <p>
              &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; To help the younger generation understand the challenges of automation in agriculture, we
              are organizing a competition where participants create an IoT device for agricultural use. The
              competition consists of three rounds: Preliminary, Zonal, and Final. Participants will start with an
              idea and develop it into a working prototype.
            </p>
          </div>
        </div>

        <h1 className='text-[32px] font-bold mt-12 text-center'>PRELIMINARY LEVEL</h1>


        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Participation: </p>
          <p className='text-[16px]'>Students must prepare a document for an agriculture-related device using Internet of Things (IoT)
            technology. The document should include:
          </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Project Materials : List all components and materials used.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                How the Project Works : Explain the functionality and operation of the IoT solution.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Benefits : Describe the advantages and potential impact on agricultural practices.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Student Details: Include names, college, and location.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Submission Requirements :  </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                The document must be in PDF format and should not exceed two pages.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                No AI-generated tools are allowed for document creation.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                The document should be sent via email to bharatteckleague@gmail.com.
              </span>
            </li>
          </ul>
        </div>

        <h1 className='text-[32px] font-bold mt-12 text-center'>ZONAL LEVEL</h1>

        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Competition :  </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Teams selected from the prelims must participate in the zonal level through software
                simulation on-site.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Students will have a maximum of 3 hours to create and complete their IoT project simulation
                in their laptop.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Teams must bring one laptop per team with the required simulation software installed. No
                internet access will be provided until evaluation.
              </span>
            </li>
          </ul>
        </div>


        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Presentation & Judging :  </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Teams must present their virtual device and demonstrate its functionality using the
                simulation software.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Evaluation will be based on the performance and explanation of the simulated IoT project. 
              </span>
            </li>
          </ul>
        </div>

        <h1 className='text-[32px] font-bold mt-12 text-center'>FINAL LEVEL</h1>

        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Competition :  </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Teams selected from the zonal level must bring all necessary components, tools and 
                equipment to the venue for the final level. 
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                In the final level, teams will construct the hardware of their IoT device on-site.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Teams will present their completed IoT devices to the judges, including a detailed 
                PowerPoint presentation explaining the design, functionality, and benefits. 
              </span>
            </li>
          </ul>
        </div>


        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Performance Judging :  </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Judges will evaluate the teams based on the functionality and portability of the prototype 
                IoT device, as well as presentation skills. 
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

export default IotSenior