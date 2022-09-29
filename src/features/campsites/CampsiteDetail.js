import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap'

//campsite detail component appears on the right side after a campsite on the left is clicked
const CampsiteDetail = ({ campsite }) => {
    const { image, name, description } = campsite;

    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default CampsiteDetail;