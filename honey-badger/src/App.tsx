import { useState, useEffect } from "react";
import { gameSetup, Level } from "./setup/grid";
import type { CellInfo } from "./setup/grid";
import CellsGrid from "./CellsGrid";

import "./App.css";
import Header from "./Header";
import VictoryCard from "./VictoryCard";
import ConfettiCard from "./ConfettiCard";
import GameOverCard from "./GameOverCard";
import BeeAttack from "./BeeAttack";
import Navbar from "./Navbar";
import Slideshow from "./Slideshow";

function App() {
  const [gameLevel, setGameLevel] = useState(Level.easy);
  const [row, setRow] = useState(15);
  const [col, setCol] = useState(15);
  const [gameDimensions, setGameDimensions] = useState({ row: 15, col: 15 });
  const [game, beePlacement] = gameSetup(
    gameDimensions.row,
    gameDimensions.col,
    gameLevel,
  );
  const [cells, setCells] = useState<Map<number, CellInfo>>(game);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [numBees, setNumBees] = useState(beePlacement.length);
  const [score, setScore] = useState(0);
  const [navbarExpand, setNavbarExpand] = useState(false);
  const [slideshow, setSlideshow] = useState(false);

  const startNewGame = () => {
    const [newGame, newBeePlacement] = gameSetup(row, col, gameLevel);
    setCells(newGame);
    setNumBees(newBeePlacement.length);
    setGameOver(false);
    setGameWon(false);
  };

  useEffect(() => {
    startNewGame();
  }, [row, col, gameLevel]);

  useEffect(() => {
    if (gameWon === true) {
      setScore((prev) => {
        let numCells = cells.size;
        let multiply = 1;
        if (gameLevel === Level.easy) {
          multiply = 4;
        } else if (gameLevel === Level.normal) {
          multiply = 5;
        } else if (gameLevel === Level.hard) {
          multiply = 6;
        } else {
          multiply = 8;
        }
        return prev + numCells * multiply;
      });
    }
  }, [gameWon]);

  return (
    <>
      <Navbar
        onMouseEnter={() => setNavbarExpand(true)}
        onMouseLeave={() => setNavbarExpand(false)}
        navbarExpand={navbarExpand}
        setGameLevel={setGameLevel}
        gameLevel={gameLevel}
        setGameDimensions={setGameDimensions}
        gameDimensions={gameDimensions}
        setRow={setRow}
        setCol={setCol}
        row={row}
        col={col}
        setSlideshow={setSlideshow}
      />
      {gameWon && (
        <div>
          <ConfettiCard />
          <VictoryCard setGameWon={setGameWon} startNewGame={startNewGame} />
        </div>
      )}
      {gameOver && (
        <div>
          <BeeAttack />
          <GameOverCard setGameOver={setGameOver} startNewGame={startNewGame} />
        </div>
      )}
      {slideshow && <Slideshow setSlideshow={setSlideshow} />}
      <section id="center">
        <div className="hero" onClick={startNewGame}>
          <Header gameOver={gameOver} />
        </div>

        <div className="dataTablo">
          <ul className="dataTabloList">
            <li>Bees: {numBees}</li>
            <li>Score: {score}</li>
          </ul>
        </div>
        <CellsGrid
          cells={cells}
          row={row}
          col={col}
          setCell={setCells}
          setGameOver={setGameOver}
          setGameWon={setGameWon}
          setNumBees={setNumBees}
        />
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Honey Badger community</p>
          {/* <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
          </ul> */}
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
