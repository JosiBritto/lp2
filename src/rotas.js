import React from "react";

import ListagemAdministrador from './views/listagem-administrador';
import ListagemInicio from './views/listagem-inicio';
import ListagemQuartos from './views/listagem-quartos';

import { Route, Routes, BrowserRouter } from 'react-router-dom'; 
function Rotas(props) {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/listagem-inicio' element={<ListagemInicio />} />
         <Route path='/listagem-quartos' element={<ListagemQuartos />} />
         
         <Route path='/listagem-administrador' element={<ListagemAdministrador />} />
         
      </Routes>

    </BrowserRouter>
  );
}

export default Rotas;
