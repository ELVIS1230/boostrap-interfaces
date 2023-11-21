import { useState } from 'react'
import './App.css'
import { Modal } from './components/Modal'
import { Table } from './components/table'
import { Paginador } from './components/Paginador'
import { OffCanvas } from './components/Offcanvas'

function App() {
  const gatitos = [
    { id: 1, nombre: 'Franchezco', raza: 'Egipcio', edad: 52 },
    { id: 2, nombre: 'Jose', raza: 'Egipcio', edad: 2 },
    { id: 3, nombre: 'Manchas', raza: 'Amarillo', edad: 5 },
    { id: 4, nombre: 'Bombita', raza: 'Celestial', edad: 4 },
    { id: 5, nombre: 'Destructor', raza: 'Aniquiliado', edad: 7 },
  ]
  const [gatosState, setGatos] = useState(gatitos)


  const agregarGatos = (nuevoGato) => {
    const gatoAgregado = { ...nuevoGato, id: gatosState.length + 1 }
    setGatos([...gatosState, gatoAgregado])
  }
  const eliminarGatos = (indexGato) => {
    const nuevosDatos = [...gatosState]
    nuevosDatos.splice(indexGato, 1)
    setGatos(nuevosDatos)
  }



  return (
    <div className=''>
      <div className='w-50 mx-auto d-flex p-2 justify-content-around'>
      <OffCanvas />
        <h2 className='text-white '>Registro de gatitos</h2>
        <Modal agregarGatos={agregarGatos} />
      </div>
      <Table gatos={gatosState} eliminar={eliminarGatos} />
    </div>
  )
}

export default App
