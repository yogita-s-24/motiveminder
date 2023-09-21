import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home'
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Home />
        <Footer />
    </>
);

