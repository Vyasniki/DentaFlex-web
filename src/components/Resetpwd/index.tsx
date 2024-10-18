import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useParams, Link, useNavigate } from "react-router-dom";

function ResetPassword() {
  const { id,jwttoken } = useParams(); // Extract token from the URL params
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   
    const password= data.get('password');
   console.log(password);
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(`/api/auth/reset/${id}/${jwttoken}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });
      const result = await response.json();
      if (!response.ok) {
        const errorData = await response.json(); // Try to parse the error response
        console.log(errorData.msg || 'Something went wrong');
        return;
      }
     
        alert("Password reset successfully! Please login.");
        navigate("/login");
    
      
    } catch (error) {
      console.error("Error resetting password", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          sx={{ fontFamily: "inherit", fontWeight: 700 }}
        >
          Reset Password
        </Typography>
        <Typography
          component="p"
          sx={{ textAlign: "center", mb: 2, fontFamily: "inherit" }}
        >
          Please enter your new password.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="New Password"
            type="password"
            name="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ fontFamily: "inherit" }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{ fontFamily: "inherit" }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, fontFamily: "inherit", fontWeight: "bold" }}
          >
            Reset Password
          </Button>
          <Link
            to="/login"
            style={{ textDecoration: "none", fontFamily: "inherit" }}
          >
            {"Remember your password? Login"}
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default ResetPassword;
