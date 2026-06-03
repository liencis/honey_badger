import Cell from "./Cell";
import type { CellInfo } from "./setup/grid";
import './App.css';
import type { Dispatch, SetStateAction } from "react";

interface CellsGridProps {
    cells: Map<number, CellInfo>,
    row: number,
    col: number,
    setCell: Dispatch<SetStateAction<Map<number, CellInfo>>>,
    setGameOver: Dispatch<SetStateAction<boolean>>,
    setGameWon: Dispatch<SetStateAction<boolean>>,
}

function CellsGrid ({cells, row, col, setCell, setGameOver, setGameWon}: CellsGridProps) {
    const rowArray = Array.from({length: row}, (_, i) => i); // Array.from({length: row}, (_, i) => i + 1)
    const colArray = Array.from({length: col}, (_, i) => i);
    let numCellsPlaced = 0;

    return ( 
        <div>
        {
        rowArray.map((r) => {
            const className = Number(r) % 2 === 0 ? "evenRow" : "oddRow";
            return (
            <ul key={Number(r)} className={className}>
                {
                colArray.map((c) => {
                    if (className === "evenRow") {
                        if (Number(c) % 2 === 0) {
                            return <li className="cellLi"></li>
                        } else {
                            numCellsPlaced += 1;
                            return <li 
                                key={numCellsPlaced} 
                                value={numCellsPlaced}
                                className="cellLi"
                                >
                                    <Cell 
                                        cellInfo={cells.get(numCellsPlaced)} 
                                        setCell={setCell} 
                                        setGameOver={setGameOver} 
                                        setGameWon={setGameWon}
                                    />
                                </li>
                        }
                    } else {
                        if (Number(c) % 2 === 0) {
                            numCellsPlaced += 1;
                            return <li 
                                key={numCellsPlaced}
                                value={numCellsPlaced}
                                className="cellLi"
                                >
                                    <Cell 
                                        cellInfo={cells.get(numCellsPlaced)} 
                                        setCell={setCell} 
                                        setGameOver={setGameOver} 
                                        setGameWon={setGameWon}
                                    />
                                </li>
                        } else {
                            return <li className="cellLi"></li>
                        }
                    }
                })
                }
            </ul>);
        })
        }
        </div>
    );
}

export default CellsGrid;