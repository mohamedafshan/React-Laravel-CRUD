import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
            <div className="container">
                <Link className="navbar-brand" to="/">Rubysoft</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact-us">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/student">Student List</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;