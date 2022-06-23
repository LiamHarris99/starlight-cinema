import { Routes, Route } from 'react-router-dom';
import HomeLayout from './components/layout/HomeLayout/HomeLayout';
import HomePage from './views/Home/HomePage/HomePage';
import LoginPage from './views/Login/LoginPage/LoginPage';
import RegisterPage from './views/Register/RegisterPage/RegisterPage';
import BookingPage from './views/Booking/BookingPage/BookingPage';
import ComboPage from './views/Combo/ComboPage/ComboPage';
import HistoryPage from './views/History/HistoryPage/HistoryPage';
import ConfirmPage from './views/Confirm/ConfirmPage/ConfirmPage';
import Test from './views/Test/Test';

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/test' element={<Test />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route path='/combo' element={<ComboPage />} />
        <Route path='/confirm' element={<ConfirmPage />} />
        <Route path='/history' element={<HistoryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
