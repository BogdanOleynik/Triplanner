import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Ticket from './Ticket';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tickets/ticketId" element={<Ticket />} />
      </Routes>

      <Footer />
    </>
  );
};
