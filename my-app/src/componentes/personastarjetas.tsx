import React from 'react'

export default function PersonaComponent(props:any) {
    return (
        <div>
            <h3>
            Nombre: {props.nombre}
            Ocupación: {props.ocupación}
            País: {props.país}
            </h3>
        </div>
    )
}
