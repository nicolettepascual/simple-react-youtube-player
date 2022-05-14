import React from "react";
import PropTypes from "prop-types";

import "../css/YoutubeContainer.css"

const YoutubeContainer = ({ embedId }) => (
    <div className="youtube-container-responsive">
        <div className="youtube-container-responsive">
            <iframe
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>

    </div>
);

YoutubeContainer.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeContainer;