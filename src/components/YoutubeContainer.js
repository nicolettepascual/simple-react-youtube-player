import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const YoutubeWrapper = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    overflow: hidden;
    height: 0;
`

const YoutubeIframe = styled.iframe`
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
`


const YoutubeContainer = ({ embedId }) => (
    <YoutubeWrapper>
        <YoutubeIframe
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </YoutubeWrapper>
);

YoutubeContainer.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeContainer;