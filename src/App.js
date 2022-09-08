import { useState } from 'react';
import './styles.css'

function App() {

  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(result.slice(0, -1))
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("Error");
    }
  }

  return (
    <>
      <div className="container">

        <form className="output">
          <input type="text" value={result} />
        </form>

        <div className='keypad'>

          <button className='highlight' onClick={clear} id="clear">AC</button>
          <button className='highlight' onClick={backspace} id="backspace">DEL</button>
          <button className='highlight' onClick={handleClick} name="/" >÷</button>
          <button onClick={handleClick} name="1" >1</button>
          <button onClick={handleClick} name="2" >2</button>
          <button onClick={handleClick} name="3" >3</button>
          <button className='highlight' onClick={handleClick} name="*" >*</button>
          <button onClick={handleClick} name="4" >4</button>
          <button onClick={handleClick} name="5" >5</button>
          <button onClick={handleClick} name="6" >6</button>
          <button className='highlight' onClick={handleClick} name="+" >+</button>
          <button onClick={handleClick} name="7" >7</button>
          <button onClick={handleClick} name="8" >8</button>
          <button onClick={handleClick} name="9" >9</button>
          <button className='highlight' onClick={handleClick} name="-" >-</button>
          <button onClick={handleClick} name="." >.</button>
          <button onClick={handleClick} name="0" >0</button>
          <button className='highlight' onClick={calculate} id="result" name="=" >=</button>

        </div>
      </div>
    </>
  )
}

export default App;
