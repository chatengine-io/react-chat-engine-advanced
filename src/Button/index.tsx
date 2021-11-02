import React, { HTMLAttributes, ReactNode } from "react";

export interface Props extends HTMLAttributes<HTMLButtonElement>{
    children: ReactNode;

    type: 'primary' | 'secondary';
}

export const Button = ({children,  type}: Props) => {
    return (
        <button className={type}>
            {children}
        </button>
    )
}