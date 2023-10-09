import { useEffect, useState } from 'react'
import { AdviceSection, Wrapper } from './app.style'

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
      <Wrapper>
        <AdviceSection>
          <div className="advice-content">
            <h1>{data.slip.id}</h1>
            <h2>{data.slip.advice}</h2>
            <button onClick={fetchAdvice}>Get Advice</button>
          </div>
        </AdviceSection>
      </Wrapper>
    </>
  )
}

export default App
