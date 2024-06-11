import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (props) => {
    const deleteNote = () => {
        props.deleteItem(props.id); // Corrected prop name to deleteItem
    };

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button className="btn" onClick={deleteNote}>
                <DeleteOutlineIcon className="deleteIcons" />
            </button>
        </div>
    );
};

export default Note;
