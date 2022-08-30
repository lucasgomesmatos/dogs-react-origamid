import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProtectedRouter from './Helper/ProtectedRouter';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { User } from './Pages/User/User';
import { UserStorage } from './UserContext';
import Photo from './Components/Photo/Photo';
import UserPhofile from './Pages/User/UserPhofile';
import NotFound from './Helper/NotFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRouter>
                  <User />
                </ProtectedRouter>
              }
            />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserPhofile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
