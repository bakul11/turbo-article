import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainHome from './Componets/Pages/MainHome/MainHome';
import Footer from './Componets/Shared/Footer/Footer';
import Navbar from './Componets/Shared/Navbar/Navbar';
import NoMatch from './Componets/Shared/NoMatch/NoMatch';
import ScrollToTop from './Componets/Shared/ScrollToTop/ScrollToTop';
import Login from './Componets/AuthUser/Login/Login';
import Register from './Componets/AuthUser/Register/Register';
import Pricing from './Componets/Pages/Pricing/Pricing';
import Blog from './Componets/Pages/Blog/Blog';
import RequireAuth from './Componets/RequireAuth/RequireAuth';
import BlogReadMore from './Componets/Pages/Blog/BlogReadMore';
import ReadRecent from './Componets/Pages/Blog/RecentPost/ReadRecent';
import BuyPack from './Componets/Payment/BuyPack/BuyPack';
import Dashboard from './Componets/Dashboard/Dashboard';
import AllUser from './Componets/Dashboard/AllUser/AllUser';
import MyPost from './Componets/Dashboard/MyPost/MyPost';
import AllPost from './Componets/Dashboard/AllPost/AllPost';
import PostArticle from './Componets/Dashboard/PostArticle/PostArticle';
import SubcribeUser from './Componets/Dashboard/SubcribeUser/SubcribeUser';
import Premium from './Componets/Pages/Premium/Premium';

import AboutUs from './Componets/Pages/AboutUs/AboutUs';
import Profile from './Componets/Pages/Profile/Profile';
import EditProfile from './Componets/Pages/Profile/EditProfile/EditProfile';
import WriteNowButton from './Componets/Pages/MainHome/WriteNowButton/WriteNowButton';
import PaidUser from './Componets/Dashboard/PaidUser/PaidUser';




const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<MainHome />}></Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>

          {/* ======================Blog Start======================  */}

          <Route path='/writeArticle' element={
            <RequireAuth>
              <WriteNowButton />
            </RequireAuth>
          }></Route>

          <Route path='/blog' element={
            <RequireAuth>
              <Blog />
            </RequireAuth>
          }></Route>
          <Route path='/premium' element={
            <RequireAuth>
              <Premium />
            </RequireAuth>
          }></Route>

          <Route path='/readmore/:id' element={
            <RequireAuth>
              <BlogReadMore />
            </RequireAuth>
          }></Route>

          <Route path='/recent/:id' element={
            <RequireAuth>
              <ReadRecent />
            </RequireAuth>
          }></Route>

          {/* ======================Blog End======================  */}


          {/* ======================Payment Route Start======================  */}
          <Route path='/payment/:pack/:price' element={
            <RequireAuth>
              <BuyPack />
            </RequireAuth>
          }></Route>
          {/* ======================Payment Route End======================  */}


          {/* ======================DashBoard Start======================  */}
          <Route path='/dashboard' element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } >
            <Route index element={<PostArticle />}></Route>
            <Route path='alluser' element={<AllUser />}></Route>
            <Route path='mypost' element={<MyPost />}></Route>
            <Route path='allpost' element={<AllPost />}></Route>
            <Route path='subcribe' element={<SubcribeUser />}></Route>
            <Route path='paidUser' element={<PaidUser />}></Route>


          </Route>
          {/* ======================DashBoard End======================  */}

          {/* ======================User Profile Start======================  */}
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/editProfile' element={<EditProfile />}></Route>
          {/* ======================User Profile End======================  */}

          <Route path='*' element={<NoMatch />}></Route>

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;