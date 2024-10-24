import { useState } from "react"

function FirstComponent({part, title, id}) {
    const [componentCount, setComponentCount] = useState(0);
    if(part !== id) return null

    return (
        <>
            <h1>{title}</h1>
            <p>
                Predany parametr part: {part}
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, est. Odit iste dolor esse,
                deserunt distinctio iusto earum nulla ab consequatur officia sint non odio aliquam explicabo pariatur soluta perferendis.
                Nisi totam, ipsa a, harum ipsum voluptatem quae mollitia aliquam ad maxime laborum tempora nihil expedita, rem reiciendis
                hic quaerat aperiam earum exercitationem officia deleniti ullam odit sapiente. Vero, doloribus?
            </p>
            <button className="btn btn-secondary" onClick={() => setComponentCount(componentCount => componentCount + 1)}>component count is {componentCount}</button>
        </>
    )
}

export default FirstComponent