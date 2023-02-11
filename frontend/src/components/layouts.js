import { Row, Col, Container } from 'react-bootstrap';

function LayoutCV(props){

    return(
        <Container fluid='xxl'>
            <Row>
                <Col className='border border-danger' sm={4}>Content 1</Col>
                <Col className='border border-primary'>Content 2</Col>
            </Row>
        </Container>
    );
}

export {LayoutCV}