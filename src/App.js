import { BrowserRouter, Route, Routes } from "react-router-dom";

import Service from "./Website/Pages/Service";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import BlogGrid from "./Website/Pages/BlogGrid";
import BlogDetail from "./Website/Pages/BlogDetail";
import Team from "./Website/Pages/Team";
import Testimonial from "./Website/Pages/Testimonial";
import Contact from "./Website/Pages/Contact";
import Profile from "./Website/Pages/Profile";
import Login from "./Website/Pages/Login";
import Signup from "./Website/Pages/Signup";
import PNF from "./Website/Pages/PNF";

import Dashboard from "./Admin/Pages/Dashboard";
import Aheader from "./Admin/Components/Aheader";
import Afooter from "./Admin/Components/Afooter";
import Customer from "./Admin/Pages/Customer";
import AddCategories from "./Admin/Pages/AddCategories";
import ManageCategories from "./Admin/Pages/ManageCategories";
import AddServices from "./Admin/Pages/AddServices";
import AdminLogin from "./Admin/Pages/AdminLogin";
import Manageservices from "./Admin/Pages/Manageservices";
import Feedback from "./Admin/Pages/Feedback";
import ManageContact from "./Admin/Pages/ManageContact";
import AddEmployees from "./Admin/Pages/AddEmployees";
import ManageEmployees from "./Admin/Pages/ManageEmployees";






function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="/bloggrid" element={<BlogGrid/>}></Route>
<Route path="/blogdetail" element={<BlogDetail/>}></Route>
<Route path="/team" element={<Team/>}></Route>
<Route path="/testimonial" element={<Testimonial/>}></Route>
<Route path="/service" element={<Service/>}></Route>
<Route path="/contact" element={<Contact/>}></Route>
<Route path="/profile" element={<Profile/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/signup" element={<><Signup/></>}></Route>
<Route path="*" element={<><PNF/></>}></Route>

{/* Admin Routing */}
<Route path="/dashboard" element={<><Aheader/><Dashboard/><Afooter/></>}></Route>
<Route path="/customer" element={<><Aheader/><Customer/><Afooter/></>}></Route>
<Route path="/addcat" element={<><Aheader/><AddCategories/><Afooter/></>}></Route>
<Route path="/managecat" element={<><Aheader/><ManageCategories/><Afooter/></>}></Route>
<Route path="/addservices" element={<><Aheader/><AddServices/><Afooter/></>}></Route>
<Route path="/manageservices" element={<><Aheader/><Manageservices/><Afooter/></>}></Route>
<Route path="/admin-login" element={<><AdminLogin/></>}></Route>
<Route path="/feedback" element={<><Aheader/><Feedback/><Afooter/></>}></Route>
<Route path="/addemployees" element={<><Aheader/><AddEmployees/><Afooter/></>}></Route>
<Route path="/manageemployees" element={<><Aheader/><ManageEmployees/><Afooter/></>}></Route>
<Route path="/mcontact" element={<><Aheader/><ManageContact/><Afooter/></>}></Route>



</Routes>
</BrowserRouter>
  );
}

export default App;
