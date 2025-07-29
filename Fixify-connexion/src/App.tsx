"use client"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react"

import Login from "./login"
import SignUpPage from "./SignUp"

export default function App() {
  

  return (
    
    <BrowserRouter>
      <nav style={{ padding: "1rem" }}>
        <Link to="/login">Connexion</Link> | <Link to="/signup">Inscription</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}