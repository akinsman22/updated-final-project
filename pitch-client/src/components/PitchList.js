import React, { useContext } from 'react';
import { Card, Container, Stack, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { PitchContext } from '../contexts/PitchProvider';
import { UserContext } from '../contexts/UserProvider';

const PitchList = () => {
    const { deletePitch, /* getPitchById, allPitches */ } = useContext(PitchContext);
    const { loginUser } = useContext(UserContext);



    function pitchList(pitches) {
        if (pitches === null) return

        return pitches.map((pitch, i) => {
            return <Card className="border-0 rounded-0 bg-transparent" key={i} style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text>{{pitch}}</Card.Text>
                    <Card.Subtitle>{loginUser.user.name} </Card.Subtitle>
                    <br/>
                    <button onClick={deletePitch.bind(this, pitch.id)}>Delete Pitch</button>
                </Card.Body>


            </Card>
        })
    }


    return (
        <>
            <h1 style={{ textAlign: 'center', fontFamily: "Cutive Mono, monospace" }}> Pitch Me Feed </h1>
            <br/>
            <Stack direction="horizontal" gap={3}>
                <Container>
                    <Row>
                        <PitchContext.Consumer>
                            {({ pitches }) => pitchList(pitches)}
                        </PitchContext.Consumer>
                    </Row>
                </Container>
                <Outlet />
            </Stack>
        </>

    )
};

export default PitchList;