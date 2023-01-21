import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginAndRegister/LoginPage'
import RegisterPage from './Pages/LoginAndRegister/RegisterPage'


function App() {
  return (
    // <AppStyled>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
    // </AppStyled>
  );
}

export default App;
