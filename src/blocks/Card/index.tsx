import "./style.css";

interface CardProps {
    index: number;
}
export const Card = ({index}: CardProps) => {
  return (
    <div className="card">
        Card {index+1}
    </div>
  )
}
