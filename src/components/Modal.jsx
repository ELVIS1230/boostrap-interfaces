import { Formulario } from "./formulario";

export function Modal({agregarGatos}){

    return(
        <>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Registrar
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog " >
          <div className="modal-content text-light border border-light" style={{background: '#23242a'}}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Registra al gatito</h1>
              <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Formulario agregarGatos = {agregarGatos}/>
            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>
        </>
    )
}