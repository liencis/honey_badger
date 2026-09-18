interface WarningCardProps {
  setShowWarning: React.Dispatch<React.SetStateAction<boolean>>;
}

function WarningCard({ setShowWarning }: WarningCardProps) {
  return (
    <div className="warningCard">
      <div className="exitButtonContainer">
        <button
          type="button"
          className="exitButton"
          onClick={() => setShowWarning(false)}
        >
          ✕
        </button>
      </div>
      <h2>Warning!</h2>
      <p>You have marked more bees than there are in the game.</p>
    </div>
  );
}

export default WarningCard;
