import Bee from "./Bee";
import "./App.css";

function BeeAttack() {
    const attack = () => {
        let animationDelay = "0s";
        let arr = new Array(15).fill(0);
        return arr.map((_, i) => {
            // start speed her
            animationDelay = `${(Math.random()*2).toFixed(2)}s`;
            const style = {
                animationDelay
            }
            return (<Bee key={i} id={String(i)} style={style}/>)
        })
    }
    return (
        <div className="BeeAttack" >
            {attack()}
        </div>
    )
}

export default BeeAttack;