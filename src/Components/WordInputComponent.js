import React, { useState } from 'react'
import "./styles.css";

function WordInputComponent() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);

  const handleProcess = (input) => {
    const characters = input.trim().split(" ").join("").split("").length; 
    const words = input.split(" ").length; 
    setOutput({
      characters: characters,
      words: words
    });
  }

  console.log(output);
  return (
    <div className='word-input-wrapper'>
      <div className='input-field'>
        <input placeholder='Type a word' value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => handleProcess(input)}> Process Word</button>
      </div>
      <table id='word-input-table'>
        <thead>
          <tr>
            <th>
              Characters
            </th>
            <th>
              Words
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{output !== null ? output.characters : 0}</td>
            <td>{output !== null ? output.words : 0}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default WordInputComponent; 