import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Container,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const PricingComponent = () => {
  const tiers = [
    {
      title: "Starter",
      price: "Free",
      description: [
        "Up to 3 job postings per month",
        "Access to basic candidate profiles",
        "Email support",
        "Community forum access",
      ],
    },
    {
      title: "Professional",
      price: "$49/month",
      description: [
        "Unlimited job postings",
        "Full candidate profile access",
        "Priority email support",
        "Featured job listings",
      ],
    },
    {
      title: "Enterprise",
      price: "$99/month",
      description: [
        "Dedicated account manager",
        "Customized hiring solutions",
        "Phone & email support",
        "Exclusive access to top candidates",
      ],
    },
    {
      title: "Report a Shift",
      price: "Special Offer",
      description: [
        "Earn rewards for reporting available shifts",
        "Help reduce off-site hiring needs",
        "Access exclusive bonuses",
        "Be part of our trusted community",
      ],
    },
  ];

  const specialOffer = {
    title: "Report a Shift",
    price: "Special Offer",
    description: [
      "Earn rewards for reporting available shifts",
      "Help reduce off-site hiring needs",
      "Access exclusive bonuses",
      "Be part of our trusted community",
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Our Pricing Plans
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Flexible and transparent pricing to suit your hiring needs. Whether
        you're a clinic looking to hire or a dental professional seeking
        opportunities, we have the right plan for you.
      </Typography>

      <Box sx={{ marginTop: 4 }}>
        <Grid container spacing={2} alignItems="stretch">
          {[...tiers].map((tier) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              key={tier.title}
              sx={{ marginBottom: 5 }}
            >
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: 3,
                  padding: 2,
                  marginBottom: 15,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" color="textSecondary" gutterBottom>
                    {tier.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{ marginBottom: 2 }}
                  >
                    {tier.price}
                  </Typography>
                  <Box component="ul" sx={{ paddingLeft: 2, margin: 0 }}>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        key={line}
                        sx={{ marginBottom: 1 }}
                      >
                        {line}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call-to-Action Section */}
      <Box sx={{ marginTop: 6, textAlign: "center", marginBottom: 20 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Ready to take the next step?
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Contact our team today and let's find the perfect plan for your needs.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/contact"
          sx={{ textTransform: "none", padding: "10px 20px" }}
        >
          Contact Us
        </Button>
      </Box>
    </Container>
  );
};

export default PricingComponent;
