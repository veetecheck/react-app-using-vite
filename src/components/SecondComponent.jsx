import { useState } from 'react'

function SecondComponent() {
    const [text, setText] = useState("")
    return (
    <div className='my-3'>
        <div>
            <label className="" htmlFor="text">Second component text input</label>
        </div>
        <div>
            <input value={text} type="text" name="text" id="text" className="form-control" onChange={(e) => setText(e.target.value)}/>
        </div>
        <p>
            Text from the second component: {text}
        </p>
    </div>
    )
}

export default SecondComponent