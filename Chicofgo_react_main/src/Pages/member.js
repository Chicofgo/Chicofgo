import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MemberBar from './Account/components/MemberBar';
import Navbar from '../Layout/navbar/Navbar';

function Member() {
  return (
    <BrowserRouter>
      <Routes>
        <Navbar />
        <MemberBar />
        <Route path="" />
      </Routes>
    </BrowserRouter>
  );
}

export default Member;
