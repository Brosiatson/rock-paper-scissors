import { useContextIsNull } from "../contexts/Context"
import '../css/Picking.css'

export const Picking: React.FC = () => {
    const context = useContextIsNull()

    const rock = require('../img/rock.png')
    const paper = require('../img/paper.png')
    const scissors = require('../img/scissors.png')

    const {
        score: {setScore},
        isPicked: {setIsPicked},
        playerPick: {setPlayerPick},
        botPick: {setBotPick},
        result: {setResult}
    } = context

    const botPicking = () => {
        const table = ["ROCK", "PAPER", "SCISSORS"]
        const randomNumber = Math.floor(Math.random() * 3)

        return table[randomNumber]
    }

    const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        setPlayerPick(e.currentTarget.id)

        const botPickingResult = botPicking()
        setBotPick(botPickingResult)
        const attachedPicks = e.currentTarget.id + botPickingResult

        function setWinner() {
            if(e.currentTarget.id === botPickingResult) {return 0}

            switch(attachedPicks) {
                case "ROCKSCISSORS": return 1
                case "ROCKPAPER": return -1

                case "PAPERROCK": return 1
                case "PAPERSCISSORS": return -1

                case "SCISSORSPAPER": return 1
                case "SCISSORSROCK": return -1
            }

            return 0
        }

        const setWinnerResult = setWinner() 

        setResult(setWinnerResult)
        setScore(value => value + setWinnerResult)

        setIsPicked(value => !value)
    }

    return (
        <main id="main-picking">
            <button id="ROCK" onClick={(e) => handleButton(e)}>
                <div>
                    <img src={rock} alt="rock"></img>
                </div>
            </button>
            <button id="PAPER" onClick={(e) => handleButton(e)}>
                <div>
                    <img src={paper} alt="paper"></img>
                </div>
            </button>
            <button id="SCISSORS" onClick={(e) => handleButton(e)}>
                <div>
                    <img src={scissors} alt="scissors"></img>
                </div>
            </button>
        </main>
    )
}