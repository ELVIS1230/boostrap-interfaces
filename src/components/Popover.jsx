import { useEffect } from "react";

export function PopoverExample({texto}) {
    useEffect(() => {
      // Activar el popover después de que se monte el componente
      const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'));
      popoverTriggerList.map(function (popoverTriggerEl) {
        return new window.bootstrap.Popover(popoverTriggerEl);
      });
    }, []);
  
    return (
      <div className="container ">
        <button type="button" className="btn btn-primary" data-toggle="popover" title={texto
        } data-content="Contenido del Popover">
          Ver mas..
        </button>
      </div>
    );
  }