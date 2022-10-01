import './App.css';
import Header from './components/header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './assets/css/bootstrap.min.css';
import './assets/css/default.css';
import './assets/css/LineIcons.css';
import './assets/css/magnific-popup.css';
import './assets/css/slick.css';
import './assets/css/style.css';
import Service from './components/service/Service';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';
import Clients from './components/clients/Clients';
import Footer from './components/footer/Footer';
import CallToAction from './components/callToAction/CallToAction';



function App() {
  return (
    <div className="App">
      <Header />
      <Service />
      <Pricing />
      <CallToAction />
      <Testimonials />
      <Clients />
      <Contact />
      <Footer />
      
      {/* <header className="App-header">
       
      </header> */}
    </div>
  );
}

export default App;
