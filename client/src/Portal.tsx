import React from 'react'
import { JsxElement } from 'typescript'

type Props = {
    children: JsxElement
}


export const Portal = ({children}: Props ) => {
  return (
    {children}
  )
}
