import { NavLink, Outlet } from "react-router-dom";

const FutureMarkets = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-light bg-light">
                        <form className="container-fluid d-flex gap-3 justify-content-start">
                            <button className="btn btn-light" type="button">
                                <NavLink to="futuremarkets-perpetaul"> USDⓈ-M Futures </NavLink></button>
                            <button className="btn btn-light" type="button">
                                <NavLink to="futuremarkets-quartely">  COIN-M Futures </NavLink></button>
                        </form>
                    </nav>
                </div>
                <Outlet />
            </div>
        </>
    )
};

export default FutureMarkets;