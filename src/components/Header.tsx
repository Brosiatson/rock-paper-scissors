import { useContextIsNull } from "../contexts/Context"
import '../css/Header.css'

export const Header: React.FC = () => {
    const context = useContextIsNull()

    const {score: {score}} = context
    
    return (
        <>
            <header>
                <div className="div-title">
                    <h2>ROCK</h2>
                    <h2>PAPER</h2>
                    <h2>SCISSORS</h2>
                </div>
                <div className="div-score">
                    <h2>SCORE</h2>
                    <span>{score}</span>
                </div>
            </header>
        </>
    )
}