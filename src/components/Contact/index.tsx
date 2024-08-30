import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
} from "@mui/material";

const ContactUs = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      {/* Page Title */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ marginBottom: 4 }}
      >
        Get in Touch with Us
      </Typography>

      {/* Explanatory Paragraph */}
      <Typography
        variant="h6"
        align="center"
        color="textSecondary"
        paragraph
        sx={{ marginBottom: 4 }}
      >
        We’re here to assist you with any questions or concerns you may have.
        Please fill out the form below to send us a message, or use the contact
        information provided to reach out directly. We look forward to hearing
        from you!
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 4 }}>
            <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              <TextField
                required
                id="name"
                label="Name"
                fullWidth
                variant="outlined"
              />
              <TextField
                required
                id="email"
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
              />
              <TextField
                id="subject"
                label="Subject"
                fullWidth
                variant="outlined"
              />
              <TextField
                id="message"
                label="Message"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
              />

              {/* Submit Button */}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  padding: "12px 24px",
                  textTransform: "none",
                  alignSelf: "center",
                }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Location Map */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ marginBottom: 4 }}
          >
            Visit Us
          </Typography>
          <Box
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
              height: 0,
              paddingBottom: "56.25%",
              position: "relative",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d844.9742453693011!2d-80.94114050521384!3d44.57363738613196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8829fc7d1ca4a9d3%3A0xf56aa2a5ac1e030e!2s1260%202nd%20Ave%20E%2C%20Owen%20Sound%2C%20ON%20N4K%202J3!5e0!3m2!1sen!2sca!4v1724991778263!5m2!1sen!2sca"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ position: "absolute", top: 0, left: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              title="Google Map"
            />
          </Box>
          {/* Additional Contact Information */}
          <Box sx={{ textAlign: "center", marginTop: 6 }}>
            <Typography variant="h6" gutterBottom>
              Prefer to talk?
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Give us a call at <strong>(226) 272-1990</strong> or email us at{" "}
              <strong>support@dentaflex.ca</strong>.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
