import React from "react";

const SoccerButton = () => {
    return (
        <div className="soccer-button">
            {/* Les paths des images des balises IMG partent du dossier /public */}
            {/* En revanche, pour les background en sass, les path sont normaux */}
            <img src="./logo192.png" alt="image soccer" />
            <h2>Soccer</h2>
        </div>
    );
};

export default SoccerButton;
