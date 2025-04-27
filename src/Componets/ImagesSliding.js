import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import HeadingDisplay from './imageTraverse';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
        
        
      <div align="center"  className='ImageColuring' >
        <a href='https://i.redd.it/kriti-sanon-hot-v0-4aijraqzvndb1.jpg?width=1170&format=pjpg&auto=webp&s=d067d3dbe32dadf69348e28a9321def13ca17e0f'>
        <img src="https://i.redd.it/kriti-sanon-hot-v0-4aijraqzvndb1.jpg?width=1170&format=pjpg&auto=webp&s=d067d3dbe32dadf69348e28a9321def13ca17e0f" alt="Image are still loading" height="550px" weight="550px"   />
        </a>
      </div>
     
      <div align="center" className='ImageColuring' >
      <a href='https://wallpapers.com/images/high/indian-female-model-kriti-sanon-fsr64epjrdhyr620.webp'>
        <img src="https://wallpapers.com/images/high/indian-female-model-kriti-sanon-fsr64epjrdhyr620.webp" alt="Image are still loading" height="550px" weight="550px"/>
        </a>
      </div>
      <div align="center" className='ImageColuring'>
        <a href='https://w0.peakpx.com/wallpaper/958/689/HD-wallpaper-kriti-sanon-actress-babe-bollywood-celebrity-hot-sexy.jpg'>
        <img src="https://w0.peakpx.com/wallpaper/958/689/HD-wallpaper-kriti-sanon-actress-babe-bollywood-celebrity-hot-sexy.jpg" alt="Image..."  height="550px" weight="550px" />
        </a>
      </div>
    </Slider>
  );
};

export default ImageSlider;



// import { response } from 'express';
// import React, { useEffect, useState } from 'react';

// const ProductData=()=>{
//     const [data,setData]=useState(null);
//     const [error,setError]=useState(null);

//     useEffect(()=>
//     {
//         const fetchData=async()=>{
//             try{
//                 const res=await fetch('https://in.pinterest.com/search/pins/?q=Fern%20future%20home%20vibes');
//                 if(!res.ok)
//                 {
//                     throw new Error("Network response was not ok");
//                 }
//                 const result=await res.json();
//                 setData(result);
//             }catch(error)
//             {
//                 setError(error.message);
//             }
//         };
//         fetchData();
//     },[]);
//    return(
//     <div>
//       <h1>My React App</h1>
//       {data ? (
//         <p>Data: {JSON.stringify(data)}</p>
//       ) : error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };
    
// export default ProductData;
