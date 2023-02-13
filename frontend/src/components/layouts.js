import { Row, Col, Container } from 'react-bootstrap';
import { DataCard } from './cards';

function LayoutCV(props){

    return(
        <Container fluid='xxl'>
            <Row className='vh-100'>
                <Col className='border border-danger p-0' sm={4}>
                    <DataCard userData={props.userData}></DataCard>
                </Col>
                <Col className='border border-primary'>Content 2</Col>
            </Row>
        </Container>
    );
}

export {LayoutCV}