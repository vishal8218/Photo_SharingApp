import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination, PaginationItem } from '@mui/material';

const ImageGallery = () => {
    
    const [pageNumbers,setPageNumbers]=useState(0);
    const [prevCount,setPrevCount]=useState(null);
    useEffect(()=>
        {
            setPrevCount(pageNumbers)
        },[]
        );

     const incrementCount = () => {
    setPageNumbers(prevCount => prevCount + 1);
         return pageNumbers;
  };
    
        
  const [images, setImages] = useState([]);
    
  const changePage=()=>
  {
    
    const fetchData = async () => {
        try {
            let pageNum=incrementCount();
          const url='https://api.unsplash.com/photos?page='+(pageNum);
          
          const response = await axios.get(url, {
            params: {
              client_id: 'sLrqzwWe-hrskDJeKflfr1t1UOFzMM8hEJL1oda1-nQ',
            },
          });
  
          setImages(response.data);
        //  console.log(response.alt_description)
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };
  
      fetchData();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url='https://api.unsplash.com/photos?page='+(pageNumbers);
        const response = await axios.get(url, {
          params: {
            client_id: 'sLrqzwWe-hrskDJeKflfr1t1UOFzMM8hEJL1oda1-nQ',
          },
        });

        setImages(response.data);
      //  console.log(response.alt_description)
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
            style={{ width: '200px', margin: '10px' }}
          />
        ))}
       
      </div>
  
    <Pagination onClick={changePage}></Pagination>
    
    </div>
  );
};

export default ImageGallery;
