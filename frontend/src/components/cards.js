import { Row, Col, Container, Image, Card, ListGroup } from 'react-bootstrap';


function DataCard(props) {
    const userData = props.userData
    // console.log(Array.isArray(props.userData.Profile))
    // const Profile = [...props.userData.Profile]
    return(

        <Container className='p-0'>
            <Card className='pt-2' >
                <Card.Img src='/perfil generico.jpg' 
                    style={{
                        layout:"fill",
                        objectFit: 'scale-down',
                        width: 'auto',
                        height: 'auto',
                        maxHeight:'40vh',
                        
                    }}
                    className='p-2'
                />
                <Card.Title className='mt-1 p-2' >
                    {userData.Name+' '+userData.Last_Name+', '+userData.Age+'y.o'}
                </Card.Title>
                <Card.Header>Profile:</Card.Header>
                <ListGroup variant="flush">
                    {userData.Profile ? userData.Profile.map((item)=>{return(
                        <ListGroup.Item key={Math.random()*10}>{item}</ListGroup.Item> 
                    )}) : ''}
                    {/* <ListGroup.Item>{userData.Profile}</ListGroup.Item> */}
                </ListGroup>
                <Card.Header>Contact:</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>{'E-mail: '}<a href='{{userData.Email}}'>{userData.Email}</a></ListGroup.Item>
                    <ListGroup.Item>{'Phone: '+userData.Phone}</ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>
    )
}

export {DataCard}