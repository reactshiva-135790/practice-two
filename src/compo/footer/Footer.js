import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./footer.css"

const Footer = () => {

    const [date, setDate] = useState();

    const getYear = () => setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])

    return (

        <footer className="footer">
            <div className="footer__addr">
                <img src="https://tradekia.com/static/media/create_acc.54ee6efa8ba9bc803e16.jpg"
                    className="img-fluid" />
                <p className='single_footer'>
                    It's An Indian Native Discount Derivative Exchange.
                    Its Remarkable Features Make It One Of The Best Cryptocurrency Exchanges.
                    One Of The Most Significant Advantages Of TradeKIA Is Zero Fees On Loss Trade,
                    Which Means You Don’t Have To Worry About Paying Transaction Fees If You Suffered A Loss On An Exchange.
                </p>
            </div>

            <ul className="footer__nav">
                <li className="nav__item">
                    <h2 class="nav__title">Pages</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="#">Markets</a>
                        </li>

                        <li>
                            <a href="#">Trade</a>
                        </li>

                        <li>
                            <a href="#">Earn</a>
                        </li>
                        <li>
                            <a href="#">NFT</a>
                        </li>
                        <li>
                            <a href="#">Feed</a>
                        </li>
                    </ul>
                </li>

                <li className="nav__item nav__item--extra">
                    <h2 className="nav__title">Updates</h2>

                    <ul className="nav__ul nav__ul--extra">

                        <li>
                            <NavLink to = "aboutUs">About Us</NavLink>
                        </li>

                        <li>
                            <NavLink to = "contactUs">Contact Us</NavLink>
                        </li>

                        <li>
                            <NavLink to = "privacyAndPolicy">Privacy and Policy</NavLink>
                        </li>

                        <li>
                            <NavLink to = "termsAndConditions">Terms & Conditions</NavLink>
                        </li>

                        <li>
                            <a href="https://content.fufi.info/announcements/" target="_blank">Announcement</a>
                        </li>

                        <li>
                            <a href="https://content.fufi.info/announcements/press-release/" target="_blank">Press Release</a>
                        </li>

                        <li>
                            <a href="#">Team</a>
                        </li>

                        <li>
                            <a href="#">Timeline</a>
                        </li>

                        <li>
                            <a href="https://fufi.info/" target="_blank">Our Ecosystem</a>
                        </li>
                    </ul>
                </li>

                <li className="nav__item">
                    <h2 className="nav__title">Social Media</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="https://www.facebook.com/tradekia" target="_blank">Facebook</a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/tradekiaofficial/" target="_blank">Instagram</a>
                        </li>

                        <li>
                            <a href="https://twitter.com/trade_kia" target="_blank">Twitter</a>
                        </li>

                        <li>
                            <a href="https://t.me/invite_at_TradeKIA" target="_blank">Telegram</a>
                        </li>

                        <li>
                            <a href="https://www.youtube.com/channel/UCX_OGHBVQu2-AJpSCh47KSA" target="_blank">Youtube</a>
                        </li>

                        <li>
                            <a href="https://www.reddit.com/user/tradekiaofficial" target="_blank">Reddit</a>
                        </li>

                    </ul>
                </li>
            </ul>

            <div className="legal">
                <p>&copy; {date} Something. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;