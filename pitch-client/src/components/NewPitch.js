import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PitchContext } from '../contexts/PitchProvider';


const NewPitch = () => {

    const [newPitch, setNewPitch] = useState({
        post: ""
    });

    let { makePitch } = useContext(PitchContext);
    let navigate = useNavigate();

    function handleChange(e) {
        setNewPitch((preValue) => {
            return { ...preValue, [e.target.name]: e.target.value }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        makePitch(newPitch).then(() => {
            navigate('/pitches')
        }).catch(error => {
            console.log(error);
            window.alert('Creating new post failed');
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Create an Post</h1>
                <br /><br></br>
                <span>New Post</span>
                <input type="text"
                    name="post"
                    value={newPitch.post}
                    onChange={handleChange} />
                <br /><br></br>
                <button >
                   Post
                </button>
            </form>
        </div>

    )
};

export default NewPitch;