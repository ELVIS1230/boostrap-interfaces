import "../App.css";
import { ToastComponent } from "./Toast";

export function Table({ gatos , eliminar}) {
  // console.log(gatos)

  return (
    <div className="container mt-4">
      <table className="table--showColors table mt-3 table-dark border border-primary table-borderless table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Raza</th>
            <th>Edad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {gatos.map((gato) => (
            <tr key={gato.id}>
              <td>{gato.id}</td>
              <td>{gato.nombre}</td>
              <td>{gato.raza} </td>
              <td>{gato.edad}</td>
              <td>
            <ToastComponent eliminar={eliminar} />
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
