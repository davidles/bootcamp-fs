import React from 'react'

export const Part = ({ parts }) => {

    
    return (
        <>
            {
                parts.map(part => {
                    const { name, exercises } = part

                    return(
                        <p key={exercises}>{name} {exercises} </p>
                    )
                })
            }

        </>




    )
}
