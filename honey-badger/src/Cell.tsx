import hexa from "./assets/hexa.svg";
import hexaHoney from "./assets/hexaHoney.svg";
import hexaBee from "./assets/hexaBee.svg";
import hexa1 from "./assets/hexa1.svg";
import hexa2 from "./assets/hexa2.svg";
import hexa3 from "./assets/hexa3.svg";
import hexa4 from "./assets/hexa4.svg";
import hexa5 from "./assets/hexa5.svg";
import hexa6 from "./assets/hexa6.svg";

import './App.css'
import { openAllCells, openCell } from './setup/grid';
import type { CellInfo } from "./setup/grid";
import type { Dispatch, SetStateAction } from "react";

interface CellProps {
    cellInfo: CellInfo
    setCell: Dispatch<SetStateAction<Map<number, CellInfo>>>,
    setGameOver: Dispatch<SetStateAction<boolean>>
}

function Cell({ cellInfo, setCell, setGameOver }: CellProps) {

    const handleClick = () => {
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
                return newCells;
            });
        } else {
            setCell((prevCells) => {
                const newCells = new Map(prevCells);
                newCells.set(Number(cellInfo.number), { ...cellInfo, open: true });
                return newCells;
            });
        };
    };

    return(
        <div onClick={handleClick}>
        <div className="cell">
            { cellInfo.open ? 
                cellInfo.bee ? <img src={hexaBee} className="hexaBee" alt="One honey cell open" width="80" height="70"/> :
                cellInfo.value === 0 ? <img src={hexaHoney} className="hexaHoney" alt="One honey cell open" width="80" height="70"/> :
                cellInfo.value === 1 ? <img src={hexa1} className="hexa1" alt="One honey cell open" width="80" height="70"/> :
                cellInfo.value === 2 ? <img src={hexa2} className="hexa2" alt="One honey cell open" width="80" height="70"/> :
                cellInfo.value === 3 ? <img src={hexa3} className="hexa3" alt="One honey cell open" width="80" height="70"/> :
                cellInfo.value === 4 ? <img src={hexa4} className="hexa4" alt="One honey cell open" width="80" height="70"/> :
                cellInfo.value === 5 ? <img src={hexa5} className="hexa5" alt="One honey cell open" width="80" height="70"/> :
                cellInfo.value === 6 ? <img src={hexa6} className="hexa6" alt="One honey cell open" width="80" height="70"/> :
                <img src={hexa} className="hexa" alt="One honey cell closed" width="80" height="70"/>
                : <img src={hexa} className="hexa" alt="One honey cell" width="80" height="70"/>
            }
        </div>
            {/* <div className="cellInfo">
                <p>num:{cellInfo.number}</p>
                <p>val:{cellInfo.value}</p>
                <p>{cellInfo.neighbors}</p>
                <p>{cellInfo.open ? "Open" : "Closed"}</p>
            </div> */}
        </div>
    );
}

export default Cell;