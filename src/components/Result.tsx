import { useEffect } from 'react'
import { useContextIsNull } from "../contexts/Context"
import '../css/Result.css'

export const Result: React.FC = () => {
    const context = useContextIsNull()

    const {
        isPicked: {setIsPicked},
        playerPick: {playerPick},
        botPick: {botPick},
        result: {result},
    } = context

    const handleButton = () => {
        setIsPicked(value => !value)
    }

    return (
        <main id='main-result'>
            <h2>{result === 1 ? "GAME WON" : result === 0 ? "GAME DRAW" : result === -1 ? "GAME LOST" : ""}</h2>
            <div>
                <h2>You Picked: {playerPick}</h2>
                <h2>Opponent Picked: {botPick}</h2>
            </div>
            <button onClick={handleButton}>PLAY AGAIN</button>
        </main>
    )
}