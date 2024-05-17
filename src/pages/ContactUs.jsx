import React from 'react'

const ContactUs = () => {
  return (
    <div className='m-4 sm:m-24 flex justify-center content-center'>
      <div className='flex w-full sm:w-[95%] h-[700px] sm:h-[760px]' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <div className='flex flex-col items-center w-[380px] sm:w-[500px] lg:w-[700px] text-[#0077B5] font-medium'>
          <h1 className='mt-12 lg:ml-20 text-5xl sm:text-7xl lg:text-[84px]'>Get in touch</h1>
          <div className='mt-8 flex flex-col items-start'>
            <form>
              <label htmlFor='name' >Name :</label>
              <input id="name" type="text" placeholder='  Enter your name'
                className="appearance-none border-2 border-gray-300 rounded-xl w-full py-3 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-400 font-normal" />
              <br />
              <label htmlFor='email' >Email :</label>
              <input id="email" type="text" placeholder='  Enter a valid email address'
                className="appearance-none border-2 border-gray-300 rounded-xl w-full py-3 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-400 font-normal" />
                <br/>
              <label htmlFor='message' >Message :</label>
              <textarea id="message" type="text" placeholder='  Enter your message'
                className="appearance-none border-2 border-gray-300 rounded-xl w-full py-3 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-400 font-normal"
                rows="6"/>
                <br/>
                <button type='submit' 
                  className="rounded-xl w-full py-4 px-3 my-4 leading-tight font-normal text-white"
                  style={{ background: "linear-gradient(90deg, rgba(0, 119, 181, 1) 0%, rgba(0, 189, 232, 1) 100%)"}}
                  >
                  Submit your response
                </button>
            </form>
          </div>
        </div>

        <div className='flex-grow h-[700px] sm:h-[760px]' style={{background: "linear-gradient(147deg, rgba(0, 119, 181, 1) 35%, rgba(0, 173, 221, 1) 80%, rgba(0, 192, 234, 1) 100%)"}}>

        </div>

      </div>

    </div>
  )
}

export default ContactUs
