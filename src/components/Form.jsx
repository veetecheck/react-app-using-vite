import { useState } from "react"

function Form({handleSubmit}) {
    const [form, setForm] = useState({ text: "", headline: ""}) 

    const handleChange = (e) => {
        const source = e.target.id;
        switch(source){
            case "headline": setForm({...form, headline: e.target.value}); break
            case "text": setForm({...form, text: e.target.value}); break
            default: break
        }
    }

    return (
        <>
            <label htmlFor="headline">Nadpis</label>
            <input type="text" name="headline" id="headline" className="form-control" value={form.headline}  onChange={(e) => {handleChange(e)}}/>
            <label htmlFor="text">Text</label>
            <textarea className="form-control" name="text" id="text" onChange={(e) => {handleChange(e)}} value={form.text}/>
            <div className="my-2">
                <button className="btn btn-success" onClick={() => handleSubmit(form)}>Submit</button>
            </div>

        </>)
}

export default Form