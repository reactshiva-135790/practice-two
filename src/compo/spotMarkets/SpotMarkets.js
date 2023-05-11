import { NavLink, Outlet } from "react-router-dom";

const SpotMarkets = () => {
    return (
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-light bg-light">
                    <form className="container-fluid d-flex gap-3 justify-content-start">
                        <button className="btn btn-light" type="button"><NavLink to="spot-markets-fusd" >FUSD</NavLink></button>
                        <button className="btn btn-light" type="button"><NavLink to="spot-markets-usdt">USDT</NavLink></button>
                        <button className="btn btn-light" type="button"><NavLink to="spot-markets-trd" >TRD</NavLink></button>
                    </form>
                </nav>
            </div>
            <Outlet />
        </div>
    )
}

export default SpotMarkets;