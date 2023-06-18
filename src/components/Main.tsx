import { useContextIsNull } from "../contexts/Context"
import { Picking } from "./Picking"
import { Result } from "./Result"

export const Main: React.FC = () => {
    const context = useContextIsNull()

    const {isPicked: {isPicked}} = context 

    return (
        <>
            {isPicked ? <Result /> : <Picking />}
        </>
    )
}