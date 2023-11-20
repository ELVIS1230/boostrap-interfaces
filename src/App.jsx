import { useState } from 'react'
import './App.css'
import { Modal } from './components/Modal'
import { Table } from './components/table'

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
    // console.log(gatosState.length)
    setGatos([...gatosState, gatoAgregado])
  }
  const eliminarGatos = (indexGato) => {
    const nuevosDatos = [...gatosState]
    nuevosDatos.splice(indexGato, 1)
    setGatos(nuevosDatos)
  }



  return (

    <div className='border border-primary'>
      <div className='w-50 mx-auto d-flex p-2 justify-content-around'>
        <h2 className='text-white '>Registro de gatitos</h2>
        <Modal agregarGatos={agregarGatos} />
      </div>
      <Table gatos={gatosState} eliminar={eliminarGatos} />




      <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        Ver galeria
      </a>

      <div className="offcanvas w-50 offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
          </div>
          <div className="dropdown mt-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Dropdown button
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
