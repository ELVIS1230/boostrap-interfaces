import { useState } from "react";

export function ToastComponent() {
    const [showToast, setShowToast] = useState(true);

    const handleButtonClick = () => {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000); // Oculta el toast después de 3 segundos
    };

    return (
        <div className="position-fixed bottom-0 end-0 p-3">
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleButtonClick}
            >
                Mostrar Toast
            </button>

                <div aria-live="polite" aria-atomic="true" style={{position: 'relative', 'min-height': '100p'}}>
                <div style={{ position: 'absolute', bottom: '20px', right: 0 }}>

                        <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header">
                                <strong className="me-auto">Bootstrap Toast</strong>
                                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                            <div className="toast-body">
                                ¡Este es un toast de Bootstrap creado en HTML!
                            </div>
                        </div>

                    </div>
                </div>
            {/* {showToast && (
                //   <h1>Ahora</h1>
            )} */}
        </div>
    );
}

