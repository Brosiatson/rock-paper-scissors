type contextValuesType = {
    score: {
        score: number
        setScore: React.Dispatch<React.SetStateAction<number>>
    }
    playerPick: {
        playerPick: string
        setPlayerPick: React.Dispatch<React.SetStateAction<string>>
    }
    botPick: {
        botPick: string
        setBotPick: React.Dispatch<React.SetStateAction<string>>
    }
    result: {
        result: -1 | 0 | 1
        setResult: React.Dispatch<React.SetStateAction<-1 | 0 | 1>>
    }
}

export type {contextValuesType}