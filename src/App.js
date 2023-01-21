import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginAndRegister/LoginPage'
import LoginAndRegister from './Pages/LoginAndRegister'
import RegisterPage from './Pages/LoginAndRegister/RegisterPage'
import MineShoppingPage from './Pages/MineShoppingPage'


function App() {
  return (
    // <AppStyled>
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to={"/user"} />} />

        <Route path='/user' element={<LoginAndRegister />}>
          <Route index={true} element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path='/explore' element={<MineShoppingPage />} />

      </Routes>
    </Router>
    // </AppStyled>
  );
}

export default App;
