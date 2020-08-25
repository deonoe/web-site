import React from 'react';
import '../styles/App.css';
import Carreira from './Carreira';
import Cursos from './Cursos';
import Consultoria from './Consultoria';

function MainPage() {
  return (
    <div>
      <Carreira />
      <Cursos />
      <Consultoria />
    </div>
  );
}

export default MainPage;
