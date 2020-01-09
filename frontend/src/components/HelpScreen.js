import React from 'react'

const HelpScreen = () => {

  return (
    <div className='instructions'>
      <h2>How to play:</h2>
      <div>
        Press the red button to earn points.
        Pressing button costs 1 point and you get points
        depending on how many times the button has been clicked.
      </div>
      <p>If you reach 0 points you lose!</p>
      <ul>
        <li>250 points every 500th click</li>
        <li>40 points every 100th click</li>
        <li>5 points every 10th click</li>
      </ul>
    </div>
  )

}

export default HelpScreen