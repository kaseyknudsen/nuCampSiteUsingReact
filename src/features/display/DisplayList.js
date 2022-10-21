import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/PartnersSlice";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const DisplayList = () => {
  const items = useSelector((state) => [
    selectFeaturedCampsite(state),
    selectFeaturedPromotion(state),
    selectFeaturedPartner(state),
  ]);
  return (
    <Row>
      {items.map((item, idx) => {
        const { featuredItem, isLoading, ErrMsg } = item;
        if (isLoading) {
          return <Loading key={idx} />;
        }
        if (ErrMsg) {
          return <Error errMsg={ErrMsg} key={idx} />;
        }
        return (
          featuredItem && (
            <Col md className="m-1" key={idx}>
              <AnimatedDisplayCard item={featuredItem} />
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default DisplayList;
