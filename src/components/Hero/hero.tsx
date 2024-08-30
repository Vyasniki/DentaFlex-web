import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import Slider1 from "../../public/slider-1.jpg";
import Slider2 from "../../public/slider-2.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      img: Slider1,
      text: "Join our team of dedicated dental professionals and make a difference!",
    },
    {
      img: Slider2,
      text: "Empower smiles every day with a career that makes a difference.",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        background: `url(${slides[currentSlide].img}) no-repeat center center`,
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg" sx={{ zIndex: 1, textAlign: "center" }}>
        <Typography
          variant="h2"
          component="div"
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: 2,
            // color: "#d0e7d4",
            textShadow: "2px 2px black",
          }}
        >
          {slides[currentSlide].text}
        </Typography>
        {/* <Button
          variant="contained"
          color="primary"
          href="#apply" // Link to your application section or page
          sx={{ padding: "12px 24px", textTransform: "none", fontSize: "16px" }}
        > */}
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/signup"
          sx={{ textTransform: "none", padding: "10px 20px" }}
        >
          Join Now
        </Button>
      </Container>
      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor:
                currentSlide === index ? "white" : "rgba(255, 255, 255, 0.5)",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HeroSection;
