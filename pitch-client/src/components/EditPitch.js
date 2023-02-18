import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PitchContext } from "../contexts/PitchProvider";

const EditPitch = () => {
  const [newPitch, setNewPitch] = useState({
    post: "",
  });

  let { updatePitch, getPitchById } = useContext(PitchContext);
  let navigate = useNavigate();
  let params = useParams;
  useEffect(() => {
    async function getSinglePitch() {
      const vPitch = await getPitchById(params.id);
      setNewPitch(vPitch);
    }
    console.log("hi");
    getSinglePitch();
  }, [getPitchById, params]);

  function handleChange(e) {
    setNewPitch((preValue) => {
      return { ...preValue, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updatePitch(newPitch)
      .then(() => {
        navigate("/pitches");
      })
      .catch((error) => {
        console.log(error);
        window.alert("Creating new post failed");
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Edit Post</h1>
        <br />
        <br></br>
        <span></span>
        <input
          type="text"
          name="post"
          value={newPitch.post}
          onChange={handleChange}
        />
        <br />
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EditPitch;
