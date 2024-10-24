import { useEffect, useState, useRef } from 'react'
import FirstComponent from "./components/FirstComponent"
import ComponentContainer from "./components/ComponentContainer"
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'

function App() {
  const [count, setCount] = useState(0)
  const [part, setPart] = useState(1)
  const [dye, setDye] = useState(false)
  const [text, setText] = useState("")
  const [arr, setArr] = useState([
    {
      id: 1,
      headline: "headline 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro mollitia a cum error modi cumque."
    },
    {
      id: 2,
      headline: "headline 2",
      text: "Lorem ipsum mollitia a cum error modi cumque."
    },
    {
      id: 3,
      headline: "headline 3",
      text: "Lorem ipsum consectetur adipisicing elit. Porro mollitia."
    }
  ])

  const handleCount = () => {
    setCount((count) => count + 1)
  }

  const handleDelete = (idToDel) => {
    const temp = [...arr]
    setArr(temp.filter((item) => item.id !== idToDel))
  }

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log("Render " + renderCount.current);
  });

  return (

    <ComponentContainer>
      <h1 className="display-5 text-center my-5">React playground</h1>
      <div className='row my-3'>
        <div className='col-md-6 col-sm-12 d-flex justify-content-center'>
          <button className="btn btn-warning" onClick={() => setPart(1)}>Show part one</button>
        </div>
        <div className='col-md-6 col-sm-12 d-flex justify-content-center'>
          <button className="btn btn-warning" onClick={() => setPart(2)}>Show part two</button>
        </div>
      </div>
      <hr />
      <div className='row my-3'>
        <div className="col-md-6 col-sm-12">
          <button className="btn btn-primary" onClick={handleCount}>
            Counter
          </button>
        </div>
        <div className="col-md-6 col-sm-12">
          <p>
            Count from App is <strong>{count}</strong>
          </p>
        </div>
      </div>
      <hr />
      <p className={dye ? "text-danger my-3" : "my-3"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repudiandae non fugit ut nostrum quas quis
        doloribus incidunt velit consequatur inventore. Molestias eum veritatis quam ipsam nostrum cumque, repellat
        officiis est quod voluptate. Iure unde sunt quas distinctio incidunt ratione necessitatibus, enim amet odio
        assumenda id explicabo consequatur nam vitae.
      </p>
      <button className='btn btn-danger' onClick={() => setDye(!dye)}>Dye text</button>
      <hr />
      <FirstComponent part={part} title="Viditelna prvni cast" id={1} />
      <FirstComponent part={part} title="Viditelna druha cast" id={2} />
      <hr />
      <SecondComponent />
      <SecondComponent />
      <hr />
      <ThirdComponent text={text} handleText={(e) => setText(e.target.value)} />
      <hr />
      <p>Text from the third component: {text}</p>
      <hr />
      {arr.map((item)=> {return(
        <div key={item.id}>
          <h2>{item.headline}</h2>
          <p>{item.text}</p>
          <button className='btn btn-outline-info' onClick={() => handleDelete(item.id)}>Delete item {item.id}</button>
        </div>
      )})}
    </ComponentContainer>
  )
}

export default App
