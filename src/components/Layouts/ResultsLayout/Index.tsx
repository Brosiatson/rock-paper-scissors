import { useNavigate } from "react-router-dom"
import { useContextIsNull } from "../../../contexts/Context"
import { Header } from "../../Other/Header/Header"
import { PickDisplay } from "../../Other/PickDisplay/Index"

export const ResultsLayout: React.FC = () => {
    const {playerPick: {playerPick}, botPick: {botPick}, result: {result}} = useContextIsNull()

    const navigate = useNavigate()

    const handleButton = () => {
        navigate("../")
    }

    return (
        <>
            <Header />
            <main className="results">
                <div className="results__pick">
                    <h2 className="results__pick--text">You Picked</h2>
                    <PickDisplay pick={playerPick.toLowerCase()}/>
                </div>
                <div className="results__info">
                    <h2 className="results__info--text">You {result === -1 ? "Lose" : result === 0 ? "Draw" : "Win"}</h2>
                    <button className="results__info--button" onClick={handleButton}>PLAY AGAIN</button>
                </div>
                <div className="results__pick">
                    <h2 className="results__pick--text">Bot Picked</h2>
                    <PickDisplay pick={botPick.toLowerCase()}/>
                </div>
            </main>
        </>
    )
}
