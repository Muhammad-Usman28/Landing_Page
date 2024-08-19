import React, { useState } from 'react';

export default function ContactUs() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='w-full'>
    <div className="container xl:ml-[190px]">
    <h1 className='
       text-4xl font-bold
       lg:text-3xl md:text-2xl sm:text-2xl'>Let's Get Talking
    </h1>
</div>


      <div className='
      xl:mx-auto xl:h-[700px] xl:w-[1000px] xl:mt-[50px] xl:mb-[50px] xl:flex xl:justify-between lg:mx-auto lg:h-[700px] lg:w-full lg:mt-[50px] lg:mb-[50px] lg:flex lg:justify-between md:mx-auto md:h-[700px] md:w-full md:mt-[50px] md:mb-[50px] md:flex md:justify-between
      sm:mx-auto sm:h-[700px] sm:w-full sm:mt-[50px] sm:mb-[50px] sm:flex sm:justify-around'>

        <div className='
        xl:h-[550px] xl:w-[400px] xl:ml-[-35px]
        lg:h-[500px] lg:w-[300px] lg:ml-[30px]
        md:h-[500px] md:w-[300px] md:ml-[30px]
        sm:h-[500px] sm:w-[300px] sm:ml-[30px]'>
            <img src="images/img10.webp" alt="Contact Pic" className='h-[550px]'/>
        </div>

        <div className='
        xl:h-[400px] xl:w-[600px] xl:bg-slate-100 xl:mt-24 xl:ml-[100px] 
        lg:h-[400px] lg:w-[500px] lg:bg-slate-100 lg:mt-24 lg:mr-[100px]
        md:h-[400px] md:w-[400px] md:bg-slate-100 md:mt-24 md:mr-[10px]
        sm:h-[400px] sm:w-[380px] sm:bg-slate-100 sm:mt-24 sm:ml-[10px] mr-[10px]'>

        <p className='
        xl:font-semibold xl:mt-[-120px] xl:mb-16 xl:text-xl xl:w-[600px] xl:ml-[10px]
        lg:font-semibold lg:mt-[-120px] lg:mb-16 md:ml-[10px]
        md:text-sm md:mt-[-120px] md:mb-16 md:w-[350px] 
        sm:text-s sm:mt-[-100px] sm:mb-16 sm:w-[350x] sm:ml-[20px]'>
          For more information or assistance, please reach out to us through our website's contact form. Our team is here to help with any questeio or requests you may have.</p>

        <form onSubmit={handleSubmit} >

        <label htmlFor="fullname" className='
        xl:text-xl xl:font-semibold xl:ml-10 xl:mb-2 xl:block
        lg:text-lg lg:font-semibold lg:ml-10 lg:mb-2 lg:block
        md:text-xl md:font-medium md:ml-10 md:mb-2 md:block
        sm:text-lg sm:font-medium sm:ml-10 sm:mb-2 sm:block  '>Full Name</label>
          <input 
            type="text" 
            placeholder="Enter your Full Name" 
            name='fullName'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="
            xl:w-[500px] xl:p-2 xl:ml-10 xl:border xl:border-gray-300 xl:rounded-md xl:focus:outline-none xl:focus:border-blue-500 xl:mb-2 
            lg:w-[400px] lg:p-2 lg:ml-10 lg:border lg:border-gray-300 lg:rounded-md lg:focus:outline-none lg:focus:border-blue-500 lg:mb-2 
            md:w-[300px] md:p-2 md:ml-10 md:border md:border-gray-300 md:rounded-md md:focus:outline-none md:focus:border-blue-500 
            md:mb-2
            sm:w-[250px] sm:p-2 sm:ml-10 sm:border sm:border-gray-300 sm:rounded-md sm:focus:outline-none sm:focus:border-blue-500 
            sm:mb-2"
          />

          <label htmlFor="email" className='
          xl:text-xl xl:font-semibold xl:ml-10 xl:mb-2 xl:block 
          lg:text-lg lg:font-semibold lg:ml-10 lg:mb-2 lg:block
          md:text-xl md:font-medium md:ml-10 md:mb-2 md:block
          sm:text-lg sm:font-medium sm:ml-10 sm:mb-2 sm:block '>Email</label>
          <input 
            type="email" 
            placeholder="Enter your Email" 
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
            xl:w-[500px] xl:p-2 xl:ml-10 xl:border xl:border-gray-300 xl:rounded-md xl:focus:outline-none xl:focus:border-blue-500 xl:mb-2 
            lg:w-[400px] lg:p-2 lg:ml-10 lg:border lg:border-gray-300 lg:rounded-md lg:focus:outline-none lg:focus:border-blue-500 lg:mb-2 
            md:w-[300px] md:p-2 md:ml-10 md:border md:border-gray-300 md:rounded-md md:focus:outline-none md:focus:border-blue-500 
            md:mb-2
            sm:w-[250px] sm:p-2 sm:ml-10 sm:border sm:border-gray-300 sm:rounded-md sm:focus:outline-none sm:focus:border-blue-500 
            sm:mb-2"
          />

         <label htmlFor="services" className='
         xl:text-xl xl:font-semibold xl:ml-10 xl:mb-2 xl:block
         lg:text-lg lg:font-semibold lg:ml-10 lg:mb-2 lg:block
         md:text-xl md:font-medium md:ml-10 md:mb-2 md:block
         sm:text-lg sm:font-medium sm:ml-10 sm:mb-2 sm:block '>Select Service</label>
          <select 
            name="services" 
            value={service}
            onChange={(e) => setService(e.target.value)}
            className='
            xl:w-[500px] xl:p-2 xl:ml-10 xl:border xl:border-gray-300 xl:rounded-md xl:focus:outline-none xl:focus:border-blue-500 xl:mb-2 
            lg:w-[400px] lg:p-2 lg:ml-10 lg:border lg:border-gray-300 lg:rounded-md lg:focus:outline-none lg:focus:border-blue-500 lg:mb-2 
            md:w-[300px] md:p-2 md:ml-10 md:border md:border-gray-300 md:rounded-md md:focus:outline-none md:focus:border-blue-500 
            md:mb-2
            sm:w-[250px] sm:p-2 sm:ml-10 sm:border sm:border-gray-300 sm:rounded-md sm:focus:outline-none sm:focus:border-blue-500 
            sm:mb-2'
          >
            <option value="">Select a Service</option>
            <option value="tractor-service">Tractor Service</option>
            <option value="asbestos-service">Asbestos Service</option>
            <option value="construction-service">Construction Service</option>
          </select>


          <button 
          type="submit"
          className='
          xl:w-[500px] xl:p-2 xl:ml-10 xl:border xl:border-gray-300 xl:rounded-md xl:focus:outline-none xl:focus:border-blue-500 xl:mb-2 xl:bg-black xl:text-white
          xl:text-2xl 
          lg:w-[400px] lg:p-2 lg:ml-10 lg:border lg:border-gray-300 lg:rounded-md lg:focus:outline-none lg:focus:border-blue-500 lg:mb-2 lg:bg-black lg:text-white
          lg:text-xl 
          md:w-[300px] md:p-2 md:ml-10 md:border md:border-gray-300 md:rounded-md md:focus:outline-none md:focus:border-blue-500 md:mb-2 md:mt-5 md:bg-black md:text-white
          md:text-xl
          sm:w-[250px] sm:p-2 sm:ml-10 sm:border sm:border-gray-300 sm:rounded-md sm:focus:outline-none sm:focus:border-blue-500 sm:mb-2 sm:mt-5 sm:bg-black sm:text-white
          sm:text-xl'
        >
          Submit
        </button>  
        </form>

        </div>
      </div>

        <h1 className='
        xl:text-3xl xl:font-bold xl:ml-[150px] 
        lg:text-xl lg:font-extrabold lg:ml-[260px] lg:w-[450px]
        md:text-xl md:font-extrabold md:ml-[150px] md:w-[450px] md:mt-[-50px]
        sm:text-xl sm:font-extrabold sm:ml-[110px] sm:w-[450px] sm:mt-[-50px]'>Fixing Homes and Setting You Up for Success</h1>

      <div className='
      xl:mx-auto xl:h-[600px] xl:w-[1070px] xl:mt-[10px] xl:mb-[50px] xl:flex xl:justify-between lg:mx-auto lg:h-[700px] lg:w-full lg:mt-[10px] lg:mb-[50px] lg:flex lg:justify-around md:mx-auto md:h-[700px] md:w-full md:mt-[10px] md:mb-[50px] md:flex md:justify-around
      sm:mx-auto sm:h-[700px] sm:w-full sm:mt-[10px] sm:mb-[50px] sm:flex sm:justify-around '>
        <div className='
        xl:h-[500px] xl:w-[500px] xl:mt-5 xl:text-xl xl:text-center xl:ml-[-50px]
        lg:h-[500px] lg:w-[400px] lg:mt-5 lg:text-xl lg:text-center
        md:h-[600px] md:w-[300px] md:mt-5 md:text-sm md:text-center
        sm:h-[600px] sm:w-[300px] sm:mt-5 sm:text-sm sm:text-center'>
            <p>When constructing or renovating a house, addressing potential asbestos issues is crucial to ensure a safe and healthy living environment. Asbestos was commonly used in materials such as insulation, roofing, flooring, and siding due to its durability and fire resistance. However, its use has been largely discontinued because of the serious health risks associated with asbestos exposure.

            Before beginning any construction work, it is essential to conduct a thorough inspection for asbestos-containing materials (ACMs). This involves hiring a professional to test and identify any asbestos present. If asbestos is detected, it must be handled with care by certified experts who follow stringent safety protocols to safely remove and dispose of it. Adhering to local regulations and safety standards.</p>

            <button 
              className='
              xl:w-[500px] xl:h-[50px] xl:mt-10 xl:bg-black xl:text-white xl:text-center xl:text-xl xl:font-bold xl:rounded-full 
              lg:w-[450px] lg:h-[50px] lg:mt-10 lg:bg-black lg:text-white lg:text-center lg:text-xl lg:font-semibold lg:rounded-full
              md:w-[300px] md:h-[50px] md:mt-10 md:bg-black md:text-white md:text-center 
              md:text-xl md:font-semibold md:rounded-full
              sm:w-[280px] sm:h-[50px] sm:mt-10 sm:bg-black sm:text-white sm:text-center 
              sm:text-lg sm:font-semibold sm:rounded-full'
              >
              Ask About Any Querry 
        </button>

        </div>
        <div className='
        xl:h-[500px] xl:w-[500px] xl:mt-5
        lg:h-[500px] lg:w-[400px] lg:mt-5 lg:ml-[-100px] lg:mr-[20px]
        md:h-[500px] md:w-[300px] md:mt-5
        sm:h-[500px] sm:w-[300px] sm:mt-5'>
            <img src="images/img11.webp" alt="House Cionstruction Pic" className='h-[500px]' />
        </div>
      </div>
    </div>
  )
}
