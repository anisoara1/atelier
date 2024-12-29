import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/Homepage";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import { store } from "./store";
import { NavBar } from "./components/NavBar";
import DailyMenu from "./components/DailyMenu";
import DailyList from "./components/DailyList";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/atelier" element={<HomePage />} />{" "}
            {/* Homepage route */}
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <AdminPage />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<DailyMenu />} />
            <Route path="/dailylist" element={<DailyList />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
