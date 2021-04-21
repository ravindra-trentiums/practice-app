import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// import HomePage from "./views/HomePage.js";
import LoginPage from "./views/LoginPage.js";
import RegisterPage from "./views/RegisterPage.js";
// import AuthLoading from './views/AuthLoading';
import { Provider } from "react-redux";
// import ProtectedRoute from './views/ProtectedRoute'; 
// import BookingHistory from './views/BookingHistory';
import Footer from "./containers/footer"
import Header from "./containers/header"
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <Header />
        <Switch>
          {/* <ProtectedRoute exact component={BookingHistory} path="/bookings" permit={"rider,admin,driver"} /> */}
          {/* <Route path="/" component={LoginPage} /> */}
          <Route path="/register" component={RegisterPage} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;