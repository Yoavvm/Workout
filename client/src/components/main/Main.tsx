import React from 'react'
import { JsxElement } from 'typescript'
import '../styles.css';

type Props = {
    children: JSX.Element
}

const Main = (props: Props) => {
  return (
    <div className='container'>
        {props.children}
    </div>
  )
}

export default Main