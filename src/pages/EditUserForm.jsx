import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Container, Typography, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { updateUser} from "../utils/handle_api";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    background: { default: "#121212", paper: "#1e1e1e" },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#90caf9' },
            '&:hover fieldset': { borderColor: '#64b5f6' },
            '&.Mui-focused fieldset': { borderColor: '#42a5f5' },
          },
        },
      },
    },
  },
});

const EditUserForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get user data from location state
  const user = location.state?.userData || {}; 

  // Initialize state with user data
  const [formData, setFormData] = useState({
    firstName: user.first_name || "",
    lastName: user.last_name || "",
    email: user.email || "",
  });
  const [loading, setLoading] = useState(false);
  
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // update user details
      await updateUser(user.id, { first_name: formData.firstName, last_name: formData.lastName, email: formData.email });
      alert("User updated successfully!");
  
      // Navigate back to the users list after update
      navigate("/users",{ replace: true });
    } catch (error) {
      console.error("Failed to update user:", error.message);
      alert("Failed to update user. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ mt: 5, p: 3, backgroundColor: "background.paper", borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h5" gutterBottom>Edit User</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default EditUserForm;
