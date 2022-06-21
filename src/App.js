import logo from './logo.svg';
import './App.css';
import Header from './Header/header';
import Aboutme from './Aboutme/Aboutme.js';
import Skills from './Skills/Skills.js';
import Portfolia  from './Portfolia/portfolia.js'
import Footer from './Footer/footer.js'
function App() {
  return (
    <div className="App">
     <Header/>
     <Aboutme/>
     <Skills/>
     <Portfolia/>
     <Footer/>
    </div>
  );
}

export default App;
