import { useState } from 'react';
import { Link } from 'react-router-dom';

import lockImage from '../assets/svgs/lock.svg';
import openQuote from '../assets/svgs/open-quote.svg';
import closeQuote from '../assets/svgs/close-quote.svg';

import ArrowUp from '../components/ArrowUp';

const Info = () => {
  const [subSection, setSubSection] = useState('Journal');
  const buttonTexts = ['Journal', 'AI friend', 'Integration'];
  const divContents = [
    {
      section: 'Journal',
      headerText:
        'Your journal space was created to help you process your thoughts, emotions, and experiences',
      bodyContent: (
        <>
          Accessing your journal is just so easy.
          <br />
          <br /> Simply sign up and the select journal on the home screen.
          <br />
          <br /> There, you can create a new entry, view, edit and talk about an existing one with
          Saam.
        </>
      ),
    },
    {
      section: 'AI friend',
      headerText:
        'Meet Saam, an AI mental health friend, that can listen, support, and connect with you on a personal level',
      bodyContent: (
        <>
          To access Saam, simply Sign up. Once you get to the home screen, select AI friend.
          <br />
          <br />
          Instantly you get connected to Saam.
          <br />
          <br /> You can tell Saam about your day, your relationships, your challenges, and
          achievements, and the things that leave you anxious and stressed.
        </>
      ),
    },
    {
      section: 'Integration',
      headerText:
        'Using your Journal and Saam, is great to help you better understand your emotional state',
      bodyContent: (
        <>
          By analyzing your journal entries, Saam provides personalized insights and advice that can
          help you better process your emotions and develop effective coping strategies for you when
          need be.
          <br />
          <br /> In combination, they establish a secure and supportive environment to help you
          recognize patterns and triggers, and enhance your overall mental wellbeing.
        </>
      ),
    },
  ];

  const date = new Date();

  return (
    <main className='min-h-screen phones:mx-[23px]'>
      <section className='overflow-x-hidden bg-black h-screen relative phones:relative phones:-mx-[23px] phones:px-5'>
        <header className='py-5 px-[30px] flex justify-between phones:px-0 phones:py-[30px]'>
          <div className='bg-[url(./assets/pngs/logo-text.png)] bg-no-repeat bg-center bg-contain w-24 h-[45px] phones:w-[76px] phones:h-[35px]' />
          <Link
            to='/welcome'
            className='font-semibold text-[14px] leading-[21px] py-[10px] px-[25px] text-white border-2 border-[rgba(255,255,255,0.4)] rounded-[25px] phones:hidden transition-all duration-500 hover:bg-white hover:text-black'
          >
            Get Started
          </Link>
        </header>

        <h2 className='text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-clip-text text-transparent w-[734px] font-normal text-[74px] leading-[100px] bg-[linear-gradient(100.26deg,rgba(255,255,255,0.2)_3.12%,rgba(255,255,255,0.5)_27.6%,#FA77FF_50.52%,#6454FF_80.21%)] phones:font-medium phones:text-[10vw] phones:leading-[78px] phones:w-[90vw] xs-phones:leading-[60px]'>
          Empowering minds, Enhancing lives.
          <Link
            to='/login'
            className='font-semibold text-[14px] leading-[21px] py-[10px] px-[25px] text-white border-2 border-[rgba(255,255,255,0.4)] rounded-[25px] mx-auto hidden phones:block max-w-fit xs-phones:mt-5 transition-all duration-500 hover:bg-white hover:text-black'
          >
            Get Started
          </Link>
        </h2>

        <div className='bg-[url(./assets/svgs/arrow-down.svg)] animate-bounce w-5 h-10 bg-no-repeat bg-center absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 hidden phones:block' />
      </section>

      <section className='py-[177px] overflow-x-hidden bg-[#f5f5f7] phones:rounded-[25px] phones:mt-[140px] phones:py-[60px] phones:px-[58px]'>
        <h1 className='font-normal text-[244px] leading-[366px] text-[#121212] text-center phones:text-[84px] phones:leading-[126px] xs-phones:text-[15vw] xs-phones:leading-[80px]'>
          Saam.
        </h1>
        <small className='block text-center font-normal text-[28px] leading-[42px] text-[rgba(0,0,0,0.5)] phones:text-[16px] xs-phones:text-[4vw] xs-phones:leading-8'>
          Your supportive AI mental health friend
        </small>
      </section>

      <section className='px-10 bg-white phones:px-0'>
        <p className='max-w-[635px] mt-[146px] mx-auto text-center font-medium text-[28px] leading-[54px] bg-[linear-gradient(100.26deg,#F600FF_0%,#1800FF_100%)] bg-clip-text text-transparent phones:mt-[140px] phones:max-w-[340px] phones:text-[20px] phones:leading-[38px]'>
          Saam offer these collaborative features because it care about your mental wellbeing
        </p>

        <div className='bg-[#121212] relative mt-[146px] rounded-[25px] p-[50px_0_135px] phones:mt-[140px] phones:p-[30px_30px_68px]'>
          <header className='x-scroll flex items-center justify-center gap-x-[5%] gap-y-1 overflow-auto xs-phones:pb-4 xs-phones:justify-start'>
            {buttonTexts.map(buttonText => (
              <button
                key={buttonText}
                onClick={() => setSubSection(buttonText)}
                className={`font-medium whitespace-nowrap flex-shrink-0 text-[24px] py-5 px-10 leading-9 rounded-[100px] transition-all duration-500 phones:rounded-[50px] phones:text-[16px] phones:leading-6 phones:py-[10px] phones:px-[18px] ${
                  subSection === buttonText
                    ? 'text-[#3a3a3a] bg-white'
                    : 'text-[#9e9e9e] bg-transparent'
                }`}
              >
                {buttonText}
              </button>
            ))}
          </header>

          <div className='w-4/5 mt-[85px] ml-[81px] transition-all duration-500 phones:mt-[60px] phones:w-full phones:ml-0 xs-phones:mt-10'>
            <p className='font-semibold text-[36px] leading-[54px] text-[#fafafa] phones:text-[24px] phones:leading-[46px] phones:-tracking-[0.3px]'>
              {divContents?.find(({ section }) => section === subSection)?.headerText || ''}
            </p>
            <p className='font-normal text-[18px] leading-[27px] -tracking-[0.3px] text-[#9e9e9e] mt-10 phones:mt-[50px] phones:text-[15px] phones:leading-7'>
              {divContents?.find(({ section }) => section === subSection)?.bodyContent || ''}
            </p>
          </div>
        </div>

        <div className='bg-[rgba(18,18,18,0.8)] rounded-[25px] text-center mx-auto mt-[140px] w-[70%] grid grid-cols-[21px_minmax(0,1fr)_21px] grid-rows-[30px_auto_45px] px-[3%] pt-24 pb-[115px] phones:mt-[100px] phones:w-full'>
          <img src={openQuote} alt='' className='self-end' />
          <img src={closeQuote} alt='' className='col-start-3 self-end' />
          <p className='font-semibold text-[24px] leading-9 text-white col-start-1 col-end-4 xs-phones:text-[22px]'>
            Take care of your mind and soul, it's the only place you have to live
          </p>
          <small className='col-start-1 col-end-4 font-normal text-[16px] leading-6 text-[#7c7c7c] self-end phones:mt-[30px]'>
            #Mentalhealth
          </small>
        </div>

        <div className='py-[78px] px-[7%] bg-[#121212] rounded-[40px] mt-[140px] grid grid-rows-2 grid-cols-2 gap-y-6 phones:mt-[100px] phones:block phones:py-[90px] phones:px-[30px] phones:rounded-[25px]'>
          <img
            alt=''
            src={lockImage}
            className='row-start-1 row-end-3 ml-auto mr-[30%] phones:w-[87px] phones:h-[114px] phones:mx-auto'
          />
          <h3 className='text-white font-bold text-[44px] leading-[66px] self-end phones:mt-[70px] phones:text-[24px] phones:leading-9'>
            Truly Private and Secure
          </h3>
          <p className='text-[#7c7c7c] font-medium text-[16px] leading-6 phones:mt-[30px] phones:text-[15px] phones:leading-7'>
            Your privacy and security are top priorities while you engage with Dr.SAAM. Our platform
            is designed to keep all user information and MyFriend sessions confidential and secure,
            ensuring that you have a private and safe experience.
          </p>
        </div>
      </section>

      <footer className='mt-[227px] text-center max-w-[520px] mx-auto mb-[30px] phones:mt-[120px] phones:mx-10 phones:mb-10'>
        <h4 className='font-normal text-[24px] leading-9 text-[#848484] phones:text-[18px] phones:leading-[27px]'>
          Got a question? Reach out to us
        </h4>
        <div className='flex justify-between mt-[100px] phones:mt-[80px]'>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            to='mailto:Info.omari.ai@gmail.com'
            className='bg-[url(./assets/svgs/email.svg)] bg-no-repeat bg-center w-10 h-10'
          />
          <Link
            target='_blank'
            rel='noopener noreferrer'
            to='https://twitter.com/omariai_hq?s=11&t=QIr0UAc_yq0BYb8Sughz_w'
            className='bg-[url(./assets/svgs/twitter.svg)] bg-no-repeat bg-center w-10 h-10'
          />
          <Link
            target='_blank'
            rel='noopener noreferrer'
            to='https://instagram.com/omariai_hq?igshid=YmMyMTA2M2Y='
            className='bg-[url(./assets/svgs/instagram.svg)] bg-no-repeat bg-center w-10 h-10'
          />
        </div>
        <p className='mt-[150px] font-bold text-[12px] leading-[18px] text-[#848484] phones:mt-[140px]'>
          A product of Omari AI
        </p>
        <small className='mt-[15px] font-normal text-[12px] leading-[14px] phones:leading-[22px]'>
          Copyright &copy; {date.getFullYear()} SAAM from Omari AI, Inc. All rights reserved.
        </small>
        <ArrowUp />
      </footer>
    </main>
  );
};

export default Info;