import Quiz from './Quiz'
import GameOver from './GameOver'

function App() {
  return (
    <>
      <h1>?True or False?</h1>
      <Quiz />
    </>
  )
}

export default App

// example of App.tsx so that the GameOver component works

// import React, { useState } from 'react';
// import GameOver from './GameOver';
// import Questions from './Questions';

// function App() {
//   const [isGameOver, setIsGameOver] = useState(false);

//   const handleGameOver = () => {
//     setIsGameOver(true);
//   };

//   const handleRestartGame = () => {                          <----------- // updates the states
//     setIsGameOver(false);
//   };

//   return (
//     <>
//       <h1>True or False?</h1>
//       {isGameOver ? (
//         <GameOver restartGame={handleRestartGame} />                           <-------- // this allows the pages to switch over when the Game is Over//
//       ) : (
//         <Questions restartGame={handleRestartGame} />
//       )}
//     </>
//   );
// }

// export default App;
