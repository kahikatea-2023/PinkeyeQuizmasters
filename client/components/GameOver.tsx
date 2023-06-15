import React from 'react'

interface GameOverProps {
  restartGame: () => void
}

function GameOver({ restartGame }: GameOverProps) {
  const playAgain = () => {
    restartGame()
  }

  return (
    <div>
      <div>
        <img className="game-over" src="/images/gameOver.gif" alt="Game Over" />
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default GameOver
