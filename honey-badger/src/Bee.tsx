import bee from "./assets/bee.svg";

interface BeeProps {
    id: string,
    style: React.CSSProperties,
}

const Bee = ({id, style}: BeeProps) => {
    return (
        <img src={bee} id={id} style={style} className="gameEndBee" alt="One honey cell closed" width="60" height="50"/>
    )
}

export default Bee;