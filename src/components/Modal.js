import React from 'react'
import Unirse from './Unirse'

export const Modal = ({children, isOpen, closeModal}) => {
  return (
    <>
    <div className={`moda ${isOpen&&"is-open"}`}>
        <div className='modal-container'>
            <button className='btn modal-close' onClick={closeModal}>Volver</button>
            <Unirse/>
        </div>
    </div>
    {children}
    </>
  )
}
