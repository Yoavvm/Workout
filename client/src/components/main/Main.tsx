import React from 'react'
import '../styles.css';

type Props = {
    children: JSX.Element
}

const Main = (props: Props) => {
  return (
    <div className='main-container'>
        {props.children}
    </div>
  )
}

export default Main