import React from 'react';

import styles from './Modal.module.css';

const Modal = ({ children, onCloseModal }) => {
    return (
        <>
            <div className={styles.overlay}/>

            <div className={styles.Modal}>
                
                <header>
                    <button onClick={ () => onCloseModal() }>
                        Cerrar X
                    </button>
                </header>
                
                {/* un método posible para inyectar html: */}
                {/* <div className="content"
                dangerouslySetInnerHTML={ { __html: props.content} }
                > */}

                 
                <div className="content">   
                    {children}
                </div>
            </div>
        </>
    )
}

export default Modal;