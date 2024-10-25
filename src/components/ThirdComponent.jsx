function ThirdComponent({ text, handleText }) {
    return (
        <div className='my-3'>
            <label className="" htmlFor="text">Third component text input</label>
            <input type="text" value={text} name="text" id="text" className="form-control" onChange={handleText} />
        </div>
    )
}
export default ThirdComponent