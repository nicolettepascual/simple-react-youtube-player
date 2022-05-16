import React, { useState } from "react";

import styled, { keyframes } from 'styled-components';

import { fadeOutUp } from 'react-animations';
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
    float: right;
    margin-right: 10px;
`

const StyledTextSpan = styled.span`
    color: white;
    font-weight: bold;
`

const StyledIconBtnDiv = styled.div`
    color: white;
    font-size: 50px;
    margin-bottom: 30px;
    margin-left: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const fadeOutUpAnimation = keyframes`${fadeOutUp}`;
const StyledIconBtnSpan = styled.span`
    animation: 1s ${props => (props.fadeOutUp || props.fadeOutDown ? fadeOutUpAnimation : "")};
`

const InteractiveColumn = (props) => {
    const [videoId, setVideoId] = useState('')
    const [fadeOutUp, setFadeOutUp] = useState(false)
    const [fadeOutDown, setFadeOutDown] = useState(false)

    return (
        <StyledParentDiv>
            <StyledIconBtnDiv>
                <StyledIconBtnSpan 
                onClick={() => setFadeOutUp(true)} 
                onAnimationEnd={() => setFadeOutUp(false)}
                fadeOutUp={fadeOutUp}>
                    <FaThumbsUp />
                </StyledIconBtnSpan>
                <StyledIconBtnSpan 
                onClick={() => setFadeOutDown(true)} 
                onAnimationEnd={() => setFadeOutDown(false)}
                fadeOutDown={fadeOutDown}>
                    <FaThumbsDown />
                </StyledIconBtnSpan>
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