import React, {useState} from 'react'


const Keybord = (props) => {
    
    const [count, setCount] = useState(props.x)
    const add = ()=>{
      console.log('add clicked')
      setCount(count + 1)
    
    }
    const minus = ()=>{
        console.log('minus clicked')
        setCount(count - 1)
    }
    return (
        <div>
            <h1>{props.x} {props.title}</h1>
            
            <button onClick={add}>A</button>
            <button onClick={minus}>B</button>
            <button onClick={add}>C</button>
            <button onClick={()=> setCount(0)}>Back Space</button>
            {
                [<p key='1'>a</p>,<p>b</p>,]
            }
        </div>
    )
}

// in js you can have 1 default export
export default Keybord

// you can have many export
export const x = 'Michael'
export const y = ()=>{console.log('y func')}