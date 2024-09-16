import React from 'react';
import Footer from '../Components/Footer';
import result from '../data/documents/TelanganaZonalResults.pdf'
import result2 from '../data/documents/VSKPFINALLIST.pdf'
import result3 from '..data/documents/RJYFINALLIST.pdf'
import result4 from '..data/documents/NLRFINALLIST.pdf'

const Registration = () => {

  return (
    <div className='flex flex-col min-h-[100vh] items-around justify-between'>
      <div className='mt-12 w-full h-auto'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='mt-2 text-3xl pl-4 sm:pl-0 px-6 lg:text-5xl font-bold text-center'>
          CONGRATULATIONS & ALL THE BEST FOR FINALS
          </h1>
        </div>


        <div className="flex flex-col items-center justify-center my-10 px-4 bg-white">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-8">
            TELANGANA ZONAL LEVEL RESULTS
          </h1>
          <a href={result} download="Telangana Zonal Results.pdf">
            <button
              className="bg-blue-600 my-4 sm:text-[24px] text-white font-semibold rounded-[20px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-[360px] sm:w-[500px] h-[80px] sm:h-[100px]"
            >
              DOWNLOAD TELANGANA <br />
              ZONAL RESULTS PDF
            </button>
          </a>
        </div>

        <div className="flex flex-col items-center justify-center my-10 px-4 bg-white">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-8">
            ANDHRA PRADESH ZONAL LEVEL RESULTS
          </h1>
          <a href={result} download="Telangana Zonal Results.pdf">
            <button
              className="bg-blue-600 my-8 sm:text-[24px] text-white font-semibold rounded-[20px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-[360px] sm:w-[500px] h-[80px] sm:h-[100px]"
            >
              DOWNLOAD VISAKHAPATNAM <br/>
              ZONAL RESULTS PDF
            </button>
          </a>
          <a href={result} download="Telangana Zonal Results.pdf">
            <button
              className="bg-blue-600 my-8 sm:text-[24px] text-white font-semibold rounded-[20px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-[360px] sm:w-[500px] h-[80px] sm:h-[100px]"
            >
              DOWNLOAD RAJAHMUNDRY <br/>
              ZONAL RESULTS PDF
            </button>
          </a>
          <a href={result} download="Telangana Zonal Results.pdf">
            <button
              className="bg-blue-600 my-8 sm:text-[24px] text-white font-semibold rounded-[20px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-[360px] sm:w-[500px] h-[80px] sm:h-[100px]"
            >
              DOWNLOAD NELLORE<br/>
              ZONAL RESULTS PDF
            </button>
          </a>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <h1 className='mt-2 text-xl sm:text-2xl lg:text-3xl pl-4 sm:pl-0 px-6 font-bold text-center'>
          NOTE : Guidelines for Bharat Teck League 2024 FINALS will be updated here
          </h1>
        </div>


      </div>

      <div className='relative w-full h-auto mt-12'>
        <Footer />
      </div>
    </div>
  );
};

export default Registration;
