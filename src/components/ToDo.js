import React from 'react';

const ToDo = ({ text, complete, remove }) => (
    <>
        <li>
            {text}
            <button onClick={remove}>Remove</button>
            <input type="checkbox" value="Done" onChange={complete} />
        </li>
    </>
);

export default ToDo;
