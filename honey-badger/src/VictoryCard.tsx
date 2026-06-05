import './App.css';
import badgerCup from './assets/badgerCup.svg';
    
interface VictoryCardProps {
    setGameWon: React.Dispatch<React.SetStateAction<boolean>>;
}
    
function VictoryCard({ setGameWon }: VictoryCardProps) {
    return (
        <div className="victoryCard">
            <h2>Congratulations!</h2>
            <p>You found all the honey!</p>
            <img src={badgerCup} alt="Badger Cup" />
            <div className="buttonContainer">
                <button type="button" onClick={() => window.location.reload()}>Play Again</button>
                <button type="button" onClick={() => {
                    setGameWon(false);
                }}>Dismiss</button>
            </div>
        </div>
    );
}

export default VictoryCard;