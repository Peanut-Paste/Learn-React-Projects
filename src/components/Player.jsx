import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
	};

    function handleChange(event) {
        setPlayerName(event.target.value);
	};
    let nameElement = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        nameElement = (
            <input
                type="text"
                required
                value={playerName}
                onChange={handleChange}
            />
        );
    }
    return (
        <li>
            <span className="player">
                {nameElement}
                <span classSymbol="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    );
}
