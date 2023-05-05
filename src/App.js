import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Components/Form';
import Allnotes from './Components/Allnotes';
import UpdateForm from './Components/UpdateForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/all" element={<Allnotes />}></Route>
        <Route path="/update/:id" element={<UpdateForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
