import "./home.css"
import { useNavigate } from "react-router-dom";
import { InsightsOutlined } from '@mui/icons-material';
import Markets from "../markets/Markets";
import SubNav from "../../compo/subNav/SubNav"

const Home = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/marketsOverview")
    }

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-5">
                        <div className="d-flex justify-content-between mt-5">
                            <h1 className="market-text mb-5">Markets</h1>
                            <h1 className="home-text mb-5" onClick={handleClick}> <InsightsOutlined /> Markets Overview</h1>
                        </div>
                    </div>
                </div>
            </div>

            <Markets />
            <SubNav />
        </>
    )
};

export default Home;