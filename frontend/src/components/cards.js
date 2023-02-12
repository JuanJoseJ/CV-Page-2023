import { Row, Col, Container } from 'react-bootstrap';


function DataCard(params) {
    
    return(

        <Container className='h-100'>
            <Row>
                Photo
            </Row>
            <Row>
                About
            </Row>
            <Row>
                Contact
            </Row>
        </Container>
        // <Container fluid='xxl' className='h-100'>
        //     <Row className='h-100'>
        //         <Col className='h-100'>
        //         Content 1
        //         </Col>
        //     </Row>
        // </Container>
    )
}

export {DataCard}