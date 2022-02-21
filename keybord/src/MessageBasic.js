import {useState} from 'react'
const MessageBasic = ()=>{
 
    const [message, setMessage] = useState('')
    const handleClicked = (char) => {
        console.log(`${char} clicked`)
        setMessage(message + char)
    }
    const renderAlphabet = ()=> {
      let alp = ['a','b','c']
      alp.map(char=>{
        return <p key={char}>{char}</p>
      })
      return jsx
    }
    return (
       <div>
           <h1>MessageBasic</h1>
           <p>{message}</p>
           <button onClick={()=> handleClicked('a')}>a</button>
           <button onClick={()=> handleClicked('b')}>b</button>
           <button onClick={()=> handleClicked('c')}>c</button>
           <button onClick={()=> handleClicked('d')}>d</button>
           <button onClick={()=> handleClicked('e')}>e</button>
          {renderAlphabet()}
       </div> 
    )
}

export default MessageBasic