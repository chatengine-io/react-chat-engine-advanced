import React, { HTMLAttributes, ReactNode } from "react";
import CSS from 'csstype';


export interface Props extends HTMLAttributes<HTMLButtonElement>{
    children: string | ReactNode;
    type?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    color?: string,
    style?: CSS.Properties
}

export const Button = ({children = '',  type = 'secondary',  size = 'medium'}: Props) => {
    let backgroundColor = 'grey';
    switch(type) {
        case 'primary': 
            backgroundColor = 'blue'; break;
        case 'danger':
             backgroundColor = 'red'; break;
    }

    let padding = '4px';
    switch(size) {
        case 'small': 
            padding = '2px'; break;
        case 'large':
            padding = '8px'; break;
    }

    return (
        <button
            className={`ce-button-${type}`}
            style={{
                padding,
                backgroundColor
            }}
        >
            {children}
        </button>
    )
}