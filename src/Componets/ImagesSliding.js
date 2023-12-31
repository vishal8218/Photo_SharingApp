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
        <a href='https://www.indiaglitz.com/hindi-actress-kriti-sanon-photos-7065'>
        <img src="https://shorturl.at/mtv12" alt="Image are still loading" height="550px" weight="550px"   />
        </a>
      </div>
     
      <div align="center" className='ImageColuring' >
      <a href='https://wallpapers.com/kriti-sanon-pictures'>
        <img src="https://shorturl.at/crswE" alt="Image are still loading" height="550px" weight="550px"/>
        </a>
      </div>
      <div align="center" className='ImageColuring'>
        <a href='https://zeenews.india.com/telugu/photo-gallery/actress-kiara-advani-looking-hot-in-latest-black-saree-images-63780'>
        <img src="https://shorturl.at/lyDE8" alt="Image..."  height="550px" weight="550px" />
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