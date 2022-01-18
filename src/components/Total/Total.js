import React from 'react'

export const Total = ({totalExercises}) => {
    
    const totales = totalExercises.reduce((a, b) => ({exercises: a.exercises + b.exercises}))
        
    return (
        <div>
            <p>El numero total de ejercicios es de: {totales.exercises}</p>
        </div>
    )
}
