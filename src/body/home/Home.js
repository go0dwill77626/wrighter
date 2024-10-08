import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Box, Typography, Container } from '@mui/material';
import { HomeText } from '../../constant/constant';

const CarouselComponent = () => {
    const carouselItems = [
        {
            src: '/images/headerfont3.jpg',
            // captionTitle: 'Test caption 1',
            // captionDescription: 'Test caption description 1',
        },
        {
            src: '/images/carousal2.jpg',
            // captionTitle: 'Test caption 2',
            // captionDescription: 'Test caption description 2',
        },  
        {
            src: '/images/wallpaper1.jpg',
            // captionTitle: 'Test caption 3',
            // captionDescription: 'Test caption description 3',
        },
        {
            src: '/images/carousal4.jpeg',
            // captionTitle: 'Test caption 4',
            // captionDescription: 'Test caption description 4',
        },
        {
            src: '/images/carousal5.webp',
            // captionTitle: 'Test caption 5',
            // captionDescription: 'Test caption description 5',
        },
        {
            src: '/images/headerfont1.jpg',
            // captionTitle: 'Test caption 6',
            // captionDescription: 'Test caption description 6',
        },
        {
            src: '/images/carousal7.jpg',
            // captionTitle: 'Test caption 7',
            // captionDescription: 'Test caption description 7',
        },
    ];

    return (
        <Box sx={{ width: '100%',marginTop:'6rem'}}>
            <Carousel interval={1000} pause="hover">
                {carouselItems.map((item, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={item.src}
                            alt={`Slide ${index + 1}`}
                            style={{ height: '540px', objectFit: 'cover',borderRadius:'5px'  }}
                        />
                        <Carousel.Caption>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white' }}>
                                {item.captionTitle}
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white' }}>
                                {item.captionDescription}
                            </Typography>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Box>
    );
};

const Home = () => {

    return (
        <Container>
            <CarouselComponent />
            <Box sx={{
                borderRadius:'5px',
                textAlign: 'justify', mt: 4, mb: 4,
                padding: '2rem',
                boxShadow:'0 4px 8px rgba(0, 0, 0, 0.2)',
                backgroundImage: 'linear-gradient(55deg, #b32877, #c45959, #a78ac0)'}}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333', "&:hover": {
      textDecoration: 'underline',
    },}}>
                Welcome to Our Website
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', mt: 2 }}>
                {HomeText}
            </Typography>
        </Box>
        </Container >
    );
};

export default Home;
