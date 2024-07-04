import React, { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer'
import Senior from '../data/senior.png'

const Seniors = () => {
  const navigate = useNavigate();

  const statesAndDistricts = {
    "Andhra Pradesh": [
      "Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna",
      "Kurnool", "Prakasam", "Nellore", "Srikakulam", "Visakhapatnam",
      "Vizianagaram", "West Godavari", "Kadapa"
    ],
    "Himachal Pradesh": [
      "Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur",
      "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur",
      "Solan", "Una"
    ],
    "Telangana": [
      "Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon",
      "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar",
      "Khammam", "Komaram Bheem Asifabad", "Mahabubabad", "Mahabubnagar",
      "Mancherial", "Medak", "Medchal", "Mulugu", "Nagarkurnool", "Nalgonda",
      "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla",
      "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad",
      "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"
    ]
  };


  const [formData, setFormData] = useState({
    participant1: { name: '', year: '' },
    participant2: { name: '', year: '' },
    participant3: { name: '', year: '' },
    participant4: { name: '', year: '' },
    education: '',
    institution: '',
    state: '',
    district: '',
    participant1Email: '',
    participant2Email: '',
    participant1Contact: '',
    competition: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [key, subkey] = name.split('.');

    if (subkey) {
      if (subkey === 'name' && /\d/.test(value)) {
        return;
      }
      setFormData((prevData) => ({
        ...prevData,
        [key]: {
          ...prevData[key],
          [subkey]: value
        }
      }));
    } else {
      if (name === 'participant1Contact' && (!/^\d{0,10}$/.test(value) || /\D/.test(value))) {
        return;
      }
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const participants = [formData.participant1, formData.participant2, formData.participant3, formData.participant4];
    const filledParticipants = participants.filter(p => p.name && p.year);

    if (filledParticipants.length !== 2 && filledParticipants.length !== 4) {
      swal({
        title: "Warning!!!",
        text: "Participants count must be 2 or 4",
        icon: "warning",
        button: "OK"
      });
    } else {
      const requestData = {
        values: [
          formData.participant1.name,
          formData.participant1.year,
          formData.participant2.name,
          formData.participant2.year,
          formData.participant3.name,
          formData.participant3.year,
          formData.participant4.name,
          formData.participant4.year,
          formData.education,
          formData.institution,
          formData.state,
          formData.district,
          formData.participant1Contact,
          formData.participant1Email,
          formData.participant2Email,
          formData.competition
        ]
      };

      try {
        const res = await axios.post('https://bharattechleague-production-8429.up.railway.app/create/seniors', requestData);
        swal({
          title: "Registration Successful!",
          text: "You have registered successfully.",
          icon: "success",
          button: "OK"
        }).then(() => {
          navigate('/bharattech/Registration/Seniors/Confirmation');
        });
      } catch (error) {
        console.log(error);
      }
    }
  };


  return (
    <div className='flex flex-col'>
      <div className='mt-10 mb-6 flex flex-col-reverse lg:flex-row lg:justify-around w-full lg:h-[590px]'>
        <div className='flex flex-col mt-10 lg:w-[60%] h-full text-sm'>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col justify-center align-baseline w-full sm:w-[95%] h-full sm:mx-[20px]'>
              <div className='flex flex-col items-center sm:flex-row justify-around sm:gap-8'>
                <div className='flex justify-around sm:justify-between w-[85%]'>
                  <input id="name1" type="text" placeholder='Enter name of 1st participant'
                    className="appearance-none border-2 border-[#0077B5] rounded-xl w-[80%] py-3 px-3 my-4 mr-2 text-center
                     text-gray-700 leading-tight focus:outline-none focus:border-blue-900 font-normal"
                    name={`participant1.name`}
                    value={formData[`participant1`].name}
                    onChange={handleChange}
                    required
                  />
                  <select
                    className="py-3 my-4 border-2 border-[#0077B5] rounded-xl focus:outline-none
                     focus:border-blue-900 font-normal"
                    name={`participant1.year`}
                    value={formData[`participant1`].year}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Year
                    </option>
                    {[1, 2, 3, 4].map((number) => (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='flex justify-between w-[85%]'>
                  <input id="name2" type="text" placeholder='Enter name of 2nd participant'
                    className="appearance-none border-2 border-[#0077B5] rounded-xl w-[80%] py-3 px-3 my-4 mr-2 text-center
                     text-gray-700 leading-tight focus:outline-none focus:border-blue-900 font-normal"
                    name={`participant2.name`}
                    value={formData[`participant2`].name}
                    onChange={handleChange}
                    required
                  />
                  <select
                    className="py-3 my-4 border-2 border-[#0077B5] rounded-xl focus:outline-none
                     focus:border-blue-900 font-normal"
                    name={`participant2.year`}
                    value={formData[`participant2`].year}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Year
                    </option>
                    {[1, 2, 3, 4].map((number) => (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className='flex flex-col items-center sm:flex-row justify-around sm:gap-8'>
                <div className='flex justify-between w-[85%]'>
                  <input id="name3" type="text" placeholder='Enter name of 3rd participant'
                    className="appearance-none border-2 border-[#0077B5] rounded-xl w-[80%] py-3 px-3 my-4 mr-2 text-center
                     text-gray-700 leading-tight focus:outline-none focus:border-blue-900 font-normal"
                    name={`participant3.name`}
                    value={formData[`participant3`].name}
                    onChange={handleChange}
                  />
                  <select
                    className="py-3 my-4 border-2 border-[#0077B5] rounded-xl focus:outline-none
                     focus:border-blue-900 font-normal"
                    name={`participant3.year`}
                    value={formData[`participant3`].year}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Year
                    </option>
                    {[1, 2, 3, 4].map((number) => (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='flex justify-between w-[85%]'>
                  <input id="name4" type="text" placeholder='Enter name of 4th participant'
                    className="appearance-none border-2 border-[#0077B5] rounded-xl w-[80%] py-3 px-3 my-4 mr-2 text-center
                     text-gray-700 leading-tight focus:outline-none focus:border-blue-900 font-normal"
                    name={`participant4.name`}
                    value={formData[`participant4`].name}
                    onChange={handleChange}
                  />
                  <select
                    className="py-3 my-4 border-2 border-[#0077B5] rounded-xl focus:outline-none
                     focus:border-blue-900 font-normal"
                    name={`participant4.year`}
                    value={formData[`participant4`].year}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Year
                    </option>
                    {[1, 2, 3, 4].map((number) => (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    ))}
                  </select>
                </div>
              </div>


              <div className='flex flex-col items-center sm:flex-row justify-between sm:gap-8'>
                <div className='w-[85%] sm:w-[50%]'>
                  <select
                    className="w-full overflow-hidden py-3 my-4 border-2 border-[#0077B5] rounded-xl focus:outline-none focus:border-blue-900 font-normal text-center"
                    name={`education`}
                    value={formData.education}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Education
                    </option>
                    {["Diploma", "Degree", "B-tech"].map(item => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='flex flex-col w-[85%] sm:w-[50%] sm:flex-row justify-between sm:gap-8'>
                  <div className='w-full sm:w-[50%]'>
                    <select
                      className="w-full overflow-hidden py-3 my-4 border-2 border-[#0077B5] rounded-xl focus:outline-none focus:border-blue-900 font-normal text-center"
                      name={`state`}
                      value={formData.state}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        State
                      </option>
                      {Object.keys(statesAndDistricts).map(state => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='w-full sm:w-[50%]'>
                    <select
                      className="w-full overflow-hidden py-3 my-4 border-2 border-[#0077B5] rounded-xl focus:outline-none
                     focus:border-blue-900 font-normal text-center"
                      name={`district`}
                      value={formData.district}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        District
                      </option>
                      {formData.state &&
                        statesAndDistricts[formData.state].map(district => (
                          <option key={district} value={district}>
                            {district}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>


              <div className='flex flex-col items-center sm:flex-row justify-around sm:gap-8'>
                <div className='w-[85%]'>
                  <input type="text" placeholder='Name of the institution / college'
                    className="appearance-none border-2 border-[#0077B5] rounded-xl w-[100%] py-3 px-3 my-4 text-center
                     text-gray-700 leading-tight focus:outline-none focus:border-blue-900 font-normal"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='w-[85%]'>
                  <input type="text" placeholder='Contact of the 1st participant'
                    className="appearance-none border-2 border-[#0077B5] rounded-xl w-[100%] py-3 px-3 my-4 text-center
                     text-gray-700 leading-tight focus:outline-none  focus:border-blue-900 font-normal"
                    name="participant1Contact"
                    value={formData.participant1Contact}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className='flex flex-col items-center sm:flex-row justify-around sm:gap-8'>
                <div className='w-[85%]'>
                  <input type="email" placeholder='Email of the 1st participant'
                    className="appearance-none border-2 border-[#0077B5] rounded-xl w-[100%] py-3 px-3 my-4 text-center
                     text-gray-700 leading-tight focus:outline-none focus:border-blue-900 font-normal"
                    name="participant1Email"
                    value={formData.participant1Email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='w-[85%]'>
                  <input type="email" placeholder='Email of the 2nd participant'
                    className="appearance-none border-2 border-[#0077B5] rounded-xl w-[100%] py-3 px-3 my-4 text-center
                     text-gray-700 leading-tight focus:outline-none focus:border-blue-900 font-normal"
                    name="participant2Email"
                    value={formData.participant2Email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className='flex flex-col items-center sm:flex-row justify-around sm:gap-8'>
                <select
                  className="py-3 my-4 border-2 w-[85%] sm:w-[50%] border-[#0077B5] rounded-xl focus:outline-none
                  focus:border-blue-900 font-normal text-center"
                  name="competition"
                  value={formData.competition}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled style={{ color: "#718096" }}>
                    Select a competition
                  </option>
                  <option value="drone">Artificial Intelligence</option>
                  <option value="robotics">Robotics</option>
                  <option value="3dprinting">Drone Competitions</option>
                  <option value="renewableenergy">Internet of Things</option>
                </select>
                <div className='w-full sm:w-[50%]'>
                  <div className='flex justify-center w-full'><button type='submit'
                    className="rounded-xl w-[85%] py-4 px-3 my-4 leading-tight text-[18px] font-normal text-white"
                    style={{ background: "linear-gradient(90deg, rgba(0, 119, 181, 1) 0%, rgba(0, 189, 232, 1) 100%)" }}
                  >
                    Submit your response
                  </button>
                  </div>
                </div>
              </div>

            </div>
          </form>

        </div>

        <div className='flex flex-col items-center p-6 lg:w-[30%] h-full text-center'>
          <h1 className='text-5xl font-bold'>SENIOR LEVEL</h1>
          <p className='text-sm mt-6'>&#40;Diploma/Degree/B.Tech  students are eligible for participation&#41;</p>
          <div className='m-10 flex justify-center items-center w-[285px] h-[285px] xl:w-[385px] xl:h-[385px] rounded-xl' style={{ boxShadow: '0px 0px 20px rgba(0,0,0, 0.25)' }}>
            <img src={Senior} alt='junior' className='w-[90%] h-[90%]' />
          </div>
        </div>
      </div>

      <div className='relative w-full h-auto'>
        <Footer />
      </div>
    </div>
  )
}
export default Seniors;
