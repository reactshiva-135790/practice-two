import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import Trade from "./pages/trade/Trade"
import Earn from "./pages/earn/Earn"
import NFT from "./pages/nft/NFT"
import MarketsOverView from "./pages/marketsOverview/MarketsOverView"
import Footer from './compo/footer/Footer';
import ErrorPage from './pages/errorPage/ErrorPage';
import React from 'react';
import Navbar from './compo/navbar/Navbar';
import Favorites from "./compo/favorites/Favorites"
import AllCryptos from "./compo/allCryptos/ALLCryptos"
import SpotMarkets from './compo/spotMarkets/SpotMarkets';
import FutureMarkets from './compo/futureMarkets/FutureMarkets';
import NewListing from './compo/newListings/NewListing';
import ChartMarket from './compo/chart-market/ChartMarket';
import Spot from './compo/favorites/favorites-spot/Spot';
import Future from "./compo/favorites/favorites-future/Future"
import Perpetual from "./compo/futureMarkets/futureMarkets-perpetual/Perpetual"
import Quartely from "./compo/futureMarkets/futureMarkets-quartely/Quartely"
import Trades from "./compo/trades/Trades"
import Chart from "./compo/chart/Chart"
import Orderbook from "./compo/order-book/Orderbook"
import Derivatives from './pages/derivatives/Derivatives';
import All from './compo/allCryptos/all/All';
import Metaverse from './compo/allCryptos/metaverse/Metaverse';
import Defi from './compo/allCryptos/defi/Defi';
import Innovation from './compo/allCryptos/innovation/Innovation';
import Nft from './compo/allCryptos/nft/Nft';
import FufiToken from './compo/allCryptos/fufiToken/FufiToken';
import FUSD from './compo/spotMarkets/fusd/FUSD';
import Usdt from './compo/spotMarkets/usdt/Usdt';
import Trd from './compo/spotMarkets/trd/Trd';
import AboutUs from "./pages/about/AboutUs";
import ContactUs from './pages/contact/ContactUs';
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy/PrivacyAndPolicy"
import TermsAndConditions from './pages/termsAndConditions/TermsAndConditions';


function App() {

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="favorites" element={<Favorites />}>
            <Route index element={<Spot />} />
            <Route path="favorites-spot" element={<Spot />} />
            <Route path="favorites-future" element={<Future />} />
          </Route>

          <Route path="allCryptos" element={<AllCryptos />}>
            <Route index element={<All />} />
            <Route path="allCryptos-all" element={<All />} />
            <Route path="allCryptos-metaverse" element={<Metaverse />} />
            <Route path="allCryptos-defi" element={<Defi />} />
            <Route path="allCryptos-innovation" element={<Innovation />} />
            <Route path="allCryptos-nft" element={<Nft />} />
            <Route path="allCryptos-fufi-token" element={<FufiToken />} />
          </Route>

          <Route path="spotMarkets" element={<SpotMarkets />}>
            <Route index element={<FUSD />} />
            <Route path="spot-markets-fusd" element={<FUSD />} />
            <Route path="spot-markets-usdt" element={<Usdt />} />
            <Route path="spot-markets-trd" element={<Trd />} />
          </Route>

          <Route path="futureMarkets" element={<FutureMarkets />}>
            <Route index element={<Perpetual />} />
            <Route path="futuremarkets-perpetaul" element={<Perpetual />} />
            <Route path="futuremarkets-quartely" element={<Quartely />} />
          </Route>

          <Route path="newListing" element={<NewListing />} />
        </Route>

        <Route path="trade" element={<Trade />} />
        <Route path="derivatives" element={<Derivatives />} />
        <Route path="earn" element={<Earn />} />
        <Route path="nft" element={<NFT />} />

        <Route path="chartMarket" element={<ChartMarket />}>
          <Route index element={<Chart />} />
          <Route path="chartMarket-chart" element={<Chart />} />
          <Route path="chartMarket-order-book" element={<Orderbook />} />
          <Route path="chartMarket-trades" element={<Trades />} />
        </Route>

        <Route path="marketsOverview" element={<MarketsOverView />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="privacyAndPolicy" element={<PrivacyAndPolicy />} />
        <Route path="termsAndConditions" element={<TermsAndConditions />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>

      <Footer />

    </React.Fragment>
  );
}

export default App;
