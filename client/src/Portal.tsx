import React, { useEffect } from 'react'
import ReactDom from 'react-dom'
import { JsxElement } from 'typescript'

type Props = {
    children: any,
    open: boolean,
    onClose: any
}


export const Portal = ({ children, open, onClose }: Props) => {

    const portal = document.querySelector("#portal") as HTMLElement

    useEffect(() => {

    }, [open, children])


    if (!open) return null



    return ReactDom.createPortal(
        <div onClick={() => onClose()}>
            {children}
        </div>, portal
    )
}
