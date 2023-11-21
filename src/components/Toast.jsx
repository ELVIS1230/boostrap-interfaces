import { useState } from "react";

export function ToastComponent({eliminar}) {
    const [showToast, setShowToast] = useState(false);

    const handleButtonClick = () => {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000); // Oculta el toast después de 3 segundos
        eliminar()
    };

    return (
        <div>
        <button
                type="button"
                className="btn btn-secondary border border-primary"
                onClick={handleButtonClick}
            >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                  >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                </svg>
            </button>

        <div className="position-fixed bottom-0 end-0 p-3">
               
            {showToast && (
                <div aria-live="polite" aria-atomic="true" style={{position: 'relative', 'min-height': '100p'}}>
                <div style={{ position: 'absolute', bottom: '20px', right: 0 }}>

                        <div className="toast show border border-danger" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header">
                                <strong className="me-auto">Bootstrap Toast</strong>
                                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                            <div className="toast-body text-dark">
                                Se borro un registro
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
            </div>
    );
}

