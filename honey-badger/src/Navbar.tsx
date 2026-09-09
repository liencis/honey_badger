import beeIcon from "./assets/beeIcon.svg";
import gridSizeIcon from "./assets/gridSizeIcon.svg";
import howToIcon from "./assets/howToIcon.svg";
import { Level } from "./setup/grid";

interface NavbarProps {
  navbarExpand: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  setGameLevel: React.Dispatch<
    React.SetStateAction<(typeof Level)[keyof typeof Level]>
  >;
  gameLevel: (typeof Level)[keyof typeof Level];
  setGameDimensions?: React.Dispatch<
    React.SetStateAction<{ row: number; col: number }>
  >;
  gameDimensions?: { row: number; col: number };
  setRow: React.Dispatch<React.SetStateAction<number>>;
  setCol: React.Dispatch<React.SetStateAction<number>>;
  row: number;
  col: number;
  setSlideshow: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({
  navbarExpand,
  onMouseEnter,
  onMouseLeave,
  setGameLevel,
  gameLevel,
  setRow,
  setCol,
  row,
  col,
  setSlideshow,
}: NavbarProps) {
  return (
    <div
      className="navbarContainer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {navbarExpand ? (
        <div className="navbarWide">
          <div className="navbarItem">
            <div className="navbarItems">
              <img
                src={gridSizeIcon}
                width="40"
                height="40"
                alt="cell grid size"
              />
              <p>Grid Size</p>
            </div>
            <div className="navbarChoices">
              <div className="choice">
                <label htmlFor="row">
                  <input
                    type="range"
                    id="row"
                    name="gridSizeRow"
                    min="9"
                    max="31"
                    step="2"
                    value={row}
                    onChange={(e) => {
                      setRow(parseInt(e.target.value));
                    }}
                  />
                  rows: {row}
                </label>
              </div>
              <div className="choice">
                <label htmlFor="col">
                  <input
                    type="range"
                    id="col"
                    name="gridSizeCol"
                    min="5"
                    max="21"
                    step="2"
                    value={col}
                    onChange={(e) => {
                      setCol(parseInt(e.target.value));
                    }}
                  />
                  columns: {col}
                </label>
              </div>
            </div>
          </div>
          <div className="navbarItem">
            <div className="navbarItems">
              <img
                src={beeIcon}
                width="40"
                height="40"
                alt="difficulty level"
              />
              <p>Difficulty Level</p>
            </div>
            <div className="navbarChoices">
              <div className="choice">
                <label htmlFor="easy">
                  <input
                    type="radio"
                    id="easy"
                    name="difficulty"
                    value="easy"
                    checked={gameLevel === Level.easy}
                    onChange={() => setGameLevel(Level.easy)}
                  />
                  Easy 8:1
                </label>
              </div>
              <div className="choice">
                <label htmlFor="medium">
                  <input
                    type="radio"
                    id="medium"
                    name="difficulty"
                    value="medium"
                    checked={gameLevel === Level.normal}
                    onChange={() => setGameLevel(Level.normal)}
                  />
                  Medium 6:1
                </label>
              </div>
              <div className="choice">
                <label htmlFor="hard">
                  <input
                    type="radio"
                    id="hard"
                    name="difficulty"
                    value="hard"
                    checked={gameLevel === Level.hard}
                    onChange={() => setGameLevel(Level.hard)}
                  />
                  Hard 5:1
                </label>
              </div>
              <div className="choice">
                <label htmlFor="extreme">
                  <input
                    type="radio"
                    id="extreme"
                    name="difficulty"
                    value="extreme"
                    checked={gameLevel === Level.bad}
                    onChange={() => setGameLevel(Level.bad)}
                  />
                  Extreme 4:1
                </label>
              </div>
            </div>
          </div>
          <div className="navbarItem">
            <div className="navbarItems">
              <img src={howToIcon} width="40" height="40" alt="how to play" />
              <p>How to Play</p>
            </div>
            <div className="navbarChoices">
              <div className="choice">
                <label htmlFor="howToPlay">
                  <input
                    type="radio"
                    id="howToPlay"
                    name="howToPlay"
                    value="How to Play"
                    onChange={() => setSlideshow(true)}
                  />
                  Slideshow
                </label>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbarNarow">
          <div className="navbarItem">
            <div className="navbarItems">
              <img
                src={gridSizeIcon}
                width="40"
                height="40"
                alt="cell grid size"
              />
            </div>
          </div>

          <div className="navbarItem">
            <div className="navbarItems">
              <img
                src={beeIcon}
                width="40"
                height="40"
                alt="difficulty level"
              />
            </div>
          </div>
          <div className="navbarItem">
            <div className="navbarItems">
              <img src={howToIcon} width="40" height="40" alt="how to play" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
