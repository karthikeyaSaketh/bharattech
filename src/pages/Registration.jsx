import React from 'react';
import Footer from '../Components/Footer';
import result from '../data/documents/TelanganaZonalResults.pdf'

const Registration = () => {

  return (
    <div className='flex flex-col min-h-[100vh] items-around justify-between'>
      <div className='mt-12 sm:mt-16 lg:mt-20 xl:mt-32 w-full h-auto'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='mt-2 text-3xl pl-4 sm:pl-0 lg:text-5xl font-bold text-center'>
            The Registrations are Closed.
            
          <br /><br/>
          See you in Bharat Teck League Finals...
          </h1>
        </div>


        {/* <div className="flex flex-col items-center justify-center my-10 px-4 bg-white">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-8">
            TELANGANA ZONAL LEVEL RESULTS ( 25-08-2024 )
          </h1>
          <a href={result} download="Telangana Zonal Results.pdf">
            <button
              className="bg-blue-600 my-4 sm:text-[24px] lg:text-[28px] text-white font-semibold py-2 px-10 sm:py-4 sm:px-10 md:px-12 lg:px-24 rounded-[20px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              DOWNLOAD TELANGANA <br />
              ZONAL RESULTS PDF
            </button>
          </a>
        </div> */}

      </div>

      <div className='relative w-full h-auto mt-12'>
        <Footer />
      </div>
    </div>
  );
};

export default Registration;
