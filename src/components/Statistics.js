import React from 'react';

export const Statistics = ({ arr }) => {



    const quantityGood = arr.filter(review => review === "good").length
    const quantityBad = arr.filter(review => review === "bad").length
    const quantityNeutral = arr.filter(review => review === "neutral").length

    const all = arr.length

    const percentPositive = quantityGood / arr.length * 100

    return (
        <>
            <p>Good : {quantityGood}</p>
            <p>Neutral : {quantityNeutral}</p>
            <p>Bad : {quantityBad}</p>

            <hr />

            <p>All: {all}</p>

            <p>Positive: {percentPositive.toFixed(2)}% </p>
        </>

    );
};

