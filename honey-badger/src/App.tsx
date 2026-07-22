import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useDeferredValue,
} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
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

function App() {
  const [gameLevel, setGameLevel] = useState(Level.easy);
  const [gameDimensions, setGameDimensions] = useState({ row: 15, col: 15 });
  const deferredDimensions = useDeferredValue(gameDimensions);
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

  interface CellClickEvent extends React.MouseEvent<HTMLButtonElement> {
    target: HTMLButtonElement & { value: string };
  }

  const startNewGame = () => {
    const [newGame, newBeePlacement] = gameSetup(
      gameDimensions.row,
      gameDimensions.col,
      gameLevel,
    );
    setCells(newGame);
    setNumBees(newBeePlacement.length);
    setGameOver(false);
    setGameWon(false);
  };

  useEffect(() => {
    startNewGame();
  }, [gameDimensions, gameLevel]);

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
      />
      {gameWon && (
        <div>
          <ConfettiCard />
          <VictoryCard setGameWon={setGameWon} />
        </div>
      )}
      {gameOver && (
        <div>
          <BeeAttack />
          <GameOverCard setGameOver={setGameOver} />
        </div>
      )}
      <section id="center">
        <div className="hero">
          <Header gameOver={gameOver} />
        </div>

        <div className="dataTablo">
          <ul className="dataTabloList">
            <li>Player: {"Player Name"}</li>
            <li>Bees: {numBees}</li>
            <li>Score: {score}</li>
          </ul>
        </div>
        <CellsGrid
          cells={cells}
          row={deferredDimensions.row}
          col={deferredDimensions.col}
          setCell={setCells}
          setGameOver={setGameOver}
          setGameWon={setGameWon}
          setNumBees={setNumBees}
        />
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
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
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
