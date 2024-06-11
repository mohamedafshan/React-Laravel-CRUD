import axios from "axios";
import { useEffect, useState } from "react";
import { Link,  useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Swal from 'sweetalert2';

function StudentEdit() {
    let { id } = useParams();

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [inputErrorList, setInputErrorList] = useState({});
    const [student, setStudent] = useState({});

    useEffect(() => {
        setLoading(true);
        axios.get(`http://127.0.0.1:8000/api/students/${id}/edit`).then(res => {
            if (res.data && res.data.student) {
                setStudent(res.data.student);
            }
            setLoading(false);
        }).catch(error => {
            console.error("There was an error fetching the student data!", error);
            setLoading(false);
        });
    }, [id]);

    const handleInput = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }

    const saveStudent = (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            name: student.name,
            email: student.email,
            phone: student.phone,
            course: student.course,
        }

        axios.put(`http://127.0.0.1:8000/api/students/${id}/edit`, data).then(res => {
            // alert(res.data.message);
            Swal.fire('Success', res.data.message, 'success');
            navigate('/student');
            setLoading(false);
        }).catch(error => {
            if (error.response) {
                if (error.response.status === 422) {
                    setInputErrorList(error.response.data.errors);
                } else if (error.response.status === 500) {
                    alert("An error occurred on the server.");
                }
            }
            setLoading(false);
        });
    }

    if (loading) {
        return (
            <div>
                <Loading />
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
                                    Edit Student
                                    <Link to="/student" className="btn btn-danger float-end">Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={saveStudent}>
                                    <div className="mb-3">
                                        <label>Name</label>
                                        <input type="text" name="name" value={student.name} onChange={handleInput} className="form-control" />
                                        <span className="text-danger">{inputErrorList.name}</span>
                                    </div>

                                    <div className="mb-3">
                                        <label>Email</label>
                                        <input type="text" name="email" value={student.email} onChange={handleInput} className="form-control" />
                                        <span className="text-danger">{inputErrorList.email}</span>
                                    </div>

                                    <div className="mb-3">
                                        <label>Phone</label>
                                        <input type="text" name="phone" value={student.phone} onChange={handleInput} className="form-control" />
                                        <span className="text-danger">{inputErrorList.phone}</span>
                                    </div>

                                    <div className="mb-3">
                                        <label>Course</label>
                                        <input type="text" name="course" value={student.course} onChange={handleInput} className="form-control" />
                                        <span className="text-danger">{inputErrorList.course}</span>
                                    </div>

                                    <div className="mb-3">
                                        <button type="submit" className="btn btn-primary">Save Student</button>
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

export default StudentEdit;