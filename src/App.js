import logo from './logo.svg';
import './App.css';
import Rendering from './rendering';
import Header from './layout/header';
import Footer from './layout/footer';

function App() {
  return (
    <div>
      <Header/>
        <Rendering/>
        <Footer/>
    </div>

  );
}


export default App;
