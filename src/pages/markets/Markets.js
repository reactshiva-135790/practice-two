import "./markets.css"
import { NavLink } from "react-router-dom";

const Markets = () => {
    return (

        <div className="container ">

            <div className="row">

                <div className="col-xl-3 col-sm-6 col-12 mb-3">

                    <NavLink to="/chartMarket">

                        <div className="card-body">
                            
                            <div className="d-flex justify-content-end">
                                <h6 className="market-heading-card mb-3">Highlight Coin</h6>
                            </div>

                            <div className="d-flex justify-content-between" >
                                <ul className="list-design">
                                    <li>BNB</li>
                                    <li>SOL</li>
                                    <li>ADA</li>
                                </ul>
                                <ul className="list-design">
                                    <li>329.21</li>
                                    <li>25.39</li>
                                    <li>0.406</li>
                                </ul>
                                <ul className="list-design">
                                    <li>+5.46%</li>
                                    <li>+6.20%</li>
                                    <li>+5.37%</li>
                                </ul>
                            </div>

                        </div>

                    </NavLink>

                </div>

                <div className="col-xl-3 col-sm-6 col-12 mb-3">

                    <NavLink to="/chartMarket">

                        <div className="card-body">

                            <div className="d-flex justify-content-end">
                                <h6 className="market-heading-card mb-3">New Listing</h6>
                            </div>

                            <div className="d-flex justify-content-between" >
                                <ul className="list-design">
                                    <li>STG</li>
                                    <li>OP</li>
                                    <li>MAGIC</li>
                                </ul>
                                <ul className="list-design">
                                    <li>0.7516</li>
                                    <li>2.763</li>
                                    <li>1.735</li>
                                </ul>
                                <ul className="list-design">
                                    <li>+22.22%</li>
                                    <li>+15.27%</li>
                                    <li>+0.75%</li>
                                </ul>
                            </div>

                        </div>

                    </NavLink>

                </div>

                <div className="col-xl-3 col-sm-6 col-12 mb-3">

                    <NavLink to="/chartMarket">

                        <div className="card-body">

                            <div className="d-flex justify-content-end">
                                <h6 className="market-heading-card mb-3">Top Gainer Coin</h6>
                            </div>

                            <div className="d-flex justify-content-between" >
                                <ul className="list-design">
                                    <li>SNT</li>
                                    <li>STG</li>
                                    <li>LRC</li>
                                </ul>
                                <ul className="list-design">
                                    <li>0.0356</li>
                                    <li>0.753</li>
                                    <li>2.735</li>
                                </ul>
                                <ul className="list-design">
                                    <li>+27.37%</li>
                                    <li>+24.73%</li>
                                    <li>+10.72%</li>
                                </ul>
                            </div>

                        </div>

                    </NavLink>

                </div>

                <div className="col-xl-3 col-sm-6 col-12 mb-3">

                    <NavLink to="/chartMarket">

                        <div className="card-body">

                            <div className="d-flex justify-content-end">
                                <h6 className="market-heading-card mb-3">Top Gainer Coin</h6>
                            </div>

                            <div className="d-flex justify-content-between" >
                                <ul className="list-design">
                                    <li>BTC</li>
                                    <li>ETH</li>
                                    <li>APT</li>
                                </ul>
                                <ul className="list-design">
                                    <li>283.42</li>
                                    <li>163.5</li>
                                    <li>850.54</li>
                                </ul>
                                <ul className="list-design">
                                    <li>+3.50%</li>
                                    <li>+11.52%</li>
                                    <li>+5.35%</li>
                                </ul>
                            </div>

                        </div>

                    </NavLink>

                </div>

            </div>


        </div>

    )
};

export default Markets;