import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        setAddItem((prevData) => {
            return [...prevData, note];
        });
    };

    const onDelete = (id) => {
        setAddItem((oldData) => {
            return oldData.filter((_, index) => index !== id);
        });
    };

    return (
        <>
            <Header />
            <CreateNote passNote={addNote} />
            <div className="notesConatainer">
            {addItem.map((val, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItem={onDelete} // Changed prop name to deleteItem
                    />
                );
            })}
            </div>
            
            <Footer />
        </>
    );
};

export default App;
