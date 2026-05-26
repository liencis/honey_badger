import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import hexaBee from './assets/hexaBee.svg'
import Cell from './Cell'
import { gameSetup } from './setup/grid';
import type { CellInfo } from './setup/grid';
import CellsGrid from './CellsGrid';

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const row = 6;
  const col = 6;
  const game = gameSetup(row,col);
  const [cells, setCells] = useState<Map<number, CellInfo>>(game);

  interface CellClickEvent extends React.MouseEvent<HTMLButtonElement> {
    target: HTMLButtonElement & { value: string };
  } 

  const handleOpenCell = (info: CellInfo): void => {

    console.log("Cell number clicked:", info);
    if (info) {
      info.open = true;
      const newMap = new Map(cells);
      newMap.set(Number(info.number), info);
      setCells(newMap);
    }
  }


  // Object.entries(cells) DOES NOT WORK!
  // const Cells = [...cells].map(([key, value]) => {
  //   const item = `Item ${key} ${JSON.stringify(value)}`;
  //   return (<Cell cellInfo={value}/>)
  // })

  // useEffect(() => {
  //   try {
  //     const game = gameSetup(row,col);
  //     setCells(game);
  //     return game.clear();
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }, [])

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={hexaBee} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <ul>
          <li value={0}>
            <div
            className="counter"
            onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </div>
          </li>
          <li value={1}>
            <div
            className="counter"
            onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </div>
          </li>
          <li value={2}>
            <div
            className="counter"
            onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </div>
          </li>
        </ul>
        <p>PPP {JSON.stringify(cells.get(1))}</p>
        <CellsGrid cells={cells} row={row} col={col} setCell={setCells}/>
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
