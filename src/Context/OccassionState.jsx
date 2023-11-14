import React, { useState } from 'react'
import OccassionContext from '../Context/OccassionContext'

const OccassionState = (props) => {

    const [Occassion, setOccassion] = useState([]);
    const getOccassion = async () => {
        const res = await fetch("http://localhost:3000/getEventsList", {
            method: "GET",
        })
        const json = await res.json();
        console.log(json)
        setOccassion(json)
    }

    const AddOccassion = async (title, imagePath, choice, content, eventDate, eventTime, status, userID) => {
        console.log({ title, imagePath, choice, content, eventDate, eventTime, status, userID });
        const data = await fetch("http://localhost:3000/saveEvent", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ title, imagePath, choice, content, eventDate, eventTime, status, userID })
        }
        )
        if (data.status == 200) {
            const json = await data.json();
            console.log(json)
            let state = Occassion;
            setOccassion(state.concat(json))
            alert("save sucessfully")
        } else {
            alert("failed to get data")
        }

    }

    const approvingEvent = async (id, title, imagePath, choice, content, eventDate, eventTime, status) => {
        const data = await fetch(`http://localhost:3000/updateEvent/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ title, imagePath, choice, content, eventDate, eventTime, status })
        }
        )
        if (data.status == 200) {
            const json = await data.json()
            console.log(json)
            alert("approved sucessfully")
            window.location.reload();
        }
        let EditNotes = Occassion;
        console.log(EditNotes)
        for (let index = 0; index < EditNotes.length; index++) {
            if (EditNotes[index]._id === id) {
                EditNotes[index].title = title;
                EditNotes[index].imagePath = imagePath;
                EditNotes[index].choice = choice;
                EditNotes[index].content = content;
                EditNotes[index].eventDate = eventDate;
                EditNotes[index].eventTime = eventTime;
                EditNotes[index].status = status;

                break;
            }
        }
        console.log(EditNotes);
        setOccassion(EditNotes);
    }

    const UpdateOccassion = async (id, title, imagePath, choice, content, eventDate, eventTime) => {
        const data = await fetch(`http://localhost:3000/updateEvent/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ title, imagePath, choice, content, eventDate, eventTime })
        }
        )
        if (data.status == 200) {
            const json = await data.json()
            console.log(json)
            alert("updated successfully")
            window.location.reload();
        }
        let EditNotes = Occassion;
        console.log(EditNotes)
        for (let index = 0; index < EditNotes.length; index++) {
            if (EditNotes[index]._id === id) {
                EditNotes[index].title = title;
                EditNotes[index].imagePath = imagePath;
                EditNotes[index].choice = choice;
                EditNotes[index].content = content;
                EditNotes[index].eventDate = eventDate;
                EditNotes[index].eventTime = eventTime;




                break;
            }
        }
        console.log(EditNotes);
        setOccassion(EditNotes);

    }

    const deleteOccassion = async (id) => {
        console.log(id)
        const data = await fetch(`http://localhost:3000/deleteEvent/${id}`, {
            method: "DELETE",

        })
        const NewNotes = Occassion.filter((video) => { return video._id !== id });
        setOccassion(NewNotes);


    }

    return (
        <OccassionContext.Provider value={{ Occassion, setOccassion, AddOccassion, UpdateOccassion, deleteOccassion, getOccassion, approvingEvent }}>
            {props.children}
        </OccassionContext.Provider>
    )
}

export default OccassionState;

