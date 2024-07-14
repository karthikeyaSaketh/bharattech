import React, { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import img1 from '../data/contactUs/1.png'
import img2 from '../data/contactUs/2.png'
import img3 from '../data/contactUs/3.png'
import img4 from '../data/contactUs/4.png'
import axios from 'axios';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // Prevent multiple submissions

    if (validateEmail(email)) {
      const requestData = {
        values: [name, email, message]
      };

      setLoading(true);

      swal({
        title: 'Sending...',
        text: 'Please wait while we send your message.',
        icon: 'info',
        buttons: false,
        closeOnClickOutside: false,
        closeOnEsc: false
      });

      try {
        const res = await axios.post('https://bharattechleague-production-8429.up.railway.app/create/contacts', requestData);
        swal({
          title: "Message Sent!",
          text: "Your message has been sent successfully.",
          icon: "success",
          button: "OK"
        }).then(() => {
          navigate('/bharattech');
        });
      } catch (error) {
        console.log(error);
        swal({
          title: "Failed to Send",
          text: "There was an error sending your message. Please try again.",
          icon: "error",
          button: "OK"
        });
      } finally {
        setLoading(false);
      }
    } else {
      setEmailError('Invalid email format');
    }
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    if (validateEmail(emailValue)) {
      setEmailError('');
    } else {
      setEmailError('Invalid email format');
    }
  };

  return (
    <div className='m-4 sm:m-24 lg:mt-8 lg:mb-4 flex flex-col justify-center items-center'>
      <div className='flex flex-col align-center items-center lg:flex-row w-full xl:w-[80%]' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
        <div className='flex flex-col w-[80%] lg:w-[50%] justify-center items-center pt-12 lg:pt-0 px-0 sm:px-10 xl:px-20 gap-12'>
          <h1 className='text-[32px] sm:text-[40px] text-[#1B8534] font-bold'>
            Connect With Us
          </h1>
          <p>
            Feel free to reach out to us any time. Fill up
            the form to contact us or connect with us
            on our social media.
          </p>
          <div className='flex flex-wrap gap-8 sm:gap-16'>
            <a href='https://www.facebook.com/teckybot?mibextid=ZbWKwL' target='_blank'><img src={img1} alt='img1' className='w-[30xp] h-[30px]' /></a>
            <a href='https://instagram.com/teckybot/' target='_blank'><img src={img2} alt='img2' className='w-[30xp] h-[30px]' /></a>
            <a href='https://www.linkedin.com/company/teckybot/' target='_blank'><img src={img3} alt='img3' className='w-[30xp] h-[30px]' /></a>
            <a href='https://www.youtube.com/@teckybot23' target='_blank'><img src={img4} alt='img4' className='w-[30xp] h-[30px]' /></a>
          </div>

          <div className='w-[340px] h-[1px] bg-[#B1B1B1]'>
          </div>

        </div>


        <div className='flex flex-col justify-evenly items-center w-[90%] lg:w-[50%] h-[550px] lg:h-[580px] text-[#1B8534] font-medium'>
          <div className='sm:mt-12 flex flex-col items-start pl-5 sm:pl-0 lg:text-sm'>
            <form onSubmit={handleSubmit}>
              <label htmlFor='name'>Name :</label><br />
              <input
                id="name"
                type="text"
                placeholder='Enter your name'
                className="appearance-none border-2 border-gray-300 rounded-xl w-[90%] sm:w-[350px] py-3 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-400 font-normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength="32"
                required
              />
              <br />
              <label htmlFor='email'>Email :</label>
              <input
                id="email"
                type="email"
                placeholder='Enter a valid email address'
                className="appearance-none border-2 border-gray-300 rounded-xl w-[90%] sm:w-full py-3 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-400 font-normal"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
              <br />
              <label htmlFor='message'>Message :</label>
              <textarea
                id="message"
                placeholder='Enter your message'
                className="appearance-none border-2 border-gray-300 rounded-xl w-[90%] sm:w-full py-3 px-3 my-4 text-gray-700 leading-tight 
                  focus:outline-none focus:border-gray-400 font-normal resize-none"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <br />
              <button
                type='submit'
                className="rounded-xl w-[90%] sm:w-full py-3 px-3 my-4 leading-tight text-lg font-normal text-white"
                style={{ background: "linear-gradient(134deg, rgba(27, 133, 52, 1) 0%, rgba(32, 194, 71, 1) 100%)" }}
              >
                Submit your response
              </button>
            </form>
          </div>
        </div>


      </div>


      <div className='flex flex-col gap-6 w-full mt-4'>
        <h1 className='text-[22px] lg:text-[32px] font-bold mt-10 mb-6 text-center'>Frequently Asked Questions (FAQs) for Bharat Teck League – 2024</h1>

        <div className='flex flex-col items-start justify-center w-[95%] gap-6 leading-8 text-justify'>
          <p className='text-[22px] font-bold pl-4'>1. Who can participate in the Bharat Teck League – 2024 ?</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16 w-full">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Junior Category: Students from 6th to 10th grade.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Senior Category: Diploma, Degree and Engineering students (any year).
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[95%] gap-6 leading-8 text-justify'>
          <p className='text-[22px] font-bold pl-4'>2. What is the main theme of the Bharat Teck League – 2024 ?</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16 w-full">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                The main theme is agriculture, focusing on the role of innovation and technology in this field.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[95%] gap-6 leading-8 text-justify'>
          <p className='text-[22px] font-bold pl-4'>3. Is there a registration fee ?</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16 w-full">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Yes, registration fees are as follows:
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Zonal Level: Rs. 349/- per head for Juniors & Rs. 449/- per head for Seniors (Selected participants only).
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[95%] gap-6 leading-8 text-justify'>
          <p className='text-[22px] font-bold pl-4'>4. How many levels are there in this event ?</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16 w-full">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                The Bharat Teck League – 2024 consists of three levels:
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Level 1: Prelims (online participation)
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Level 2: Zonal (physical participation)
              </span>
            </li><li className="flex">
              <span className="mr-4">-</span>
              <span>
                Level 3: Finals (physical participation)
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[95%] gap-6 leading-8 text-justify'>
          <p className='text-[22px] font-bold pl-4'>5. Is participation individual or in groups ?</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16 w-full">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Participation is for groups only. Each team must consist of either 2 or 4 members. Teams with 1 or 3 members are not allowed.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[95%] gap-6 leading-8 text-justify'>
          <p className='text-[22px] font-bold pl-4'>6. What is the registration process ?</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16 w-full">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Register through the website using the following links:
              </span>
            </li>
            <li className="flex flex-row text-wrap">
              <span className="mr-4">-</span>
              <span className="sm:flex-1">
                Juniors : <a href="https://www.bharatteckleague.com/bharattech/Registration/Juniors" className="underline text-blue-600" target='_blank'>Junior Registration</a>
              </span>
            </li>
            <li className="flex flex-row text-wrap mt-4 sm:mt-0">
              <span className="mr-4">-</span>
              <span className="sm:flex-1">
                Seniors : <a href="https://www.bharatteckleague.com/bharattech/Registration/Seniors" className="underline text-blue-600" target='_blank'>Senior Registration</a>
              </span>
            </li>

            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Each team must also submit an event-related abstract/video via email to bharatteckleague@gmail.com. Abstracts can include direct video, drive links, or YouTube links. Please refer to the problem statements for details.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[95%] gap-6 leading-8 text-justify'>
          <p className='text-[22px] font-bold pl-4'>7. Is a mentor mandatory for junior participants ?</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16 w-full">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Yes, a mentor is mandatory for junior participants.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[95%] gap-6 leading-8 text-justify'>
          <p className='text-[22px] font-bold pl-4'>8. Is there a specific format and duration for the abstract ?</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16 w-full">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Please refer to the problem statement for complete details specific to each competition.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[95%] gap-6 leading-8 text-justify'>
          <p className='text-[22px] font-bold pl-4'>9. What is the last date for registration and abstract submission ?</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16 w-full">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Last date for registrations and abstract/video submission is 28-07-2024. Please check the website regularly for updates.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[95%] gap-6 leading-8 text-justify'>
          <p className='text-[22px] font-bold pl-4'>10. Will the organizers provide travel and accommodation for zonal and finals participants ?</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16 w-full">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                No, the organizers will not provide travel and accommodation for participants. Participants should plan their own travel and accommodation.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[95%] gap-6 leading-8 text-justify'>
          <p className='text-[22px] font-bold pl-4'>11. What are the competition categories ?</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16 w-full">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Junior Level: 3D Printing, Robotics, Drones, and Clean Energy.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Senior Level: Artificial Intelligence, Robotics, Drones, and Internet of Things (IoT).
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[95%] gap-6 leading-8 text-justify'>
          <p className='text-[22px] font-bold pl-4'>12. Can we modify our team after registration ?</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16 w-full">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                No, once a team is registered, the members must remain the same throughout all levels of the competition.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[95%] gap-6 leading-8 text-justify'>
          <p className='text-[22px] font-bold pl-4'>13. Where can I find the problem statements ?</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16 w-full">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Problem statements are available on the Bharat Teck League website - Events page.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[95%] gap-6 leading-8 text-justify'>
          <p className='text-[22px] font-bold pl-4'>14. What criteria are used for judging the performance/projects ?</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16 w-full">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Performance / Projects are judged based on time, innovation, functionality, presentation, and relevance to the agriculture theme.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[95%] gap-6 leading-8 text-justify'>
          <p className='text-[22px] font-bold pl-4'>15. How will we be notified of competition updates ?</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16 w-full">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                All updates will be posted on the Bharat Teck League website, communicated via email and WhatsApp community.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[95%] gap-6 leading-8 text-justify'>
          <p className='text-[22px] font-bold pl-4'>16. Can participants use their own internet during the competition ?</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16 w-full">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Yes, participants can use their own internet access if needed to refer to previous work, online resources, and documentation during the competition. However, browsing unrelated websites, seeking external help, or using communication platforms during the competition is prohibited.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[95%] gap-6 leading-8 text-justify'>
          <p className='text-[22px] font-bold pl-4'>17. What should participants bring to the competition venue ?</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16 w-full">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Participants must bring their own laptops, laptop chargers, and any other necessary tools and equipment. Ensure all required software and libraries are pre-installed.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[95%] gap-6 leading-8 text-justify'>
          <p className='text-[22px] font-bold pl-4'>18. Is there any support available for participants during the competition ?</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16 w-full">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Limited support will be available on-site, but participants are expected to be self-sufficient and prepared with all necessary resources.
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-start justify-center w-[95%] gap-6 leading-8 text-justify mb-20'>
          <p className='text-[22px] font-bold pl-4'>19. Are there any prizes for the winners ?</p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16 w-full">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                Yes, there are prizes and certificates for winners at each level. Details will be announced on the website soon.
              </span>
            </li>
          </ul>
        </div>


      </div>
    </div>
  );
}

export default ContactUs;
