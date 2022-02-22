import {useState} from 'react'
import { getAlphabet } from './helpers'
const MessageBasic = ()=>{
 
   
    const [message, setMessage] = useState('')

    const handleClicked = (char) => {
        setMessage(message + char)
    }

    
    const renderKeyboard = ()=>{
        
        let alp = getAlphabet()
        
        let jsx = alp.map(char=>{
            return  <button key={char} onClick={()=> handleClicked(char)}>{char}</button>
        })

        console.log('jsx var here: about to return it', jsx)
        return jsx
    }

    return (
       <div>
           <p>{message}</p>
           {renderKeyboard()}
       </div> 
    )
}

export default MessageBasic