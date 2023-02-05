import React, { useState } from "react";
import "./App.css";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { LoginContext } from "./components/contexts/LoginContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <LoginContext.Provider
          value={{ username, setUsername, setShowProfile }}
        >
          {showProfile ? <Home /> : <Login />}
        </LoginContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
