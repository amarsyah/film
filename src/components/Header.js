import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navigasi from './Navigasi';
import Detaildune from './Detaildune';
import Detailinfinite from './Detailinfinite';
import DetailJoker from './Detailjoker';
import Detailbatman from './Detailbatman';
import Detailantman from './Detailantman';
import Detailrobinhood from './Detailrobinhood';
import './style.css';

const Header = () => {
    return (
        <>
            <Navigasi />
            <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="Dune" element={<Detaildune/>}/>
                <Route path="Infinite" element={<Detailinfinite/>}/>
                <Route path="Joker" element={<DetailJoker/>}/>
                <Route path="Batman" element={<Detailbatman/>}/>
                <Route path="Antman" element={<Detailantman/>}/>
                <Route path="Robinhood" element={<Detailrobinhood/>}/>
            </Routes>
            </BrowserRouter>
        </>
    )
};

export default Header;