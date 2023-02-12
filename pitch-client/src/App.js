import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { UserProvider } from './contexts/UserProvider';
import Register from './components/Register';
import SignIn from './components/SignIn';
import PitchList from './components/PitchList';
import NewPitch from './components/NewPitch';
import EditPitch from './components/EditPitch';
import UserProfile from './components/UserProfile';
import NavBar from './components/NavBar';


function App() {
  return (


    <BrowserRouter>

      <Routes>
        <Route path='/' element={<NavBar />}>
          {/* <Route index element={<SignIn />} /> */}
          {/* <Route path="/users/:id" element={<UserProfile />} />

          <Route path="/pitches" element={<PitchList />}> */}
            {/* <Route path="/pitches/new" element={<NewPitch />} />
            <Route path="/pitches/edit/:id" element={<EditPitch />} /> */}
          {/* </Route> */}
          <Route path="/pitches" element={<PitchList />} />
          <Route path="/users/:id" element={<UserProfile />} />
          <Route path="/register" element={<Register />} />
        </Route>

      </Routes>


    </BrowserRouter>


  );
}

export default App;
