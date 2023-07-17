import { useNavigate } from "react-router-dom" 
import { Header } from "../../Other/Header/Header"
import { PickDisplay } from "../../Other/PickDisplay/Index"
import { useContextIsNull } from "../../../contexts/Context"

export const HomepageLayout: React.FC = () => {
    const {score: {setScore}, playerPick: {setPlayerPick}, botPick: {setBotPick}, result: {setResult}} = useContextIsNull()

    const navigate = useNavigate()

    const botPicking = () => {
        const table = ["ROCK", "PAPER", "SCISSORS"]
        const randomNumber = Math.floor(Math.random() * 3)

        return table[randomNumber]
    }

    const handleButton = (playerPick: string) => {
        const botPick = botPicking()

        setResult(0)
        setPlayerPick(playerPick)
        setBotPick(botPick)

        const attachedPicks = playerPick + botPick

        switch(attachedPicks) {
            case "ROCKSCISSORS": setScore(value => value + 1); setResult(1); break
            case "ROCKPAPER": setScore(value => value - 1); setResult(-1); break

            case "PAPERROCK": setScore(value => value + 1); setResult(1); break
            case "PAPERSCISSORS": setScore(value => value - 1); setResult(-1); break

            case "SCISSORSPAPER": setScore(value => value + 1); setResult(1); break
            case "SCISSORSROCK": setScore(value => value - 1); setResult(-1); break
        }

        navigate("results")
    }

    return (
        <>
            <Header />
            <main className="homepage">
                <h2 className="homepage__info">PICK YOUR OPTION</h2>
                <section className="homepage__buttons">
                    <button className="homepage__buttons--element" onClick={() => handleButton("ROCK")}><PickDisplay pick="rock" /></button>
                    <button className="homepage__buttons--element" onClick={() => handleButton("PAPER")}><PickDisplay pick="paper"/></button>
                    <button className="homepage__buttons--element" onClick={() => handleButton("SCISSORS")}><PickDisplay pick="scissors"/></button>
                </section>
            </main>
        </>
    )

} 