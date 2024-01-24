import './App.css';
import { Route, Routes } from 'react-router-dom'
import Test from './pages/Test';

function App() {
  return (
    <>
     <h1>Home</h1>
     <Routes>
      <Route path='test' element={<Test />} />
     </Routes>
    </>
  );
}

export default App;
