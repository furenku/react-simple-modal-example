import React from 'react';

import styles from './Modal.module.scss';

const Modal = ({ children, onCloseModal }) => {
    return (
        <div className={styles.Modal}>
            <div className={styles.overlay}/>

            <div className={styles.window}>
                
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
        </div>
    )
}

export default Modal;