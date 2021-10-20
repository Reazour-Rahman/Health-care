
import './App.css';
import { BrowserRouter, Switch,Route  } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Banner from './pages/Home/Home/Banner/Banner';
import Login from './pages/Authentication/Login/Login'
import Gender from './pages/Home/Home/Gender/Gender';
import Services from './pages/Home/Home/Services/Services';
import Footer from './pages/Shared/Footer/Footer';
import Specialist from './pages/Home/Home/Specialist/Specialist';
import Home from './pages/Home/Home/Home';
import Register from './pages/Authentication/Register/Register';
import AuthProvider from './context/AuthProvider';
import ServiceDetails from './pages/Home/Home/Services/ServiceDetails/ServiceDetails';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import NoResult from './pages/Home/NoResult/NoResult';
import About from './pages/Home/About/About';
import Contact from './pages/Home/Contact/Contact';
import Branches from './pages/Branches/Branches';

function App() {
  return (
    <div className="">
      
      <AuthProvider>
        <BrowserRouter>
        <Header></Header>
        <Switch>

            <Route exact path="/">
              <Banner></Banner>
              <Gender></Gender>
              <Services></Services>
              <Specialist></Specialist>
            </Route>

            <Route  path="/home">
              <Home></Home>
            </Route>

            <Route  path="/about">
              <About></About>
            </Route>

            <PrivateRoute  path="/contact">
              <Contact></Contact>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/branches">
              <Branches></Branches>
            </PrivateRoute>
            
            <PrivateRoute path="/details/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <Route exact path="*">
              <NoResult></NoResult>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
