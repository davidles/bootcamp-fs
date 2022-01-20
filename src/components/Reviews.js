import React, { useState } from 'react'
import { Statistics } from './Statistics';

export const Reviews = () => {
    /*

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h2>Give feedback</h2>

            <button onClick={() => setBad( bad + 1)}>bad</button>
            <button onClick={() => setNeutral( neutral + 1)}>neutral</button>
            <button onClick={() => setGood( good + 1)}>good</button>

            <h3>Statistics</h3>
            <p>Good : {good}</p>
            <p>Neutral : {neutral}</p>
            <p>Bad : {bad}</p>

        </div>
  ) */


    const [reviews, updateReviews] = useState([])

    const handleNeutral = () => updateReviews([...reviews, "neutral"])
    const handleGood = () => updateReviews([...reviews, "good"])
    const handleBad = () => updateReviews([...reviews, "bad"])

    return(
        <div>
             <h2>Give feedback</h2>

             <button onClick={handleBad}>bad</button>
             <button onClick={handleNeutral}>neutral</button>
             <button onClick={handleGood}>good</button>

             <h3>Statistics</h3>
             
             {
                 reviews.length > 0 ?
                 <Statistics arr={reviews} />
                  : "No feedback given"
             }
         </div>
    )


};
