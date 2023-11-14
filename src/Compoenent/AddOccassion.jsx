import React, { useState, useContext } from 'react'
import OccassionContext from '../Context/OccassionContext'


export default function AddOccassion() {
    const [Occassion, setOccassion] = useState({ Occassiontitle: "", Occassiontype: "" });
    const onChange = (e) => {

        setOccassion({ ...Occassion, [e.target.name]: e.target.value });

    }
    const AddOccassions = () => {
        console.log("submitted")
    }; 

    return (
        <>
            <div className='container'>
                <div className="container py-5 w">
                    <form style={{ border: "0.2rem solid rgb(28, 28, 28)", borderRadius: "3rem", backgroundColor: "rgb(28, 28, 28)" }} className="p-md-5 bg-body-tertiary shadow">
                        <h1 style={{ color: "white" }}>Add new Special Occassion</h1>
                        <p style={{ color: "white" }}>Enter every data very correctly</p>
                        <div className="form-floating mb-3">
                            <input type="text" id="form4Example1" className="form-control" name='Occassiontitle' value={Occassion.Occassiontitle} onChange={onChange} />
                            <label className="form-label" forhtml="form4Example1" style={{ color: 'black' }}>Special Ocassion Title</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" id="form4Example1" className="form-control" name='Occassiontype' value={Occassion.Occassiontype} onChange={onChange} />
                            <label className="form-label" forhtml="form4Example1" style={{ color: 'black' }}>Special Ocassion Type</label>
                        </div>
                        <button type="submit" style={{ backgroundColor: " rgb(124, 43, 124)", color: "white" }} className="w-100 btn btn-lg" onClick={AddOccassions}>POST Occassion</button>
                    </form>
                </div>
            </div>
        </>
    )
}
