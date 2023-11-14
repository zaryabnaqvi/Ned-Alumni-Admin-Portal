import React, { useState, useContext } from 'react'

export default function AddAlumniProject() {
    const [AlumniProject, setAlumniProject] = useState({ AlumniProjecttitle: "", AlumniProjecttype: "" });
    const onChange = (e) => {

        setAlumniProject({ ...AlumniProject, [e.target.name]: e.target.value });

    }
    const AddAlumniProjects = () => {
        console.log("submitted")
    };

    return (
        <>
            <div className='container'>
                <div className="container py-5 w">
                    <form style={{ border: "0.2rem solid rgb(28, 28, 28)", borderRadius: "3rem", backgroundColor: "rgb(28, 28, 28)" }} className="p-md-5 bg-body-tertiary shadow">
                        <h1 style={{ color: "white" }}>Add new Special Alumni Supported Project</h1>
                        <p style={{ color: "white" }}>Enter every data very correctly</p>
                        <div className="form-floating mb-3">
                            <input type="text" id="form4Example1" className="form-control" name='AlumniProjecttitle' value={AlumniProject.AlumniProjecttitle} onChange={onChange} />
                            <label className="form-label" forhtml="form4Example1" style={{ color: 'black' }}>Project Title</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" id="form4Example1" className="form-control" name='AlumniProjecttype' value={AlumniProject.AlumniProjecttype} onChange={onChange} />
                            <label className="form-label" forhtml="form4Example1" style={{ color: 'black' }}>Project Type</label>
                        </div>
                        <button type="submit" style={{ backgroundColor: " rgb(124, 43, 124)", color: "white" }} className="w-100 btn btn-lg" onClick={AddAlumniProjects}>POST AlumniProject</button>
                    </form>
                </div>
            </div>
        </>
    )
}
