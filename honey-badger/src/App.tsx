import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import hexaBee from './assets/hexaBee.svg'
import { gameSetup } from './setup/grid';
import type { CellInfo } from './setup/grid';
import CellsGrid from './CellsGrid';

import './App.css'
import Header from './Header'
import VictoryCard from './VictoryCard'
import ConfettiCard from './ConfettiCard'
import DoubleClickButton from './DoubleClickButton'

function App() {
  const [count, setCount] = useState(0);
  const row = 15;
  const col = 15;
  const [game, beePlacement] = gameSetup(row,col);
  const [cells, setCells] = useState<Map<number, CellInfo>>(game);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [numBees, setNumBees] = useState(beePlacement.length);


  interface CellClickEvent extends React.MouseEvent<HTMLButtonElement> {
    target: HTMLButtonElement & { value: string };
  }


  // Object.entries(cells) DOES NOT WORK!
  // const Cells = [...cells].map(([key, value]) => {
  //   const item = `Item ${key} ${JSON.stringify(value)}`;
  //   return (<Cell cellInfo={value}/>)
  // })


  return (
    <>
      {gameWon && 
        <div>
          <ConfettiCard/> 
          <VictoryCard setGameWon={setGameWon} />
        </div>
      }
      <section id="center">
        <div className="hero">
          <Header />
        </div>
        <h2>Bees: {numBees}</h2>
        <CellsGrid 
          cells={cells} 
          row={row} 
          col={col} 
          setCell={setCells} 
          setGameOver={setGameOver}
          setGameWon={setGameWon}
          setNumBees={setNumBees}
        />
        {gameOver && <div className="gameOver">Game Over!</div>}
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
  )
}

export default App
