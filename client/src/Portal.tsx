import React, { useEffect } from 'react'
import ReactDom from 'react-dom'
import './components/styles.css'


type Props = {
    children: JSX.Element,
    open: boolean,
    onClose: any
}


export const Portal = ({ children, open, onClose }: Props) => {

    const portal = document.querySelector("#portal") as HTMLElement

    useEffect(() => {

    }, [open, children])


    if (!open) return null



    return ReactDom.createPortal(
        <div>
            <div className='modal-background' onClick={() => onClose()}></div>
            <div className='modal-content'>{children}</div>
        </div>, portal
    )
}
