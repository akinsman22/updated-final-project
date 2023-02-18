import axios from "axios";
import React, { useEffect, useState } from "react";

export const PitchContext = React.createContext();

export const PitchProvider = (props) => {
  const [pitch, setPitch] = useState([]);
  // const [post, setPost] = useState([]);
  const baseURL = "http://localhost:3000/api/pitches/";

  useEffect(() => {
    async function getData() {
      await allPitches();
    }
    getData();
  }, []);
  // useEffect hook pulls data from API when app loads

  function allPitches() {
    return axios.get(baseURL).then((response) => {
      console.log(response.data);
      setPitch(response.data);
    });
  }

  function getPitchById(id) {
    let useHeaders = {
      Authorization: `Bearer ${localStorage.getItem("pitchToken")}`,
    };
    // return axios.get(baseURL + id, { headers: useHeaders })
    //     .then(response => {
    //         return new Promise(resolve => resolve(response.data));
    //     });
  }

  function makePitch(pitch) {
    let useHeaders = {
      Authorization: `Bearer ${localStorage.getItem("pitchToken")}`,
    };
    // return axios.post(baseURL + pitch, { headers: useHeaders })
    //     .then(response => {
    //         allPitches();
    //         return new Promise(resolve => resolve(response.data));
    //     });
  }

  function updatePitch(pitch) {
    let useHeaders = {
      Authorization: `Bearer ${localStorage.getItem("pitchToken")}`,
    };
    // return axios.put(baseURL + pitch.pitchId, pitch, { headers: useHeaders })
    //     .then(response => {
    //         allPitches();
    //         return new Promise(resolve => resolve(response.data));
    //     });
  }

  function deletePitch(id) {
    let useHeaders = {
      Authorization: `Bearer ${localStorage.getItem("pitchToken")}`,
    };
    // return axios.delete(baseURL + id, { headers: useHeaders })
    //     .then(response => {
    //         allPitches();
    //         return new Promise(resolve => resolve(response.data));
    //     });
  }

  return (
    <PitchContext.Provider
      value={{
        pitch,
        getPitchById,
        makePitch,
        updatePitch,
        deletePitch,
      }}
    >
      {props.children}
    </PitchContext.Provider>
  );
};
