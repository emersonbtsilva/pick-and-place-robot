import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Products from './Products';
import MyRobot from './MyRobot'

function App() {
  return (
    <Routes>    
      <Route path="/" element={<Login />} />     
      <Route path="/home" element={<Home />} />
      <Route path="/produtos" element={<Products />} />
      <Route path="/meurobo" element={<MyRobot />} />
    </Routes>
  );
}

export default App;
