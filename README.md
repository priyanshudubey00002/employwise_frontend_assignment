# EmployWise User Management System

## 📌 Project Overview
This React-based **User Management System** integrates with the [Reqres API](https://reqres.in/) to perform basic user authentication and management operations. The application is divided into three levels:

1. **Authentication Screen** - Login using credentials.
2. **List All Users** - Display a paginated list of users.
3. **Edit, Delete, and Update Users** - Modify user details.

## ✨ Features
- 🔐 **User Authentication** (Login using API)
- 📋 **User List with Pagination**
- ✏️ **Edit User Details**
- ❌ **Delete User**
- 🔄 **API Integration with Reqres**
- 🖥 **Responsive UI**
- 🚀 **Deployed Online**

## 📌 Technologies Used
- **React.js**
- **React Router** (Navigation)
- **Axios** (API Requests)
- **Local Storage** (Token Management)
- **CSS Framework** (Tailwind CSS / Bootstrap / Material-UI)

## 🛠️ Setup & Installation
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/employwise-assignment.git
   cd employwise-assignment
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Run the Project**
   ```sh
   npm start
   ```

## 🔑 Authentication
- **API Endpoint:**
  ```sh
  POST https://reqres.in/api/login
  ```
- **Credentials:**
  - **Email:** `eve.holt@reqres.in`
  - **Password:** `cityslicka`
- **Token Storage:** Stored in **local storage** for session persistence.

## 📋 User List & Management
- **Fetch Users:**
  ```sh
  GET https://reqres.in/api/users?page=1
  ```
- **Update User:**
  ```sh
  PUT https://reqres.in/api/users/{id}
  ```
- **Delete User:**
  ```sh
  DELETE https://reqres.in/api/users/{id}
  ```


**💡 Contributions and feedback are welcome!** 🚀
