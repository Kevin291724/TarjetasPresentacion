import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Persona } from './modelos/personas';
import './App.css'
import PersonaComponent from './componentes/personastarjetas';

function App() {
  let listaPersona : Persona[] = [];

  listaPersona.push({
    nombre:'Kevin',
    Ocupación:'Camarografo',
    País: 'Honduras' 
  },
  {
    nombre:'Kevin',
    Ocupación:'Camarografo',
    País: 'Honduras'
  })


  return (
    <>
      <PersonaComponent nombre={listaPersona[1].nombre} ocupación={listaPersona[1].Ocupación} país={listaPersona[1].País}></PersonaComponent>      
    </>
  )
}

export default App
