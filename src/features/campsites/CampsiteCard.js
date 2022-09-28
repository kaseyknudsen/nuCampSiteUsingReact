import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import { CAMPSITES } from '../../app/shared/CAMPSITES';

const CampsiteCard = ({campsite}) => {
    const {image, name} = campsite;
    return (
        <Card>
            <CardImg 
                width='100%'
                src={image}
                alt={name}
            />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

export default CampsiteCard;

