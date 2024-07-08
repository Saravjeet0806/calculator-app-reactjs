import React, { useEffect, useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleCalulate = () => {
        try {
            setResult(eval(input));
        }
        catch (error) {
            setResult('Error');
        }
    };

    const handleKeyPress=(e)=>{
        const key=e.key;

        if((/\d/).test(key)){
            handleClick(key);
        }
        else if(key==='+' || key==='*' || key==='-' || key==='/'){
            handleClick(key);
        }
        else if(key==='Enter'){
            handleCalulate();
        }
        else if(key==='Escape' || key==='c' || key==='Backspace'){
            handleClear();
        }
        else if(key==='.'){
            handleClick(key);
        }
    };

    useEffect(()=>{
        window.addEventListener('keydown', handleKeyPress);
        return()=>{
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [input]);

    return (
        <div className="calculator">
            <div className="display">
                 <div className="input">{input}</div>
                 <div className="result">{result}</div>
                 </div>

                 <div className="buttons">
                    <button onClick={()=>handleClick('1')}>1</button>
                    <button onClick={()=>handleClick('2')}>2</button>
                    <button onClick={()=>handleClick('3')}>3</button>
                    <button onClick={()=>handleClick('+')}>+</button>
                    <button onClick={()=>handleClick('4')}>4</button>
                    <button onClick={()=>handleClick('5')}>5</button>
                    <button onClick={()=>handleClick('6')}>6</button>
                    <button onClick={()=>handleClick('-')}>-</button>
                    <button onClick={()=>handleClick('7')}>7</button>
                    <button onClick={()=>handleClick('8')}>8</button>
                    <button onClick={()=>handleClick('9')}>9</button>
                    <button onClick={()=>handleClick('*')}>*</button>
                    <button onClick={()=>handleClick('0')}>0</button>
                    <button onClick={()=>handleClick('.')}>.</button>
                    <button onClick={handleClear}>Clear</button>
                    <button onClick={()=>handleClick('/')}>/</button>
                    <button onClick={handleCalulate}>=</button>
                 </div>
        </div>
    );
};
export default Calculator;