import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'


const StyledContainer = styled(Container)`
    margin-top: 540px;
    text-align: center;

`

const StyledRow = styled(Row)`
    border-bottom: 1px solid #e8e9eb; 
    display:flex;
    justify-content:space-evenly;
`

const CircleDiv = styled.div`
    background-color:red;
    border:1px solid red;
    border-radius:100%;
`


export default function StoreListing() {
    return <>

        <StyledContainer>
            <StyledRow>
                <Row>
                    <Col xs='0.5'>
                        <CircleDiv/>
                        <h2>Product 1</h2>
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: 'bold' }}>Aldi</h5>
                        <p>Delivery and Pickup</p>
                    </Col>
                </Row>
                <Col sm='1'>
                    <Row>
                        <Col xs='0.5'>
                            <CircleDiv/>
                            <h2>Product 2</h2>
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: 'bold' }}>Scott's veg</h5>
                            <p>Delivery and Pickup</p>
                        </Col>
                    </Row>
                </Col>
                <Col sm='1'>
                    <Row>
                        <Col xs='0.5'>
                            <CircleDiv/>
                            <h2>Product 3</h2>
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: 'bold' }}>Target</h5>
                            <p>Delivery and Pickup</p>
                        </Col>
                    </Row>
                </Col>
            </StyledRow>
        </StyledContainer>
    </>
}