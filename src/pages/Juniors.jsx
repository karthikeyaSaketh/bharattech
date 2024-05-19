import React, { useState } from 'react';
import Footer from '../Components/Footer'
import Junior from '../data/junior.png'

const Juniors = () => {
  const [selectedValue, setSelectedValue] = useState(['', '', '', '','']);

  const handleChange = (index) => (event) => {
    const arr = [...selectedValue];
    arr[index] = event.target.value;
    setSelectedValue(arr);
  };
  return (
    <div className='flex flex-col'>
      <div className='my-6 flex justify-around w-full h-[590px]'>
        <div className='flex flex-col w-[60%] h-full'>
          <div className='flex justify-between w-full h-full mx-4 gap-6 text-sm'>
            <div className='w-[50%] p-4'>
              <form>
                <div className='flex justify-between'>
                  <input id="name1" type="text" placeholder='Enter name of 1st participant'
                    className="appearance-none border-2 border-[#0077B5] rounded-xl w-[80%] py-3 px-3 my-4 mr-2 text-center
                     text-gray-700 leading-tight focus:outline-none focus:border-[3px] focus:border-blue-900 font-normal" />
                  <select
                    className="py-3 my-4 border-2 border-[#0077B5] rounded-xl focus:outline-none focus:border-[3px]
                     focus:border-blue-900 font-normal"
                    value={selectedValue[0]}
                    onChange={handleChange(0)}
                  >
                    <option value="" disabled>
                      Class
                    </option>
                    {[6, 7, 8, 9, 10].map((number) => (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='flex justify-between'>
                  <input id="name1" type="text" placeholder='Enter name of 3rd participant'
                    className="appearance-none border-2 border-[#0077B5] rounded-xl w-[80%] py-3 px-3 my-4 mr-2 text-center
                     text-gray-700 leading-tight focus:outline-none focus:border-[3px] focus:border-blue-900 font-normal" />
                  <select
                    className="py-3 my-4 border-2 border-[#0077B5] rounded-xl focus:outline-none focus:border-[3px]
                     focus:border-blue-900 font-normal"
                    value={selectedValue[1]}
                    onChange={handleChange(1)}
                  >
                    <option value="" disabled>
                      Class
                    </option>
                    {[6, 7, 8, 9, 10].map((number) => (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    ))}
                  </select>
                </div>
                <input id="name1" type="text" placeholder='Name of the institution / school'
                  className="appearance-none border-2 border-[#0077B5] rounded-xl w-[100%] py-3 px-3 my-4 text-center
                     text-gray-700 leading-tight focus:outline-none focus:border-[3px] focus:border-blue-900 font-normal" />
                <input id="name1" type="text" placeholder='Email of the participant'
                  className="appearance-none border-2 border-[#0077B5] rounded-xl w-[100%] py-3 px-3 my-4 text-center
                     text-gray-700 leading-tight focus:outline-none focus:border-[3px] focus:border-blue-900 font-normal" />
                <input id="name1" type="text" placeholder='Name of the mentor'
                  className="appearance-none border-2 border-[#0077B5] rounded-xl w-[100%] py-3 px-3 my-4 text-center
                     text-gray-700 leading-tight focus:outline-none focus:border-[3px] focus:border-blue-900 font-normal" />
                <input id="name1" type="text" placeholder='Email of the mentor'
                  className="appearance-none border-2 border-[#0077B5] rounded-xl w-[100%] py-3 px-3 my-4 text-center
                     text-gray-700 leading-tight focus:outline-none focus:border-[3px] focus:border-blue-900 font-normal" />

              </form>
            </div>


            <div className='w-[50%] p-4'>
              <form>
                <div className='flex justify-between'>
                  <input id="name1" type="text" placeholder='Enter name of 2nd participant'
                    className="appearance-none border-2 border-[#0077B5] rounded-xl w-[80%] py-3 px-3 my-4 mr-2 text-center
                     text-gray-700 leading-tight focus:outline-none focus:border-[3px] focus:border-blue-900 font-normal" />
                  <select
                    className="py-3 my-4 border-2 border-[#0077B5] rounded-xl focus:outline-none focus:border-[3px]
                     focus:border-blue-900 font-normal"
                    value={selectedValue[2]}
                    onChange={handleChange(2)}
                  >
                    <option value="" disabled>
                      Class
                    </option>
                    {[6, 7, 8, 9, 10].map((number) => (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='flex justify-between'>
                  <input id="name1" type="text" placeholder='Enter name of 4th participant'
                    className="appearance-none border-2 border-[#0077B5] rounded-xl w-[80%] py-3 px-3 my-4 mr-2 text-center
                     text-gray-700 leading-tight focus:outline-none focus:border-[3px] focus:border-blue-900 font-normal" />
                  <select
                    className="py-3 my-4 border-2 border-[#0077B5] rounded-xl focus:outline-none focus:border-[3px]
                     focus:border-blue-900 font-normal"
                    value={selectedValue[3]}
                    onChange={handleChange(3)}
                  >
                    <option value="" disabled>
                      Class
                    </option>
                    {[6, 7, 8, 9, 10].map((number) => (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    ))}
                  </select>
                </div>
                <input id="name1" type="text" placeholder='District of the institution / school'
                  className="appearance-none border-2 border-[#0077B5] rounded-xl w-[100%] py-3 px-3 my-4 text-center
                     text-gray-700 leading-tight focus:outline-none focus:border-[3px] focus:border-blue-900 font-normal" />
                <input id="name1" type="text" placeholder='Contact of the participant'
                  className="appearance-none border-2 border-[#0077B5] rounded-xl w-[100%] py-3 px-3 my-4 text-center
                     text-gray-700 leading-tight focus:outline-none focus:border-[3px] focus:border-blue-900 font-normal" />
                <input id="name1" type="text" placeholder='Contact of the mentor'
                  className="appearance-none border-2 border-[#0077B5] rounded-xl w-[100%] py-3 px-3 my-4 text-center
                     text-gray-700 leading-tight focus:outline-none focus:border-[3px] focus:border-blue-900 font-normal" />
                <select
                  className="py-3 my-4 border-2 w-full border-[#0077B5] rounded-xl focus:outline-none focus:border-[3px]
                  focus:border-blue-900 font-normal text-center" 
                     value={selectedValue[4]}
                    onChange={handleChange(4)}
                    >
                  <option value="" disabled style={{ color: "#718096" }}>
                    Name of the competition 
                  </option>
                  {[6, 7, 8, 9, 10].map((number) => (
                    <option key={number} value={number}>
                      {number}
                    </option>
                  ))}
                </select>

              </form>
            </div>
          </div>
          <button type='submit'
            className="rounded-xl w-[98%] py-4 px-3 mx-6 mb-10 leading-tight text-[18px] font-normal text-white"
            style={{ background: "linear-gradient(90deg, rgba(0, 119, 181, 1) 0%, rgba(0, 189, 232, 1) 100%)" }}
          >
            Submit your response
          </button>


        </div>

        <div className='flex flex-col items-center p-6 w-[30%] h-full'>
          <h1 className='text-5xl font-bold'>JUNIOR LEVEL</h1>
          <p className='text-sm mt-6'>&#40;Class 6th to 10th students are eligible for participation&#41;</p>
          <div className='m-10 flex justify-center items-center w-[385px] h-[385px] rounded-xl' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
            <img src={Junior} alt='junior' className='w-[70%] h-[70%]' />
          </div>
        </div>
      </div>

      <div className='relative w-full h-auto'>
        <Footer />
      </div>
    </div>
  )
}
export default Juniors;
