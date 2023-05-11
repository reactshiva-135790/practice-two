import "./subNav.css"
import { NavLink, Outlet } from 'react-router-dom'
import { StarRate } from '@mui/icons-material';

const SubNav = () => {
    return (
        <section id="sub-nav">
            <div className="container">
                <div className="row">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <StarRate /><li className="breadcrumb-item"><NavLink to="/favorites">Favorites</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to="/allCryptos">All Cryptos</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to="/spotMarkets">Spot Markets</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to="/futureMarkets">Future Markets</NavLink></li>
                            <li className="breadcrumb-item"><NavLink to="/newListing">New Listing</NavLink></li>
                        </ol>
                    </nav>
                </div>
            </div>
            <Outlet />
        </section>
    )
};

export default SubNav;
