import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Ticket from './Ticket';
import Cookies from './Cookies';
import Contacts from './Contacts';
import Partnership from './Partnership';
import AboutUs from './AboutUs';
import Help from './Help';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='agreement' element={<Agreement />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='cookies' element={<Cookies />} />
        <Route path='help' element={<Help />} />
        <Route path='partnership' element={<Partnership />} />
        <Route path='privacy' element={<Privacy />} />
      </Routes>

      <Footer />
    </>
  );
};
