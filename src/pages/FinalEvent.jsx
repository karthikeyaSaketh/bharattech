import React from 'react'
import Footer from '../Components/Footer';
import img1 from '../data/final.png'
import img2 from '../data/final1.png'
import pdf1 from '../data/documents/BtlGuidelines.pdf'
import pdf2 from '../data/documents/Accomodations.pdf'

const FinalEvent = () => {
    return (
        <div className='flex flex-col my-4 justify-center items-center'>
            <div className='flex flex-col items-center justify-center w-[95%]'>
                <img src={img1} alt="poster" className='hidden lg:block w-[1150px] h-[640px]' />
                <img src={img2} alt="poster" className='lg:hidden w-[100%]' />

                <div className="flex flex-col items-center justify-center my-10 px-4 bg-white">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-8">
                        GUIDELINES FOR BHARAT TECK LEAGUE 2024 FINALS
                    </h1>
                    <a href={pdf1} download="Guidelines.pdf">
                        <button
                            className="bg-[#1B8534] my-8 sm:text-[24px] text-white font-semibold rounded-[20px] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-[360px] sm:w-[500px] h-[80px] sm:h-[100px]"
                        >
                            DOWNLOAD BTL GUIDELINES
                        </button>
                    </a>
                </div>
                <div className="flex flex-col items-center justify-center my-10 px-4 bg-white">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-8">
                        PROPOSED ACCOMMODATIONS - BHARAT TECK LEAGUE - 2024
                    </h1>
                    <a href={pdf2} download="Proposed Accomodation.pdf">
                        <button
                            className="bg-[#1B8534] my-8 sm:text-[24px] text-white font-semibold rounded-[20px] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-[360px] sm:w-[500px] h-[80px] sm:h-[100px]"
                        >
                            DOWNLOAD ACCOMMODATION PDF
                        </button>
                    </a>
                </div>
            </div>

            <div className='relative w-full h-auto mt-12'>
                <Footer />
            </div>
        </div>
    )
}

export default FinalEvent