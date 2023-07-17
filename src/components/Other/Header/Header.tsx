import { useContextIsNull } from "../../../contexts/Context"

export const Header: React.FC = () => {
    const context = useContextIsNull()

    const {score: {score}} = context
    
    return (
        <>
            <header className="header">
                <section className="header__title">
                    <h2 className="header__title--text">ROCK</h2>
                    <h2 className="header__title--text">PAPER</h2>
                    <h2 className="header__title--text">SCISSORS</h2>
                </section>
                <section className="header__score">
                    <h2 className="header__score--text">SCORE</h2>
                    <span className="header__score--number">{score}</span>
                </section>
            </header>
        </>
    )
}