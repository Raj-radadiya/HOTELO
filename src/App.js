import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Rendering from './rendering';
import Header from './layout/header';
import Footer from './layout/footer';

function App() {
  return (
    <div>
      <Header />
      <Rendering />
      {/* <Footer/> */}
    </div>

  );
}


export default App;
