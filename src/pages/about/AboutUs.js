import stocks from "../../assets/images/stocks.png"

const AboutUs = () => {
    return (
        <section className="mt-5">
            <div className="container">

                <div className="row">

                    <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">

                        <h1 className="about-heading mt-5 mb-5">ABOUT US</h1>

                        <p className="about-para">TradeKIA hosted by Future’s Finance is an Indian native discount derivative exchange
                            with a wide variety of advanced features. Our extraordinary features make us one of
                            the best cryptocurrency exchanges.</p>

                        <p className="about-para">
                            We understand your trading needs and we’re presenting you strategies that’ll make trading
                            convenient and smooth. We pride ourselves on our efficient ways of making trading a
                            pleasant & tranquil experience for our users.
                        </p>

                        <p className="about-para">
                            Our goal is to be your exchange portal to the cryptocurrency planet! In the future,
                            cryptocurrency will eventually replace physical or hard money. We aim to be a part of your
                            journey and make it as easy and understandable as possible. We want to increase the freedom
                            of money exchange globally in the simplest way possible.
                        </p>
                    </div>

                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12" >

                        <div className="text-center mt-5">

                            <img src={stocks} alt="logo" className="image-responsive mt-5" />

                        </div>

                    </div>

                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">

                        <h1 className="about-heading mt-5">OUR DEFINING FEATURES</h1>

                        <ol className="order-style mb-5">
                            <li>Zero fees on loss side trade</li>
                            <li>Minimum transaction fees</li>
                            <li>Affiliate income</li>
                            <li>Trade with INR pairs easily</li>
                            <li>Quick buy</li>
                            <li>Premium features with an exclusive package</li>
                            <li>Multi coin supports</li>
                            <li>Dynamic trading chart</li>
                        </ol>

                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutUs;
