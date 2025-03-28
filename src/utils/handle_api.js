import axios from "axios";

const BASE_URL = "https://reqres.in/api/users";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to fetch users
export const fetchUsers = async (page=1, userId=null) => {
  try {
    const response = userId
    ? await apiClient.get(`/${userId}`) // Fetch a single user if userId is provided
    : await apiClient.get("", { params: { page: page } });

    if(userId != null){return response.data }
    else{
    return response.data.data;
    }
  } catch (error) {
    console.error("Error fetching users:", error.message);
    throw error;
  }
};

// Function to update user details (PUT)
export const updateUser = async (userId, { first_name, last_name, email }) => {
  try {
    const response = await apiClient.put(`/${userId}`, { first_name, last_name, email });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error.message);
    throw error;
  }
};



// Function to delete user
export const deleteUser = async (userId) => {
  try {
    await apiClient.delete(`/${userId}`);
    return { message: "User deleted successfully" };
  } catch (error) {
    console.error("Error deleting user:", error.message);
    throw error;
  }
};
