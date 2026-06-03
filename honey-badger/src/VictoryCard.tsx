import './App.css';
interface VictoryCardProps {
    setGameWon: React.Dispatch<React.SetStateAction<boolean>>;
}
    
function VictoryCard({ setGameWon }: VictoryCardProps) {
    return (
        <div className="victoryCard">
            <h2>Congratulations! You win!</h2>
            <p>You found all the honey without awakening any bees.</p>
            <button type="button" onClick={() => window.location.reload()}>Play Again</button>
            <button type="button" onClick={() => {
                setGameWon(false);
            }}>Dismiss</button>
        </div>
    );
}

export default VictoryCard;