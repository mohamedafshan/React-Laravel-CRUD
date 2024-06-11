import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Contact from "../pages/Contact.js";
import StudenList from "../pages/student.js";
import StudentCreate from "../pages/StudentCreate.js";
import StudentEdit from "../pages/StudentEdit.js";
function MyRouter(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact-us" element={<Contact/>}/>
                <Route path="/student" element={<StudenList/>}/>
                <Route path="/student/create" element={<StudentCreate/>}/>
                <Route path="/student/:id/edit" element={<StudentEdit/>}/>
            </Routes>
        </div>
    );
}
export default MyRouter;