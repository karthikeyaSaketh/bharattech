import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';
import img from '../../data/events/back2.png'
import img1 from '../../data/events/5.jpg'
import PS from '../../data/documents/PSAI(Senior).pdf'
import RR from '../../data/documents/RRAI(Senior).pdf'

const AISenior = () => {
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
            <h1 className='text-[32px] sm:text-[48px] text-[#1B8534] font-bold'>
              ARTIFICIAL INTELLIGENCE
            </h1>
            <p className='text-[16px] tracking-[0.4em] sm:tracking-[0.8em]'>
              SENIOR LEVEL PROBLEM STATEMENT
            </p>
            <div className='flex flex-col sm:flex-row mt-4 justify-between gap-8 sm:gap-16'>
              <a href={PS} download="Problem Statement AI.pdf">
                <button className='bg-[#1B8534] text-white text-[14px] px-4 py-4 rounded-[10px]'>
                  DOWNLOAD PROBLEM STATEMENT
                </button>
              </a>
              <a href={RR} download="AI Rules and Regulations.pdf">
                <button className='bg-[#1B8534] text-white text-[14px] px-4 py-4 rounded-[10px]'>
                  DOWNLOAD RULES & REGULATIONS
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* <h1 className='text-[32px] sm:text-[40px] font-bold mt-12 text-center'>DRONE JUNIOR LEVEL</h1> */}
        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify mt-12'>
          <div className='flex flex-col gap-6'>
            <p className='font-bold text-[24px]'>
              Problem Statement:
            </p>
            <p>
              &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Participants are invited to compete in a series of challenging rounds—Preliminary,
              Zonal, and Final—within the Teck League. The competition focuses on exploring and
              innovating within the field of agriculture using AI technology. Participants will showcase
              their expertise in artificial intelligence (AI) and their practical applications in addressing
              agricultural challenges.
            </p>
          </div>
        </div>

        <h1 className='text-[32px] font-bold mt-12 text-center'>PRELIMINARY LEVEL</h1>


        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[18px]'>
            Participants will navigate through 30 multiple-choice questions (MCQs) within a 30-minute time
            frame. Questions will cover the following areas:
          </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                <b>AI and ML Concepts : &nbsp;</b> Fundamentals of artificial intelligence, machine learning algorithms,
                and their applications.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                <b>Libraries and Tools :&nbsp;</b> Knowledge of popular libraries and tools used in AI and machine
                learning (e.g., TensorFlow, scikit-learn).
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                <b>Agriculture-Related Questions :&nbsp;</b> Understanding of agricultural practices, challenges, and
                the potential applications of AI and ML in agriculture.
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
              Participants must bring one laptop per team, along with chargers, for both the Zonal and Final levels. Please note that internet access will not be provided and is strictly prohibited.
              </span>
            </li>
          </ul>
        </div>


        <h1 className='text-[32px] font-bold mt-12 text-center'>ZONAL LEVEL</h1>

        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[18px]'>
            In the zonal round, contestants will receive a specific problem statement related to agriculture. They
            must apply supervised learning techniques to predict outcomes or patterns based on provided
            datasets. Key tasks include:
          </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                <b>Data Analysis : &nbsp;</b> Conducting thorough data analysis to preprocess and explore the provided 
                datasets before applying supervised learning techniques.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                <b>Prediction : &nbsp;</b>  Developing a predictive model using supervised learning algorithms tailored to 
                agricultural data.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                <b>Visualization : &nbsp;</b> Creating meaningful visualizations to illustrate trends, relationships, or 
                predictions derived from the model. 
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                <b>Metrics : &nbsp;</b> Calculating and interpreting metrics such as accuracy, precision, recall, and F1
                score to evaluate the performance of their solution. 
              </span>
            </li>
          </ul>
        </div>


        <h1 className='text-[32px] font-bold mt-12 text-center'>FINAL LEVEL</h1>

        <div className='flex flex-col items-start justify-center w-[80%] gap-6 leading-8 text-justify'>
          <p className='text-[18px]'>
          During the final round, participants will tackle a new agricultural problem statement that 
          necessitates the use of unsupervised learning techniques. Tasks include:
          </p>
          <ul className="list-none space-y-4 pl-4 sm:pl-16">
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                <b>Data Analysis : &nbsp;</b>Performing comprehensive data analysis to understand and preprocess the 
                dataset before applying unsupervised learning techniques.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                <b>Clustering : &nbsp;</b>  Applying unsupervised learning algorithms to uncover hidden patterns or 
                groupings within agricultural data. 
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                <b>Visualization : &nbsp;</b> Creating insightful visual representations of the clustered data.
              </span>
            </li>
            <li className="flex">
              <span className="mr-4">-</span>
              <span>
                <b>Evaluation: : &nbsp;</b>Assessing the quality of clustering using appropriate metrics like silhouette 
                score or inertia. 
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

export default AISenior