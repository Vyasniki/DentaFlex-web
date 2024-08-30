import React from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import {
  WorkOutline,
  PeopleAlt,
  CalendarToday,
  Star,
} from "@mui/icons-material"; // Use MUI icons

const services = [
  {
    title: "Daily Temp Assistants",
    description:
      "Reduce hassle for dental clinics with our daily temporary dental assistants and hygienists.",
    icon: <WorkOutline fontSize="inherit" />,
  },
  {
    title: "Full-Time Hiring Option",
    description:
      "Hire full-time dental assistants or hygienists who have been sourced through our platform.",
    icon: <PeopleAlt fontSize="inherit" />,
  },
  {
    title: "Shift Reporting",
    description:
      "Special offer for individuals reporting shifts to our platform to reduce off-site hiring patterns by clinics.",
    icon: <CalendarToday fontSize="inherit" />,
  },
  {
    title: "Flexible Scheduling",
    description:
      "Easily adjust schedules for temporary staffing to meet your clinic’s needs.",
    icon: <Star fontSize="inherit" />,
  },
];

const Services = () => {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: "#f5f5f5", // Light background to distinguish the section
        marginBottom: 20,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            mb: 6,
            fontFamily: "inherit",
          }} // Inheriting global font styles
        >
          Our Services
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 4,
                  boxShadow: 3,
                  borderRadius: 2,
                  height: "100%", // Ensure equal height
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      fontSize: "4rem",
                      mb: 2,
                      color: "primary.main", // Use theme color
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    sx={{ fontWeight: "bold", fontFamily: "inherit" }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ fontFamily: "inherit" }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
