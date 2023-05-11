import "./navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <header className="header">
                <NavLink to="/" className="logo">
                    <img src="https://tradekia.com/static/media/create_acc.54ee6efa8ba9bc803e16.jpg"
                    />
                </NavLink>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li className="nav-style"><NavLink to="trade">Trade</NavLink></li>
                    <li className="nav-style"><NavLink to="derivatives">Derivatives</NavLink></li>
                    <li className="nav-style"><NavLink to="earn">Earn</NavLink></li>
                    <li className="nav-style"><NavLink to="nft">NFT</NavLink></li>
                    <li className="nav-style"><a href="https://content.fufi.info/" target="_blank">Feed</a></li>
                </ul>
            </header>
        </div>
    )
};

export default Navbar;
