import { useState } from 'react';
import './css/App.css';
import { Header } from './components/Header';
import { Context } from './contexts/Context';
import { contextValuesType } from './types/types';
import { Main } from './components/Main';

function App() {
  const [score, setScore] = useState<number>(0)
  const [isPicked, setIsPicked] = useState<boolean>(false)
  const [playerPick, setPlayerPick] = useState<string>("")
  const [botPick, setBotPick] = useState<string>("")
  const [result, setResult] = useState<-1 | 0 | 1>(0)
  const [counter, setCounter] = useState<number>(0)

  const contextValues: contextValuesType = {
    score: {
      score: score,
      setScore: setScore,
    },
    isPicked: {
      isPicked: isPicked,
      setIsPicked: setIsPicked,
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
    counter: {
      counter: counter,
      setCounter: setCounter,
    },
  }

  return (
    <Context.Provider value={contextValues}>
      <Header />
      <Main />
    </Context.Provider>
  )
}

export default App;
