import hexa from "./assets/hexa.svg";
import './App.css'

function Cell() {
    return(
        <div className="cell">
            <img src={hexa} className="hexa" alt="One honey cell" width="80" height="70"/>
        </div>
    );
}

export default Cell;