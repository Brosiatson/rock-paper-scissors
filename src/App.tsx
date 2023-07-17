import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Context } from './contexts/Context'
import { contextValuesType } from './types/types'
import { router } from './routers/Router'
import "./scss/App.scss"

function App() {
  const [score, setScore] = useState<number>(0)
  const [playerPick, setPlayerPick] = useState<string>("")
  const [botPick, setBotPick] = useState<string>("")
  const [result, setResult] = useState<-1 | 0 | 1>(0)

  const contextValues: contextValuesType = {
    score: {
      score: score,
      setScore: setScore,
    },
    playerPick: {
      playerPick: playerPick,
      setPlayerPick: setPlayerPick,
    },
    botPick: {
      botPick: botPick,
      setBotPick: setBotPick,
    },
    result: {
      result: result,
      setResult: setResult,
    },
  }

  return (
    <Context.Provider value={contextValues}>
      <RouterProvider router={router} />
    </Context.Provider>
  )
}

export default App;
