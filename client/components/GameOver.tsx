interface GameOverProps {
  restartGame: () => void
}

function GameOver({ restartGame }: GameOverProps) {
  const playAgain = () => {
    restartGame()
  }

  return (
    <div>
      <div className="game-over-section">
        <img className="game-over" src="/images/gameOver.gif" alt="Game Over" />
        <button className="play-again" onClick={playAgain}>
          Play Again
        </button>
      </div>

      <div className="buttons">
        <button className="left">True</button>
        <button className="right">False</button>
      </div>
    </div>
  )
}

export default GameOver
