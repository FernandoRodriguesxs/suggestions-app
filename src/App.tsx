import { useEffect, useState } from 'react'

interface Advice {
  slip: {
    id: string
    advice: string
  }
}

export const App = () => {
  // eslint-disable-next-line no-empty-pattern
  const [data, setData] = useState<Advice>({
    slip: {
      id: '', // setando estado inicial com string vazia
      advice: '', // setando estado inicial com string vazia
    },
  })

  const fetchAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <>
      <h1>{data.slip.id}</h1>
      <h2>{data.slip.advice}</h2>
      <button onClick={fetchAdvice}>Get Advice</button>
    </>
  )
}

export default App
