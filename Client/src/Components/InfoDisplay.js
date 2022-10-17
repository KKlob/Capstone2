import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, shallowEqual } from 'react-redux';
import './InfoDisplay.css';
import DataCard from './DataCard';
import SocialsCard from './SocialsCard';
import BasicInfoCard from './BasicInfoCard';


function InfoDisplay() {

    const { selectedMember } = useSelector(state => ({ selectedMember: state.currMember }), shallowEqual);
    const { memberData } = useSelector(state => ({ memberData: (selectedMember !== null ? state.memberData[selectedMember.id] : null) }));

    if (selectedMember && memberData) {

        const member = { ...selectedMember, ...memberData }

        const basicInfo = {
            chamber: member.chamber,
            name: member.name,
            party: member.party,
            dob: member.date_of_birth,
            state: member.state,
            years_served: memberData.years_served
        };

        const data = {
            ...memberData,
            votes_with_party: member.votes_with_party
        }

        const socials = { socials: { ...member.socials, site: member.url } };

        return (
            <Container id="InfoDisplay" fluid>
                <Row>
                    <Col className="mempic" xs={2}>
                        <p>Image goes here</p>
                    </Col>
                    <Col className="member_info" xs={10}>
                        <Container fluid>
                            <Row className="justify-content-center align-items-center">
                                <Col className="text-center">
                                    <BasicInfoCard data={basicInfo} />
                                </Col>
                                <Col className="text-center">
                                    <SocialsCard data={socials} />

                                </Col>
                                <Col className="text-center">
                                    <DataCard data={data} />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container >
        )
    } else if (selectedMember) {
        return (
            <Container id="InfoDisplay" fluid>
                <Row>
                    <Col className="text-center align-center">
                        <h3>Loading Information on {selectedMember.name}</h3>
                    </Col>
                </Row>
            </Container>
        )
    }
    return (
        <Container id="InfoDisplay" fluid>
            <Row>
                <Col className="text-center">
                    <h3>Click on a member of Congress for more information here!</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default InfoDisplay;