import { useState, useEffect, useCallback } from 'react'
import DiceButton from './DiceButton'

import dividerMobile from './assets/images/pattern-divider-mobile.svg'
import dividerDesktop from './assets/images/pattern-divider-desktop.svg'
import './App.css'

function App() {

  const [adviceState, setAdviceState] = useState({ advice: "", id: "" })

  const fetchAdvice = useCallback( async () => {
      const response = await fetch("https://api.adviceslip.com/advice");
      const json = await response.json();
      const { id, advice } = json.slip;

      console.log(json)

      setAdviceState({ id, advice })
    }, []);


  useEffect(() => {
    fetchAdvice() 
  }, [fetchAdvice])

  return (
    <section>
      <article className='advice-box'>
        <div className="container">
          <h2>{`Advice #${adviceState.id}`}</h2>
          <h1>{`"${adviceState.advice}"`}</h1>
          <img className="divider divider__mobile" src={dividerMobile} alt="Divider" />
          <img className="divider divider__desktop" src={dividerDesktop} alt="Divider" />
        </div>
        <DiceButton handleClick={fetchAdvice}/>
      </article>

    </section>
  )
}

export default App
