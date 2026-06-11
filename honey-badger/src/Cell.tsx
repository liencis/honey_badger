import hexa from "./assets/hexa.svg";
import hexaHoney from "./assets/hexaHoney.svg";
import hexaBee from "./assets/hexaBee.svg";
import hexa1 from "./assets/hexa1.svg";
import hexa2 from "./assets/hexa2.svg";
import hexa3 from "./assets/hexa3.svg";
import hexa4 from "./assets/hexa4.svg";
import hexa5 from "./assets/hexa5.svg";
import hexa6 from "./assets/hexa6.svg";
import beeMarked from "./assets/beeMarked.svg";

import './App.css'
import { openAllCells, openCell, checkWin } from './setup/grid';
import type { CellInfo } from "./setup/grid";
import { type Dispatch, type SetStateAction } from "react";

interface CellProps {
    cellInfo: CellInfo,
    setCell: Dispatch<SetStateAction<Map<number, CellInfo>>>,
    setGameOver: Dispatch<SetStateAction<boolean>>,
    setGameWon: Dispatch<SetStateAction<boolean>>,
}

function Cell({ cellInfo, setCell, setGameOver, setGameWon }: CellProps) {

    const handleClick = () => {
        if (cellInfo.open === false) {
            if (cellInfo.bee) {
                setCell((prevCells) => {
                    const allOpenCells = openAllCells(prevCells);
                    return new Map(allOpenCells);
                });
                setGameOver(true);
            } else if (cellInfo.value === 0) {
                setCell((prevCells) => {
                    const newCells = new Map(prevCells);
                    openCell(Number(cellInfo.number), newCells);
                    checkWin(newCells) && setGameWon(true);
                    return newCells;
                });
            } else {
                setCell((prevCells) => {
                    const newCells = new Map(prevCells);
                    newCells.set(Number(cellInfo.number), { ...cellInfo, open: true });
                    checkWin(newCells) && setGameWon(true);
                    return newCells;
                });
            };
        };
    };
    
    return(
        <div className="cell" id={`${cellInfo.number}`} 
            onClick={handleClick} 
        >
            { cellInfo.open ? 
                cellInfo.bee ? <img src={hexaBee} id={`${cellInfo.number}`} className="hexaBee" alt="One honey Bee open" width="80" height="70"/> :
                cellInfo.value === 0 ? <img src={hexaHoney} id={`${cellInfo.number}`} className="hexaHoney" alt="One honey cell open" width="80" height="70"/> :
                cellInfo.value === 1 ? <img src={hexa1} id={`${cellInfo.number}`} className="hexa1" alt="One honey cell open" width="80" height="70"/> :
                cellInfo.value === 2 ? <img src={hexa2} id={`${cellInfo.number}`} className="hexa2" alt="One honey cell open" width="80" height="70"/> :
                cellInfo.value === 3 ? <img src={hexa3} id={`${cellInfo.number}`} className="hexa3" alt="One honey cell open" width="80" height="70"/> :
                cellInfo.value === 4 ? <img src={hexa4} id={`${cellInfo.number}`} className="hexa4" alt="One honey cell open" width="80" height="70"/> :
                cellInfo.value === 5 ? <img src={hexa5} id={`${cellInfo.number}`} className="hexa5" alt="One honey cell open" width="80" height="70"/> :
                cellInfo.value === 6 ? <img src={hexa6} id={`${cellInfo.number}`} className="hexa6" alt="One honey cell open" width="80" height="70"/> :
                <img src={hexa} id={`${cellInfo.number}`} className="hexa" alt="One honey cell closed" width="80" height="70"/> :
            // Not open cell
            <img src={cellInfo.beeMarked ? beeMarked : hexa} id={`${cellInfo.number}`} className="hexa" alt="One honey cell closed" width="80" height="70"/>
            }
        </div>
    );
}

export default Cell;