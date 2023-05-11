import "./chartMarket.css"
import { NavLink, Outlet } from "react-router-dom";


const ChartMarket = () => {
    return (
        <>


            <nav className="position-sticky navbar navbar-light bg-light mb-5">

                <form className="container-fluid d-flex gap-5 justify-content-center">

                    <button className="btn btn-light" type="button"><NavLink to="chartMarket-chart">Chart</NavLink></button>

                    <button className="btn btn-light" type="button"><NavLink to="chartMarket-order-book">Order Book</NavLink></button>

                    <button className="btn btn-light" type="button"><NavLink to="chartMarket-trades">Trades</NavLink></button>

                </form>

            </nav>

            <Outlet />

            <ul className="d-flex gap-3 justify-content-center mt-5 list-style">
                <li>Open Orders(0)</li>
                <li>Order History</li>
                <li>Trade History</li>
                <li>Funds</li>
                <li>Positions(0)</li>
            </ul>


            <div className="box-market">

                <h6><span className="color-span">Log In</span> or <span className="color-span">Register Now</span> to trade</h6>

            </div>

            <div className="chart-market-footer">
                <ul className="d-flex list-style-footer">
                    <li>stable Connection</li>
                    <li>Announcements</li>
                </ul>
            </div>

        </>
    )
}

export default ChartMarket;