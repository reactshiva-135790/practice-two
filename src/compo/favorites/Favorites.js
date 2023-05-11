import { NavLink, Outlet } from "react-router-dom";
import "./favorites.css"

const Favorites = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-light bg-light">
                        <form className="container-fluid d-flex gap-3 justify-content-start">
                            <button className="btn btn-light" type="button"><NavLink to="favorites-spot" >Spot (0) </NavLink></button>
                            <button className="btn btn-light" type="button"><NavLink to="favorites-future">Future (0)</NavLink></button>
                        </form>
                    </nav>
                </div>
                <Outlet />
            </div>
        </>
    )
};

export default Favorites;