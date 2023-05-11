import { NavLink, Outlet } from "react-router-dom";

const AllCryptos = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-light bg-light">
                        <form className="container-fluid d-flex gap-3 justify-content-start">
                            <button className="btn btn-light" type="button"><NavLink to="allcryptos-all" >All</NavLink></button>
                            <button className="btn btn-light" type="button"><NavLink to="allcryptos-metaverse">Metaverse</NavLink></button>
                            <button className="btn btn-light" type="button"><NavLink to="allcryptos-defi" >Defi</NavLink></button>
                            <button className="btn btn-light" type="button"><NavLink to="allcryptos-innovation">Innovation</NavLink></button>
                            <button className="btn btn-light" type="button"><NavLink to="allcryptos-nft" >NFT</NavLink></button>
                            <button className="btn btn-light" type="button"><NavLink to="allcryptos-fufi-token">Fufi Token</NavLink></button>
                        </form>
                    </nav>
                </div>
                <Outlet />
            </div>

        </>
    )
};

export default AllCryptos;