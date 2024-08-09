import React,{useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';
import img from '../../data/events/back2.png'
import img1 from '../../data/events/7.jpg'
import drone from '../../data/events/drone.jpg'
import PS from '../../data/documents/PSDrone(Senior).pdf'
import RR from '../../data/documents/RRDrone(Senior).pdf'

const DroneSenior = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/bharattech/Events');
  };
  const sampleRobotRef = useRef(null);

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
              DRONE TECHNOLOGY
            </h1>
            <p className='text-[16px] tracking-[0.4em] sm:tracking-[0.8em]'>
              SENIOR LEVEL PROBLEM STATEMENT
            </p>
            <div className='flex flex-col sm:flex-row mt-4 justify-between gap-8 sm:gap-16'>
              <a href={PS} download="Problem Statement Drone Senior.pdf">
                <button className='bg-[#1B8534] text-white text-[14px] px-4 py-4 rounded-[10px]'>
                  DOWNLOAD PROBLEM STATEMENT
                </button>
              </a>
              <a href={RR} download="Drone Rules and Regulations.pdf">
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
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                The video link should be sent via email to bharatteckleague@gmail.com.
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
                Only specified drone types are allowed, with a maximum size of 50cm x 60cm (including wings/propellers).
                (Refer the rules and regulations document for approved drones).
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
                Participants must attach neodymium magnets to their drones. An object with a magnet
                will be placed in the middle of the arena.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Participants must fly their drones through obstacles to reach the object.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Using the magnets, participants must lift and carry the object, which weighs between 10
                grams to 20 grams, to the finish line.
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
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Judges' decisions are final, and any violations of the rules will lead to immediate
                disqualification.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify mb-4' ref={sampleRobotRef}>
          <p className='text-[24px] font-bold'>Allowed Drone Models :  </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span className='text-blue-500'>
                <a href="
