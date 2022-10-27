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
        <Route path="/Cookies" element={<Cookies />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Partnership" element={<Partnership />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="tickets/ticketId" element={<Ticket />} />
      </Routes>

      <Footer />
    </>
  );
};
