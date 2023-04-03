import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/dashboard/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Welcome from './pages/Welcome';
import OfficialLog from './pages/OfficialLog';
import PublicReg from './pages/PublicReg';
import PublicLog from './pages/PublicLog';
import PublicWel from './pages/PublicWel';
import AddCir from './pages/dashboard/AddCir';
import ViewCir from './pages/dashboard/ViewCir';


function App() {
  return (
    <BrowserRouter>
      <Routes>


        <Route path='/home' element={<Home />} />
        <Route path='/add-circular' element={<AddCir />} />
        <Route path='/view-circulars' element={<ViewCir />} />


        <Route path='/' element={<Welcome />} />
        <Route path='/official-login' element={<OfficialLog />} />
        <Route path='/public-registration' element={<PublicReg />} />
        <Route path='/public-login' element={<PublicLog />} />
        <Route path='/public-welcome/:data' element={<PublicWel />} />

      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>



  );
}

export default App;
