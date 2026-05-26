import hexa from "./assets/hexa.svg";
import hexaHoney from "./assets/hexaHoney.svg";

import './App.css'
import type { CellInfo } from "./setup/grid";
import type { Dispatch, SetStateAction } from "react";

interface CellProps {
    cellInfo: CellInfo
    setCell: Dispatch<SetStateAction<Map<number, CellInfo>>>
}

function Cell({ cellInfo, setCell }: CellProps) {

    const handleClick = () => {
        setCell((prevCells) => {
            const newCells = new Map(prevCells);
            newCells.set(Number(cellInfo.number), { ...cellInfo, open: true });
            return newCells;
        });
    };

    return(
        <div onClick={handleClick}>
        <div className="cell">
            { cellInfo.open ? 
                <img src={hexaHoney} className="hexaHoney" alt="One honey cell open" width="80" height="70"/> 
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