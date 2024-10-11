import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const name = 'Michelle Zhang';
  const role = 'Software Engineer';
  const bioIntro = `Hey there! My name is Michelle Zhang and I am a software engiener!
    I graduated from Chapman University in May 2024 with a B.S. in Computer Science and a minor in Data Analytics.`;
  const bioBackground = 'I have a background in Full-Stack Developing, Web Development, and Data Analytics.';
  const phoneNumber = '(949) 466-3855';
  const email = 'michelleeeezhangggg@gmail.com';

  return (
    <section className='bg-lightblue'>
      <div className='flex p-10'>
        <div className='bg-blue p-10'>
          <Image
            src='/images/profile.png'
            alt='hero image'
            className='rounded-full'
            width={175}
            height={175}
          />
          <p className='text-black mb-4 text-4xl lg:text-4xl font-extrabold'>{name}</p>
          <p className='text-black mb-6 text-lg lg:text-4xl font-semibold'>{role}</p>
          <p className='text-black text-me mb-6 lg:text-xl'>Phone Number: {phoneNumber}</p>
          <p className='text-black text-me mb-6 lg:text-xl'>Email: {email}</p>
        </div>
        <div className='p'>
          <h1 className='text-black mb-4 text-4xl lg:text-6xl font-extrabold'>{name}</h1>
          <h3 className='text-black mb-6 text-lg lg:text-4xl font-semibold'>{role}</h3>
          <div>
            {/* TODO: make background color transition smoother */}
            <button className='px-6 py-3 rounded-full mr-4 bg-darkblue text-white font-bold border border-darkblue hover:bg-white hover:text-black hover:border-black transition-all hover:delay-200'>Resume</button>
            <button className='px-6 py-3 rounded-full bg-transparent text-black font-bold border border-black mt-3 hover:bg-darkblue hover:text-white hover:border-transparent transition-all hover:delay-200'>Projects</button>
          </div>
          <p className='text-black text-me mb-6 lg:text-xl'>{bioIntro}</p>
          <p className='text-black text-me mb-6 lg:text-xl'>{bioBackground}</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection