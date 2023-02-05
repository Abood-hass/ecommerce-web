import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginAndRegister/LoginPage'
import LoginAndRegister from './Pages/LoginAndRegister'
import ExplorePage from './Pages/ExplorePage'
import RegisterPage from './Pages/LoginAndRegister/RegisterPage'
import MineShoppingPage from './Pages/ExplorePage/MineShoppingPage'
import SearchResultPage from './Pages/ExplorePage/SearchResultPage'
import ProductViewPage from './Pages/ExplorePage/ProductViewPage'
import CartPage from './Pages/CartPage'
import { darkTheme, lightTheme } from './theme';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AuthContext } from './ContextApi/authContext';
import CartContext from './ContextApi/CartContext';


function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  const [token, setToken] = useState(localStorage.getItem("token"));

  const setUserToken = (token) => {
    localStorage.setItem("token", token);
    setToken(token)
  }


  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme} >
      <Router>
        <AuthContext.Provider value={{ token, setToken: setUserToken }} >
          <CartContext>
            <Routes>
              <Route path='/' element={<Navigate to={"/user"} />} />
              <Route path='/user' element={<LoginAndRegister />}>
                <Route index={true} element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
              </Route>
              <Route path='/explore' element={<ExplorePage />} >
                <Route index={true} element={<MineShoppingPage />} />
                <Route path='search' element={<SearchResultPage />} />
                <Route path='product' element={<ProductViewPage />} />
              </Route>
              <Route path='/cart' element={<CartPage />} />
            </Routes>

          </CartContext>
        </AuthContext.Provider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
