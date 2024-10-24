function ThirdComponent({ text, handleText }) {
    return (
        <div className='my-3'>
            <div>
                <label className="" htmlFor="text">Third component text input</label>
            </div>
            <div>
                <input type="text" value={text} name="text" id="text" className="form-control" onChange={handleText} />
            </div>
        </div>
    )
}
export default ThirdComponent