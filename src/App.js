//import logo from './logo.svg';
import Nav from './components/Nav';
import Middle from './components/Middle';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/middle.css';

function App() {
  return (
      <>
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Middle/>} />
            <Route exact  path="/school" element={<h1>School page</h1>} />
            <Route exact path="/scholarships" element={<h1>Scholarships page</h1>} />
            <Route exact path="/exam" element={<h1>Exam page</h1>} />
            <Route exact path="/login" element={<h1>login page  </h1>} />
            <Route exact path="/signup" element={<SignUp/>}/>
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
      </>
  );
}

export default App;
