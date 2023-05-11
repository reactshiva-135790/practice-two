import "./errorPage.css"
import errorPage from "../../assets/images/errorPage.jpg"
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <div className="container-fluid text-center align-center ">

                <div className="row">

                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-5">
                      
                            <img src={errorPage} alt="ErrorImage" className="image-mode mt-5" />
                      
                        <div className="mt-5 mb-5">

                            <h6 className="error-page-text">Sorry! The page you’re looking for cannot be found.</h6>

                            <Link to="/"><span className="link-color">Go to HomePage</span></Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ErrorPage;
