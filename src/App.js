import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import FetchAllAppointments from './components/FetchAllAppointments';
import FetchAppointment from './components/FetchAppointment';
import AddAppointment from './components/AddAppointment';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment/all" element={<FetchAllAppointments />} />
        <Route path="/appointment/get/:id" element={<FetchAppointment />} />
        <Route path="/appointment/add" element={<AddAppointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;