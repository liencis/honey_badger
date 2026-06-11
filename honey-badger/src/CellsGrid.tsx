import Cell from "./Cell";
import type { CellInfo } from "./setup/grid";
import './App.css';
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { v4 as uuid } from "uuid";
import bee from "./assets/bee.svg";

interface CellsGridProps {
    cells: Map<number, CellInfo>,
    row: number,
    col: number,
    setCell: Dispatch<SetStateAction<Map<number, CellInfo>>>,
    setGameOver: Dispatch<SetStateAction<boolean>>,
    setGameWon: Dispatch<SetStateAction<boolean>>,
    setNumBees: Dispatch<SetStateAction<number>>,
}

function CellsGrid ({cells, row, col, setCell, setGameOver, setGameWon, setNumBees}: CellsGridProps) {
    const rowArray = Array.from({length: row}, (_, i) => i); // Array.from({length: row}, (_, i) => i + 1)
    const colArray = Array.from({length: col}, (_, i) => i);
    let numCellsPlaced = 0;

    const [visible, setVisible] = useState(false);
    const [points, setPoints] = useState({ x: 0, y: 0 });
    const [cellNumber, setCellNumber] = useState(0);

    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredUnmark, setIsHoveredUnmark] = useState(false);

    // Close the custom menu when clicking outside of it
    useEffect(() => {
        const handleClick = () => setVisible(false);
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault(); // Prevent default behavior (e.g., context menu on right-click)
        setPoints({ x: e.clientX, y: e.clientY }); // get click coordinates
        setCellNumber(Number(e.target["id"]));
        setVisible(true); // show custom menu
    }

    const markBee = () => {
        let cellInfo = cells.get(cellNumber);
        if (cellInfo) {
            if (cellInfo.open === false) {
                cellInfo.beeMarked = true;
                setNumBees((prevNum) => {
                    if (prevNum > 0) {
                    return prevNum - 1;
                    }
                    return 0;
                });
            }
        }   
        setCell((prevCells) => {
            const newCells = new Map(prevCells);
            newCells.set(Number(cellNumber), cellInfo);
            return newCells;
        });

        setVisible(false);
    }

    const unmarkBee = () => {
        let cellInfo = cells.get(cellNumber);
        if (cellInfo) {
            if (cellInfo.open === false && cellInfo.beeMarked === true) {
                cellInfo.beeMarked = false;
                setNumBees((prevNum) => prevNum + 1);
            }
        }
        setCell((prevCells) => {
            const newCells = new Map(prevCells);
            newCells.set(Number(cellNumber), cellInfo);
            return newCells;
        });
        setVisible(false);
    }

    const liStyle = {
        padding: "1px",
        ...(isHovered ? { 
            backgroundColor: "#f6edc9",
            borderRadius: "5px",
        } : {}),
    }

    const liStyleUnmark = {
        padding: "1px",
        ...(isHoveredUnmark ? { 
            backgroundColor: "#f6edc9",
            borderRadius: "5px",
        } : {}),
    }

    return ( 
        <div onContextMenu={handleRightClick}>
            <p>Cell Number: {cellNumber}</p>
            {/* right clickik */}
            {visible && (
                <ul className="custom-menu" 
                    style={{ 
                        top: points.y, 
                        left: points.x,
                        zIndex: 1000,
                        position: "absolute",
                        textAlign: "center",
                        backgroundColor: "#fff",
                        border: "1px solid #ccc",
                        listStyle: "none",
                        padding: "10px",
                        margin: 0,
                        boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
                    }}
                >
                    <li onClick={() => {markBee();}}
                        style={liStyle}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        Mark:
                        <img src={bee} alt="Bee" width="30" height="30"/>
                    </li>
                    <hr/>
                    <li onClick={() => {unmarkBee();}}
                        style={liStyleUnmark}
                        onMouseEnter={() => setIsHoveredUnmark(true)}
                        onMouseLeave={() => setIsHoveredUnmark(false)}
                    >Unmark Bee</li>
                </ul>
            )}
        {
        rowArray.map((r) => {
            const className = Number(r) % 2 === 0 ? "evenRow" : "oddRow";
            return (
            <ul key={Number(r)} className={className}>
                {
                colArray.map((c) => {
                    if (className === "evenRow") {
                        if (Number(c) % 2 === 0) {
                            return <li className="cellLi" key={uuid()}></li>
                        } else {
                            numCellsPlaced += 1;
                            return <li 
                                key={numCellsPlaced} 
                                value={numCellsPlaced}
                                className="cellLi"
                                id={`${numCellsPlaced}`}
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
                                id={`${numCellsPlaced}`}
                                >
                                    <Cell 
                                        cellInfo={cells.get(numCellsPlaced)} 
                                        setCell={setCell} 
                                        setGameOver={setGameOver} 
                                        setGameWon={setGameWon}
                                    />
                                </li>
                        } else {
                            return <li className="cellLi" key={uuid()}></li>
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