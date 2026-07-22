import beeIcon from "./assets/beeIcon.svg";
import gridSizeIcon from "./assets/gridSizeIcon.svg";
import { Level } from "./setup/grid";

interface NavbarProps {
  navbarExpand: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  setGameLevel?: React.Dispatch<React.SetStateAction<number | typeof Level>>;
  gameLevel?: number | typeof Level;
  setGameDimensions?: React.Dispatch<
    React.SetStateAction<{ row: number; col: number }>
  >;
  gameDimensions?: { row: number; col: number };
}

function Navbar({
  navbarExpand,
  onMouseEnter,
  onMouseLeave,
  setGameLevel,
  gameLevel,
  setGameDimensions,
  gameDimensions,
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
        </div>
      )}
    </div>
  );
}

export default Navbar;
