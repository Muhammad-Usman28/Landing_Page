import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow /> 
  };

  return (
    <div className='w-full overflow-x-hidden'>
      <div className='xl:mt-20 lg:mt-[-100px] sm:mt-[-100px] sm:mb-[50px] '>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className='bg-white h-[650px] text-black rounded-xl'>
              <div className='h-56 rounded-t-xl flex justify-center items-center mt-32'>
                <img src={d.img} alt="" className='max-w-full h-auto xl:h-[250px] xl:w-[350px]' />
              </div>

              <div className='
              xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-4 xl:p-4 xl:mt-10 
              lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-4 lg:p-4 lg:mt-10 
              md:flex md:flex-col md:justify-center md:items-center md:gap-4 md:p-4 md:mt-10 
              sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-4 sm:p-4 sm:mt-10'>

                <p className='
                xl:text-3xl xl:font-semibold 
                lg:text-2xl lg:font-semibold 
                md:text-xl md:font-semibold 
                sm:text-md sm:font-bold'>{d.name}</p>

                <p className='
                xl:text-black xl:text-lg xl:px-6 xl:py-1 xl:text-center xl:w-[420px] 
                lg:text-black lg:text-md lg:px-2 lg:text-center lg:w-[230px] 
                md:text-black md:text-center md:px-2 md:w-[180px] md:ml-[-20px] 
                sm:text-black sm:text-center sm:px-2 sm:w-[165px] sm:ml-[-20px]'>{d.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

const data = [
  {
    name: 'Service One',
    img: '/images/img2.webp',
    review: 'This image showcases a tractor, likely on a farm or agricultural setting. The tractor might be used for plowing fields or transporting goods.'
  },
  {
    name: 'Service Two',
    img: '/images/img3.jpeg',
    review: 'In this picture, a tractor is seen parked near a house, indicating a rural or countryside environment.'
  },
  {
    name: 'Service Three',
    img: '/images/img4.jpg',
    review: 'This image features a man engaged in construction work, possibly mixing or laying cement. The setting could be a construction site.'
  },
  {
    name: 'Service Four',
    img: '/images/img5.webp',
    review: 'The picture shows a man standing beside or operating a tractor. This scene could depict a farmer or worker taking a moment to pause.'
  }
]


// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', fontSize: '50px', color: 'gray', right: '-25px' }}
//       onClick={onClick}
//     >
//       <span style={{ fontSize: '50px', color: 'gray' }}>{'>'}</span>
//     </div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', fontSize: '50px', color: 'gray', left: '-50px' }}
//       onClick={onClick}
//     >
//       <span style={{ fontSize: '50px', color: 'gray' }}>{'<'}</span>
//     </div>
//   );
// }
