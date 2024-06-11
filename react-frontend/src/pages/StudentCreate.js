import axios from "axios";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Swal from 'sweetalert2';


function StudentCreate(){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [InputErrorList, setInputErrorList] = useState({})
    const [student, setStudents] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
    })

    const handleInput = (e)=>{
        e.persist();
        setStudents({...student,[e.target.name]:e.target.value});
    }

    const saveStudent = (e)=>{
        e.preventDefault();
        setLoading(true);
        
        const data = {
            name:student.name,
            email:student.email,
            phone:student.phone,
            course:student.course,
        }

        axios.post('http://127.0.0.1:8000/api/students',data).then(res=>{
            // alert(res.data.message);
            Swal.fire('Success', res.data.message, 'success');
            navigate('/student');
            setLoading(false);
        })
        .catch(function(error){
            if(error.response){
                if(error.response.status === 422){
                    setInputErrorList(error.response.data.errors)
                    setLoading(false);
                }
                if(error.response.status === 500){
                    setInputErrorList(error.response.data.errors)
                    setLoading(false);
                }
            }
        });
    }

    if(loading){
        return (
            <div>
               <Loading/>
            </div>
        )
    }

   return (
    <div>
         <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>
                                Add Student
                                <Link to="/student" className="btn btn-danger float-end">Back</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={saveStudent}>
                                <div className="mb-3">
                                    <label>Name</label>
                                    <input type="text" name="name" value={student.name} onChange={handleInput} className="form-control"/>
                                    <span className="text-danger">{InputErrorList.name}</span>
                                </div>

                                <div className="mb-3">
                                    <label>Email</label>
                                    <input type="text" name="email" value={student.email} onChange={handleInput} className="form-control"/>
                                    <span className="text-danger">{InputErrorList.email}</span>
                                </div>

                                <div className="mb-3">
                                    <label>phone</label>
                                    <input type="text" name="phone" value={student.phone} onChange={handleInput} className="form-control"/>
                                    <span className="text-danger">{InputErrorList.phone}</span>
                                </div>

                                <div className="mb-3">
                                    <label>Course</label>
                                    <input type="text" name="course" value={student.course} onChange={handleInput} className="form-control"/>
                                    <span className="text-danger">{InputErrorList.course}</span>
                                </div>

                                <div className="mb-3">
                                    <button type="submit" name="name" className="btn btn-primary">Save Student</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   );
}

export default StudentCreate;