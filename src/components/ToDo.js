import React from 'react';

const ToDo = ({ text, complete, remove, done }) => (
    <>
        <li>
            <span style={{ textDecoration: done ? 'line-through' : 'none' }}>
                {text}
            </span>
            <button onClick={remove}>Remove</button>
            <input type="checkbox" value="Done" onChange={complete} />
        </li>
    </>
);

export default ToDo;
