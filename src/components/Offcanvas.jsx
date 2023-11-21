import { Paginador } from "./Paginador";

export function OffCanvas () {

    return (
        <div>
             <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        Ver galeria
      </a>

      <div className="offcanvas w-50 offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="text-truncate">
           Esto es una galeria con diferentes gatitos con la que se utiliza un paginador para ir mostrando de poco a poco las imagenes
          </div>
        <Paginador />
        </div>
      </div>
        </div>
    )
}