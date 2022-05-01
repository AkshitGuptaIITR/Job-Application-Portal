import React from 'react'
import style from "./Card.module.css"

const Card = (props) => {
  return (
    <div key={props.key} className={style.structure} style={props.style} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default Card