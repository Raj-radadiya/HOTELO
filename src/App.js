import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from './logo.svg';
import './App.css';
import Rendering from './rendering';
import Header from './layout/header';
import Footer from './layout/footer';
import SLIDER from './layout/slider';

function App() {
  return (
    <div>
      <Header/>
        <Rendering/>
        <SLIDER/>
        <Footer/>
    </div>

  );
}


export default App;
