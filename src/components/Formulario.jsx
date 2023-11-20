import { useState } from "react"

export function Formulario({agregarGatos}) {
    // const [contadorState, setContador ] = useState(1)
    const [nuevoDato, setNuevoDato] = useState({
        // id: contadorState,
        nombre: '',
        edad: '',
        raza: ''
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setNuevoDato((prevDatos) => ({
            ...prevDatos,
            [name]:value
        }))
    }
    const handle =  (e) => {
        e.preventDefault()
        agregarGatos(nuevoDato)
        setNuevoDato({
            // id: contadorState +1 ,
            nombre: '',
            edad: '',
            raza: ''
        })
        // setContador((prevID) => prevID +1)
    }
    
    return (
        <div>
            <form className="row g-3 needs-validation  " noValidate onSubmit={handle}>
                <div className="d-flex justify-content-around ">
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">Nombre</label>
                    <input type="text" name='nombre' value={nuevoDato.nombre} onChange={handleChange} className="form-control text-ligth" id="validationCustom01" required 
                    // placeholder="Placeholder Input"
                    style={{background: 'transparent', color:'white'}}/>
                    <div className="valid-feedback">
                        ¡Se ve bien!
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">Edad: </label>
                    <input type="number" value={nuevoDato.edad} name='edad' onChange={handleChange} className="form-control" id="validationCustom05" required
                    style={{background: 'transparent', color:'white'}} />
                    <div className="invalid-feedback">
                        Proporcione un código postal válido.
                    </div>
                </div>
                </div>
               
      <div className="d-flex  justify-content-center">

                <div className="col-md-6 ">
                    <label htmlFor="validationCustom03" className="form-label">Raza</label>
                    <select name='raza' value={nuevoDato.raza} onChange={handleChange} className="form-select" id="validationCustom03" required 
                    >
                        <option selected disabled value="">Elegir...</option>
                        <option>Pichincha</option>
                        <option>Azuay</option>
                        <option>Bolivar</option>

                    </select>
                    <div className="invalid-feedback">
                        seleccione una provincia
                    </div>
                </div>
      </div>


       
                <div className="col-12">
                    <button className="btn btn-primary" type="submit" data-bs-dismiss="modal">Enviar</button>
                </div>
            </form>
        </div>
    )
}