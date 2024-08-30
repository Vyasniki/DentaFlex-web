import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

// Sample images - replace these with your own images
import StoryImage1 from "../../public/story-1.jpg";
import StoryImage2 from "../../public/story-2.jpg";

const StorySection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
}));

const Story = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: "#fafafa",
        marginBottom: 20, // Light background to distinguish the section
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ mb: 4, fontFamily: "inherit" }}
        >
          Our Story
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <StorySection>
              <Typography
                variant="h6"
                align="center"
                gutterBottom
                sx={{ fontWeight: "bold", mb: 2, fontFamily: "inherit" }}
              >
                Established in 2022
              </Typography>
              <Typography
                variant="body1"
                align="center"
                paragraph
                sx={{ fontFamily: "inherit", mb: 2 }}
              >
                Since our inception in 2022, we have been dedicated to helping
                dental clinics fill their open positions with skilled dental
                assistants and hygienists. Our journey began with a simple goal:
                to provide a seamless staffing solution that supports clinics in
                their time of need.
              </Typography>
              <Typography
                variant="body1"
                align="center"
                paragraph
                sx={{ fontFamily: "inherit", mb: 2 }}
              >
                Through dedication and transparency, we have built strong
                relationships with both our clients and the dental professionals
                we place. Our commitment to being fair and transparent has
                fostered trust and helped us grow rapidly within these few
                years.
              </Typography>
              <Typography
                variant="body1"
                align="center"
                paragraph
                sx={{ fontFamily: "inherit" }}
              >
                We value every client and worker from the bottom of our hearts,
                and we believe that our honest approach has been key to our
                success. Thank you for being a part of our story and supporting
                us as we continue to expand and enhance our services.
              </Typography>
            </StorySection>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <img
                src={StoryImage1}
                alt="Dental Clinic"
                style={{
                  width: "100%",
                  borderRadius: theme.shape.borderRadius,
                  boxShadow: theme.shadows[2],
                }}
              />
              <img
                src={StoryImage2}
                alt="Teamwork"
                style={{
                  width: "100%",
                  borderRadius: theme.shape.borderRadius,
                  boxShadow: theme.shadows[2],
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Story;
