const ContactUs = () => {
    
    return (

        <section className="mt-5 mb-5">

            <div className="container">

                <div className="row">

                    <h1 className="text-center mt-5">Get In Touch</h1>

                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">

                        <form className="mt-5">

                            <div className="mt-5">

                                <label for="fullName" className="form-label">Name :</label>

                                <input type="text" class="form-control" id="fullName" aria-describedby="emailHelp"

                                />

                            </div>

                            <div className="mb-3">

                                <label for="exampleInputPassword1" class="form-label">Email Address :</label>

                                <input type="email" class="form-control" id="exampleInputPassword1"

                                />

                            </div>

                            <div className="mb-3">

                                <label for="comment">Ask Quries :</label>

                                <textarea className="form-control" rows="5" id="comment" />

                            </div>

                            <button type="submit" className="btn btn-warning">Submit</button>

                        </form>

                    </div>

                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">

                        <div className="mt-5">

                            <iframe

                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2438070928833!2d80.99534301451953!3d26.863993968654082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2b7f28dd63d%3A0x314b508adc1514a0!2sFairdeal%20Bhawan%2C%20Gomti%20Nagar%20Rd%2C%20Vibhuti%20Khand%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010!5e0!3m2!1sen!2sin!4v1674201833553!5m2!1sen!2sin"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">

                            </iframe>

                        </div>

                    </div>


                </div>


            </div>





        </section>
    )
};
export default ContactUs;