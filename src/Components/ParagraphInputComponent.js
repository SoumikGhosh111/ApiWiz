import React, { useState, useEffect } from 'react';
import "./styles.css";

function ParagraphInputComponent() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);

  useEffect(() => {
    let characters = input.trim().split(" ").join("").split("").length;
    let words = input.trim().split(/\s+/).filter(word => word !== '').length;
    let sentences = input.split(/[.!?]+/).filter(sentence => sentence.trim() !== '').length;
    let paragraphs = input.split(/\n\s*\n/).filter(paragraph => paragraph.trim() !== '').length;
    let spaces = (input.match(/\s+/g) || []).length
    let punctuations = input.split('').filter(char => /[.,\/#!$%\^&\*;:{}=\-_`~()]/.test(char)).length


    setOutput({
      characters: characters,
      words: words,
      sentences: sentences,
      paragraphs: paragraphs,
      spaces: spaces,
      punctuations: punctuations
    })


    console.log(words);
  }, [input]);

  return (
    <div className='paragraph-input-wrapper'>
      <textarea rows={8} placeholder='Type or copy/paste your content here' value={input} onChange={(e) => setInput(e.target.value)}></textarea>

      <table id='paragraph-input-table'>
        <thead>
          <tr>
            <th>
              Characters
            </th>
            <th>
              Words
            </th>
            <th>
              Sentences
            </th>
            <th>
              Paragraph
            </th>
            <th>
              Spaces
            </th>
            <th>
              Punctuations
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{output !== null ? output.characters:0}</td>
            <td>{output !== null ? output.words:0}</td>

            <td>{output !== null ? output.sentences : 0}</td>
            <td>{output !== null ? output.paragraphs : 0}</td>

            <td>{output !== null ? output.spaces:0}</td>
            <td>{output !== null ? output.punctuations : 0}</td>

          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ParagraphInputComponent