import React, { useState } from "react";
import styled from 'styled-components';
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

const StyledParentDiv = styled.div`
    padding: 0 30px 0 15px;
`

const StyledInput = styled.input`
    width: 100%;
    display: block;
    margin: 10px 0;
    padding: 10px 15px;
    border-radius: 6px;
    border: 0;
`
const StyledChangeButton = styled.button`
    padding: 5px 15px;
    border-radius: 6px;
    border: 0;
    background-color: #8ea9c4;
    width: 70%;
`

const StyledTextSpan = styled.span`
    color: white;
    font-weight: bold;
`

const StyledIconBtnDiv = styled.div`
    color: white;
    font-size: 45px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const InteractiveColumn = (props) => {
    const [videoId, setVideoId] = useState('')

    return (
        <StyledParentDiv>
            <StyledIconBtnDiv>
                <FaThumbsUp onClick={() => alert("thumbs up clicked")} />
                <FaThumbsDown onClick={() => alert("thumbs down clicked")} />
            </StyledIconBtnDiv>
            <StyledTextSpan>Video ID</StyledTextSpan>
            <StyledInput onChange={(e) => setVideoId(e.target.value)} />
            <StyledChangeButton onClick={() => props.onButtonPress(videoId)}>
                Change
            </StyledChangeButton>
        </StyledParentDiv>
    )
};

export default InteractiveColumn;