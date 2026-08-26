import "./App.css";
import bee from "./assets/bee.svg";

interface GameOverCardProps {
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  startNewGame: () => void;
}

function GameOverCard({ setGameOver, startNewGame }: GameOverCardProps) {
  return (
    <div className="gameOverCard">
      <h2>Game over!</h2>
      <p>Bees are awaken!</p>
      <img src={bee} alt="Angry bee" width="60%" height="50%" />
      <div className="buttonContainer">
        <button type="button" onClick={startNewGame}>
          Play Again
        </button>
        <button
          type="button"
          onClick={() => {
            setGameOver(false);
          }}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}

export default GameOverCard;
