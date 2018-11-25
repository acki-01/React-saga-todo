import React from 'react';
import styled from 'styled-components';

const StyledToDo = styled.li`
    display: flex;
    width: 100%;
    padding: 8px 0px;
    justify-content: space-around;
    list-style: none;
    font-size: 24px;
    line-height: 20px;
    border-bottom: 2px solid black;
    color: darkturquoise;
`;

const StyledButton = styled.button`
    width: 70px;
    height: 24px;
    background: white;
    border-radius: 50px;
    color: mediumaquamarine;
    font-weight: bold;

    :disabled {
        background: lightgrey;
        color: white;
    }
`;

const StyledSpan = styled.span`
    display: inline-block;
    overflow: hidden;
    width: 70%;
    max-width: 150px;
    text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
`;

const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30%;
`;

const ToDo = ({ text, complete, remove, done }) => {
    const buttonLabel = done ? 'Undone' : 'Done';
    return (
        <StyledToDo>
            <StyledSpan
                style={{ textDecoration: done ? 'line-through' : 'none' }}
            >
                {text}
            </StyledSpan>
            <StyledButtonContainer>
                <StyledButton onClick={complete}>{buttonLabel}</StyledButton>
                <StyledButton onClick={remove}>Remove</StyledButton>
            </StyledButtonContainer>
        </StyledToDo>
    );
};

export default ToDo;
