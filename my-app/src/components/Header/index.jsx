import React, { useState } from 'react'
import Todo from '../Todo'

function Header() {
    const [inpValue, setInpValue] = useState("")
    const [submit, setSubmit] = useState("")

    return (
        <>
            <div className="todoCont">
                <form action="">
                    <input type="text" onChange={(e) => { setInpValue(e.target.value) }} value={inpValue}
                    />
                    <button onSubmit={(e) => { setSubmit(e.target.value) }}>Create</button>
                </form>
                <ul>
                    <Todo text={inpValue}></Todo>
                </ul>
            </div>
        </>
    )
}

export default Header