import React, { useEffect, useState } from "react";
import { fetchUsers, deleteUser } from "../utils/handle_api"; // Import API function
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
  CircularProgress,
  Box,
  Pagination,
  IconButton,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit"; // Green Edit Icon
import { useNavigate } from "react-router-dom";
const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers(page);
      setUsers(data);
      setLoading(false);
    };

    getUsers();
  }, [page]);

  const handlePageChange = async (value) => {
    setPage(value);
  };
  const handleDelete = async (id) => {
     try {
          setLoading(true);
          await deleteUser(id);
        } catch (error) {
          console.error("Failed to delete user:", error.message);
          alert("Failed to update user. Please try again.");
        } finally {
          setLoading(false);
        }
    setUsers(users.filter((user) => user.id !== id));
  };


  const handleEdit = (user) => {
    navigate(`/edit/${user.id}`, { state: { userData: user } }); // Passing user data
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3, bgcolor: "#121212", minHeight: "100vh" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#fff", fontWeight: "bold" }}
      >
        Users List
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {users.map((user, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                bgcolor: "#1E1E1E",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                p: 2,
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(255,255,255,0.1)",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <Avatar
                src={user.avatar}
                alt={user.first_name}
                sx={{ width: 60, height: 60, marginRight: 2 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {user.first_name} {user.last_name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#BBB" }}>
                  {user.email}
                </Typography>
              </CardContent>
              <Box>
                <IconButton
                  onClick={() => {
                    handleEdit(user);
                  }}
                  sx={{ color: "lightgreen" }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleDelete(user.id)}
                  sx={{ color: "red" }}
                >
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" mt={3}>
        <Pagination
          count={2}
          page={page}
          onChange={(event, value) => {
            handlePageChange(value);
          }}
          variant="outlined"
          shape="rounded"
          sx={{ bgcolor: "white", p: 1, borderRadius: "8px", color: "#fff" }}
        />
      </Box>
    </Box>
  );
};

export default UsersList;
