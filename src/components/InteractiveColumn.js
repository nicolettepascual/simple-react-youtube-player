import React, { useState } from "react";
import styled from 'styled-components';

const StyledParentDiv = styled.div`
    padding: 0 30px 0 15px;
`

const StyledInput = styled.input`
    width: 100%;
    display: block;
    margin: 10px 0;
    padding: 10px 15px;
    border-radius: 6px;
`
const StyledChangeButton = styled.button`
    padding: 5px 15px;
    border-radius: 6px;
    border: 0;
    background-color: #8ea9c4;
`

const StyledTextSpan = styled.span`
    color: white;
`

const InteractiveColumn = (props) => {
    const [videoId, setVideoId] = useState('')

    return (
        <StyledParentDiv>
            <StyledTextSpan>Video ID</StyledTextSpan>
            <StyledInput onChange={(e) => setVideoId(e.target.value)}/>
            <StyledChangeButton onClick={() => props.onButtonPress(videoId)}>
                Change
            </StyledChangeButton>
        </StyledParentDiv>
    )
};

export default InteractiveColumn;