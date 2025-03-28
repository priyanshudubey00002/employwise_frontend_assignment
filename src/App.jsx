import "./App.css";
import SignIn from "./pages/SignIn";
import UserList from "./pages/UserList";
import EditUserForm from "./pages/EditUserForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/edit/:id" element={<EditUserForm />} />
      </Routes>
    </Router>
  );
}

export default App;
