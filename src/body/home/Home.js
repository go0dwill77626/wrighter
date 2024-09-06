import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Box, Typography, Container } from '@mui/material';
import { HomeText } from '../../constant/constant';

const CarouselComponent = () => {
    const carouselItems = [
        {
            src: '/images/carousal1.jpg',
            captionTitle: 'Test caption 1',
            captionDescription: 'Test caption description 1',
        },
        {
            src: '/images/carousal2.jpg',
            captionTitle: 'Test caption 2',
            captionDescription: 'Test caption description 2',
        },
        {
            src: '/images/carousal3.webp',
            captionTitle: 'Test caption 3',
            captionDescription: 'Test caption description 3',
        },
        {
            src: '/images/carousal4.jpeg',
            captionTitle: 'Test caption 4',
            captionDescription: 'Test caption description 4',
        },
        {
            src: '/images/carousal5.webp',
            captionTitle: 'Test caption 5',
            captionDescription: 'Test caption description 5',
        },
        {
            src: '/images/carousal6.png',
            captionTitle: 'Test caption 6',
            captionDescription: 'Test caption description 6',
        },
        {
            src: '/images/carousal7.jpg',
            captionTitle: 'Test caption 7',
            captionDescription: 'Test caption description 7',
        },
    ];

    return (
        <Box sx={{ width: '100%' }}>
            <Carousel>
                {carouselItems.map((item, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={item.src}
                            alt={`Slide ${index + 1}`}
                            style={{ height: '540px', objectFit: 'cover' }}
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
            <Box sx={{ textAlign: 'justify', mt: 4, mb: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
                    Welcome to Our Website
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', mt: 2 }}>
                    {HomeText}
                </Typography>
            </Box>
        </Container>
    );
};

export default Home;
