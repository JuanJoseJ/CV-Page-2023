import { Row, Col, Container, Image, Card } from 'react-bootstrap';

function DataCard(params) {
    
    return(

        <Container className='h-100 p-0 '>
            {/* <Row className='py-50'>
                <Col className='h-50'>
                    <Image src='/perfil generico.jpg' fluid='true' className=''></Image>              
                </Col>
            </Row>
            <Row>
                About
            </Row>
            <Row>
                Contact
            </Row> */}

            <Card className='p-1 h-100 w-100'>
                <Card.Img src='/perfil generico.jpg' 
                    style={{
                        layout:"fill",
                        objectFit: 'scale-down',
                        width: 'auto',
                        height: 'auto',
                        maxHeight:'45%'
                    }}
                />
                
            </Card>
        </Container>
    )
}

export {DataCard}