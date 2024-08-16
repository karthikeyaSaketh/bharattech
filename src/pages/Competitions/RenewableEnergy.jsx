import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';
import img from '../../data/events/back.png'
import img1 from '../../data/events/4.jpg'
import PS from '../../data/documents/PSCleanEnergy(Junior).pdf'
import RR from '../../data/documents/RRCleanEnergy(Junior).pdf'

const RenewableEnergy = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/bharatteck/Events');
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
            <h1 className='text-[32px] sm:text-[48px] text-[#FF721F] font-bold'>
              CLEAN ENERGY
            </h1>
            <p className='text-[16px] tracking-[0.4em] sm:tracking-[0.8em]'>
              JUNIOR LEVEL PROBLEM STATEMENT
            </p>
            <div className='flex flex-col sm:flex-row mt-4 justify-between gap-8 sm:gap-16'>
              <a href={PS} download="Problem Statement Renewable Energy Junior.pdf">
                <button className='bg-[#FF721F] text-white text-[14px] px-4 py-4 rounded-[10px]'>
                  DOWNLOAD PROBLEM STATEMENT
                </button>
              </a>
              <a href={RR} download="Renewable Energy Rules and Regulations.pdf">
                <button className='bg-[#FF721F] text-white text-[14px] px-4 py-4 rounded-[10px]'>
                  DOWNLOAD RULES & REGULATIONS
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* <h1 className='text-[32px] sm:text-[40px] font-bold mt-12 text-center'>DRONE JUNIOR LEVEL</h1> */}
        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify mt-12'>
          <p className='text-[22px] text-center font-bold'>
            Problem Statement:
          </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex flex-col">
              <span className="font-bold text-[18px]">1. Solar-Powered Water Pump: </span>
              <span className='ml-4'>
                Design a model of a solar-powered water pump for irrigation. Include a small solar panel and a
                water pump to show how solar energy can move water to plants.
              </span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold text-[18px]">2. Wind-Powered Water Pump:  </span>
              <span className='ml-4'>
                Create a model of a wind-powered water pump for irrigation. Use a small wind turbine to power
                the pump, demonstrating how wind energy can move water to crops.
              </span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold text-[18px]">3.Hydro-Powered Water Pump:  </span>
              <span className='ml-4'>
                Build a model of a water pump powered by water flow. Include a small water wheel or turbine
                to operate the pump, showing how moving water can be used for irrigation.
              </span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold text-[18px]">4. Solar-Powered LED Farm Lights:  </span>
              <span className='ml-4'>
                Construct a setup where solar panels generate electricity for LED farm lights. Show how solar
                energy can provide lighting for farms at night or in low light.
              </span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold text-[18px]">5. Wind-Powered LED Farm Lights:  </span>
              <span className='ml-4'>
                Develop a model where a small wind turbine generates electricity for LED farm lights.
                Demonstrate how wind energy can be used to light farms sustainably.
              </span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold text-[18px]">6. Hydro-Powered LED Farm Lights:  </span>
              <span className='ml-4'>
                Design a small hydroelectric generator model that uses flowing water to produce electricity for
                LED farm lights. Show how water flow can be converted into power for farm lighting.
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
                Students should create a working model project related to agriculture using any renewable
                energy source, such as solar energy, wind energy, or hydro energy, and explain it.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Each team can choose only one problem statement out of six from the above list to solve
                throughout the competition.
              </span>
            </li>
          </ul>
        </div>


        <h1 className='text-[32px] font-bold mt-12 text-center'>PRELIMINARY LEVEL</h1>

        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Participation: </p>
          <p className='text-[16px]'>Students must prepare a document for an agriculture-related project using the selected renewable
            energy source (solar, wind, or hydro). The document should include: </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Project Materials: List all materials used.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                How the Project Works: Explain the functionality and operation of the project.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Benefits of the Project: Describe the advantages and potential impact of the project.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Student Details: Include names, school, and location.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Submission Requirements:  </p>
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
          <p className='text-[24px] font-bold'>Competition: </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Teams selected from the prelims must bring their project materials to the venue.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Students will have a maximum of 3 hours to assemble and complete their project on-site.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                The model should not exceed <b>50 cm in length</b> and <b>50 cm in width</b>. Only limited decorative
                items and components are allowed to ensure the focus remains on functionality.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Only battery power supply should be used to operate the models.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                If AC (220V) supply is required for the Zonal/Final competition, please notify the management team in advance via email.
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
          <p className='text-[24px] font-bold'>Presentation & Judging: </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Teams must explain their project and demonstrate its functionality to the judges.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Teams will be evaluated based on the performance and explanation of their project.
              </span>
            </li>
          </ul>
        </div>


        <div className='flex flex-col items-start justify-center w-[80%] leading-8 text-justify'>
          <p className='text-[18px]'><b>NOTE :</b>&nbsp;&nbsp;&nbsp;Ensure that all project components and tools are brought to the venue as required.</p>
        </div>


        <h1 className='text-[32px] font-bold mt-12 text-center'>FINAL LEVEL</h1>

        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[24px] font-bold'>Competition: </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Teams selected from the zonal level must bring their fully completed projects to the venue
                for final level participation.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                In the final level, teams will present their projects to both judges and the audience.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                The project should be fully completed and come to the competition as an upgraded version
                from the zonal level.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Teams must give a detailed presentation (PPT) in their laptop, and also explaining the
                project's design, functionality, and benefits.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Only battery power supply should be used to operate the models.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                If AC (220V) supply is required for the Zonal/Final competition, please notify the management team in advance via email.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                No power supply will be provided for laptop charging in Final level.
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


        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify mb-16'>
          <p className='text-[24px] font-bold'>Performance Judging: </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Judges will evaluate projects based on innovation, functionality, presentation, and the
                practical benefits of the project.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Teams will be assessed on their ability to clearly explain their project and its impact.
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

export default RenewableEnergy