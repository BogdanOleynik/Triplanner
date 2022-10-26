import Container from 'components/Container';
import Footer from 'components/Footer';
// import Header from 'components/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function AppBar() {
  return (
    <>
      <Container>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
        <footer>
          <Footer />
        </footer>
      </Container>
    </>
  );
}
