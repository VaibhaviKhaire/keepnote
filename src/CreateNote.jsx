import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
    const [expand,setExpand]=useState(false);
    const [note, setNote] = useState({
        title: '',
        content: '',
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({   // Resetting note state after adding the note
            title: '',
            content: '',
        });
    };
    const expandIt=()=>{
        setExpand(true);
    }

    return (
        <div className="main_note">
            <form>
                {expand?
                <input
                    type="text"
                    name="title"
                    value={note.title}
                    onChange={InputEvent}
                    placeholder="Title"
                    autoComplete="off"
                />:null}
                <textarea
                    rows=""
                    cols=""
                    name="content"
                    value={note.content}
                    onChange={InputEvent}
                    onClick={expandIt}
                    placeholder="Write a note..."
                />
                {expand?
                <Button className="plusButton" onClick={addEvent}>
                    <AddIcon className="Plus-sign" />
                </Button>:null}
            </form>
        </div>
    );
};

export default CreateNote;
