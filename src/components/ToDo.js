import React from 'react';

const ToDo = ({ text, complete, remove, done }) => (
    <>
        <li>
            <span style={{ textDecoration: done ? 'line-through' : 'none' }}>
                {text}
            </span>
            <button onClick={remove}>Remove</button>
            <label htmlFor="isDone">Done: </label>
            <input
                type="checkbox"
                value="Done"
                id="isDone"
                onChange={complete}
            />
        </li>
    </>
);

export default ToDo;
