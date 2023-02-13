import { Row, Col, Container } from 'react-bootstrap';
import { DataCard } from './cards';

function LayoutCV(props){

    return(
        <Container fluid='xxl'>
            <Row className=''>
                <Col className='py-2' sm={4}>
                    <DataCard userData={props.userData}></DataCard>
                </Col>
                <Col className='border border-primary py-2'>Content 2</Col>
            </Row>
        </Container>
    );
}

export {LayoutCV}