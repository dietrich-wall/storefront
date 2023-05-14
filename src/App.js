import './App.css';
import Home from './pages/index';
import SigninPage from './pages/signin';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signin' element={<SigninPage />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