https://www.amazon.in/Daily-Shop-Daily-Shop-HX-750-Drone-Quadcopter-360-Degree-Movable-Stunt-Drone-Without-Camera-for-Kids-Unbreakable-2-Extra-Blades-Multicolor/dp/B0D3PZ9NXB/ref=sr_1_2?crid=I85D2W762SE9&dib=eyJ2IjoiMSJ9.OraN1xqroEFxk2yiUiIdQuIBh1j7W4arroVyJ5rSQJr-V5tgOSE7GQ-eb9tBb45IYxJDlMSXod7Vufk7C3BzgQK_t7qiNERGe7IOBTbk-Uz-vZnusP7BGzoeioKCef-aoX4ct9hq0TFgbvBAS7ZrnGprhWRxlFfVgeleFbWCqIs1Oh_XpRrbeDNAW_LHX6DAwBFDFzMLZVF4IukYSX2Xh55yvcfcCHaKtcPI4ezTQHHZZLYJ8DtriM9nXUIh8BQC6Q7ZEZFQPX7CVmHMSL6-IkWJOXHQBY_HzxIhZyWuZj4.H7gyiTgXnyXbYkEDI8AQjj2HSnRGSs9P5K3IskylmAg&dib_tag=se&keywords=Hx+750+Drone&qid=1720159634&s=toys&sprefix=hx+750+drone%2Ctoys%2C198&sr=1-2" target='_blank'>
                  Daily-Shop-HX-750-Drone-Quadcopter-360-Degree-Movable-Stunt-Drone-Without-Camera-for-Kids-Unbreakable-2-Extra-Blades-(Multicolor) : Amazon.in: Toys & Games
                </a>
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span className='text-blue-500'>
                <a
                  href="https://www.amazon.in/dp/B06W5QQQJZ/ref=syn_sd_onsite_desktop_0?ie=UTF8&psc=1&pd_rd_plhdr=t&aref=745Mb5HzQa"
                  target='_blank'>
                  Pluto DIY Nano Drone Kit Pluto 1.2 - for Learning Stem & Tinkering, Crash Resistant, Smartphone Controlled, Rechargeable Battery by Drona Aviation, 25 educational Drone Programming Projects : Amazon.in: Toys & Games
                </a>
              </span>
            </li>

            <li className="flex">
              <span className="mr-4">-</span>
              <span className='text-blue-500'>
                <a
                  href='https://robocraze.com/products/dm002-wifi-fpv-rc-diy-quadcopter-kit?variant=41176363925657&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOoqHM1-HgIuqtPg3UzUO4hp6GoWESz1bAATojtrtW382fQW-ECeXjOA'
                  target='_blank'>
                  Buy DM002 DIY Drone Kit With Manual at Cheapest Price – Robocraze
                </a>
              </span>
            </li>

            <li className="flex">
              <span className="mr-4">-</span>
              <span className='text-blue-500'>
                <a
                  href='https://xyzhobby.com/product/dm002-diy-mini-micro-fpv-quadcopter-4ch-6-aixs-gyro-rc-quadcopter-drone/?utm_source=Google+Shopping&utm_medium=cpc&utm_campaign=Xyzhobby_1&srsltid=AfmBOooV1hvEna6UBWL1CuLN4-n-M4wAgnvRP35C9C9kSmUcHPR0-vV9dLM'
                  target='_blank'>
                  DM002 DIY Mini Micro FPV Quadcopter 4CH 6-Aixs Gyro RC Quadcopter Drone – xyzhobby </a>
              </span>
            </li>

            <li className="flex">
              <span className="mr-4">-</span>
              <span className='text-blue-500'>
                <a
                  href='https://www.amazon.in/altitude-headless-Quadcopter-Drone-SALE-drone-controller/dp/B0D28V7DHB/ref=sr_1_1?crid=14C7XBELHE5E6&dib=eyJ2IjoiMSJ9.XH97vgoEv0B3k8wrTSmmeFxVps2iwr8F5oLqtxtQ985ORJe8jxWegD5IOX3Aek3O6JORAK1EfMHqg6nyt8H2khgMjZqYW4DvMLPQx23Y3aIJKNuVsQ0i72NvNvIW6Gdrr1Nn7usoGzktgJebVH4nYoesKtTx9GzeugKAC6I0Ipgh8mJWS3MOOx3SPDOsGecrDnu6V7zuUWrT1d_MTXBK9CVfZsUeocZxAqhjdVPzzDWfFYy-5zG72kQKm_kly3Mxw7j1ag-DyfJe-36Ld351zGiz7ATr3Oml0gQcbE4XeW4.cBsgSpFJpgD46UhRfNf9jEL-lb1ysZdAshuDdhF_emA&dib_tag=se&keywords=DM002&qid=1720159797&s=automotive&sprefix=dm002%2Cautomotive%2C205&sr=1-1-catcorr'
                  target='_blank'>
                  DM002 Wifi altitude hold headless mode| Quadcopter-Drone Spare Parts- Motor And Circuit Full Parts This drone is your own creation Build drone camera 4k 1080p drone camera for kids 8-12 drone SALE-drone flight controller- : Amazon.in: Toys & Games
                </a>
              </span>
            </li>

            <li className="flex">
              <span className="mr-4">-</span>
              <span className='text-blue-500'>
                <a
                  href='https://www.amazon.in/POTLIBABA-Drone-Educational-Skill-Assembly/dp/B0BRG4DN4W/ref=asc_df_B0BRG4DN4W/?tag=googleshopdes-21&linkCode=df0&hvadid=619798029309&hvpos=&hvnetw=g&hvrand=3850966135138696946&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9147458&hvtargid=pla-1934070504420&psc=1&mcid=cc8944ac45fd344ba0c638e035e7e3ca'
                  target='_blank'>
                  POTLIBABA RC Drone Educational DIY STEM Kit | Skill Based Fun Toys | Educational & Assembly Game for Kids 6 to 18 - Multicolor : Amazon.in: Toys & Games
                </a>
              </span>
            </li>

            <li className="flex">
              <span className="mr-4">-</span>
              <span className='text-blue-500'>
                <a
                  href='https://makerbazar.in/products/wooden-assembly-diy-toy-drone-aircraft-with-remote?variant=46150208717040'
                  target='_blank'>
                  XYQ-2 Wooden Assembly DIY Toy Drone Aircraft with Remote (makerbazar.in)
                </a>
              </span>
            </li>

            <li className="flex">
              <span className="mr-4">-</span>
              <span className='text-blue-500'>
                <a
                  href='https://www.amazon.in/ROBOPIAs-Beginners-Assemble-Quadcopter-altitude/dp/B0CFW149D6?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A1KWS0EX0T3DLB&th=1'
                  target='_blank'>
                  ROBOPIA's DIY Wooden Drone Kit (Without Camera) For Kids Or Beginners | Build & Assemble your own Flying Rc Quadcopter With Altitude Hold, Headless Mode & 3D Flip | Best Toy For Boys & Girls : Amazon.in: Toys & Games
                </a>
              </span>
            </li>

            <li className="flex">
              <span className="mr-4">-</span>
              <span className='text-blue-500'>
                <a
                  href='https://www.amazon.in/HEYCANDY-HEYCANDY-E88-Pro-Drone-with-4K-Camera-WiFi-FPV-1080P-HD-Dual-Foldable-RC-Drone-Altitude-Hold-Headless-Mode-Visual-Positioning-Auto-Return-App-Control-Multicolor-Single-Battery/dp/B0D4DZQPZ2/ref=asc_df_B0D4DZQPZ2/?tag=googleshopdes-21&linkCode=df0&hvadid=701464143060&hvpos=&hvnetw=g&hvrand=2685980001067454831&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9147458&hvtargid=pla-2310549611254&mcid=cff3be5b480e3b73b86fd948a6f3a6d6&gad_source=1&th=1'
                  target='_blank'>
                  HEYCANDY-E88-Pro-Drone-with-4K-Camera-WiFi-FPV-1080P-HD-Dual-Foldable-RC-Drone-Altitude-Hold-Headless-Mode-Visual-Positioning-Auto-Return-App-Control-Multicolor (Single-Battery) : Amazon.in: Toys & Games
                </a>
              </span>
            </li>

          </ul>
        </div>



        <div className='flex flex-col w-[80%] leading-8 text-justify items-center'>
          <p className='text-[28px] font-bold'>SAMPLE ARENA </p><br />
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>The arena shown in the image is for reference purposes only and serves as a
                sample. The actual arena at the competition may have some modifications.
              </span>
            </li>
          </ul>
          <img src={drone} alt='arena' className='lg:w-[60%] h-auto' />
        </div>

      </div>
      <div className='relative w-full mt-10 h-auto'>
        <Footer />
      </div>
    </div>

  )
}

export default DroneSenior