import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"


export const NavBar = () => {

    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/hotel">HotelList</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/hotel">Hotel Reasults</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/search">Search Form</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/search">Confirmation </Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/search">Comments</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/search">My Bookings</Link>
            </li>

            



            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("travel_user")
                    navigate("/", { replace: true })
                }}>Logout</Link>
            </li>


        </ul>
    )
}

