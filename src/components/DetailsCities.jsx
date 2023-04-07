import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "react-bootstrap"


const DetailsCities=({weather,units})=>{
       const tempUnits=units=='metric'? '°C':'F'
       const windUnit= units== 'metric'? 'm/s':'m/h'
        return(
            <>
                
                <Container className="mt-5 text-center">
            <Row>
                <Col xs={12} md={10} lg={8} xl={6}>
                 <div>
                    <p></p>
                    <h4></h4>
                 </div>
                </Col>
                
            </Row>
        
        </Container>
        </>
        
      
        )
    }
export default DetailsCities