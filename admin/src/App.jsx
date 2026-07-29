import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";

import Orders from "./pages/Orders";
import List from "./pages/List";
import Add from "./pages/Add";

import "react-toastify/dist/ReactToastify.css";

export const backendUrl =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export const currency = "$";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") || ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        theme="dark"
      />

      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />

          <div className="border-t border-border">
            <div className="mx-auto flex max-w-container">
              <Sidebar />

              <main className="min-h-[calc(100vh-72px)] flex-1 px-6 py-8 lg:px-10 lg:py-10">
                <Routes>
                  <Route
                    path="/add"
                    element={<Add token={token} />}
                  />

                  <Route
                    path="/list"
                    element={<List token={token} />}
                  />

                  <Route
                    path="/orders"
                    element={<Orders token={token} />}
                  />
                </Routes>
              </main>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;