import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import HomePage from "./views/HomePage.js";
import LoginPage from "./views/LoginPage.js";
// import AuthLoading from './views/AuthLoading';
import { Provider } from "react-redux";
// import ProtectedRoute from './views/ProtectedRoute'; 
// import BookingHistory from './views/BookingHistory';
import store  from "./redux/store";  
 
function App() {
  return (
    <Provider store={store}>
          <BrowserRouter >
            <Switch>
              {/* <ProtectedRoute exact component={BookingHistory} path="/bookings" permit={"rider,admin,driver"} /> */}
                <Route path="/" component={LoginPage} />
                {/* <Route path="/" component={HomePage} /> */}
            </Switch>
          </BrowserRouter>
    </Provider>
  );
}

export default App;