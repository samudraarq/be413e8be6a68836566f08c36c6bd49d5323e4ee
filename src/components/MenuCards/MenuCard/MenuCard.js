import { Rating } from "@material-ui/lab";
import styled from "styled-components";

const CardWrapper = styled.div`
  border-radius: 0.8rem;
  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);
  background: #fff;
  margin-top: 1.2rem;
`;

const CardImg = styled.img`
  height: 20rem;
  width: 100%;
  object-fit: cover;
  border-radius: 0.8rem 0.8rem 0 0;
`;

const ContentWrapper = styled.div`
  padding: 1.2rem;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;

  & p {
    margin-right: 0.4rem;
  }

  & span {
    font-size: 1rem;
    color: #f9423a;
  }
`;

const CardTitle = styled.p`
  font-size: 1.2rem;
  margin-top: 0.8rem;
`;

const CardSubtitle = styled.p`
  color: #6e7679;
  margin-top: 0.8rem;
`;

const MenuCard = ({ menu }) => {
  return (
    <CardWrapper>
      <CardImg src={menu.image_url} alt="menu" />
      <ContentWrapper>
        <RatingWrapper>
          <p>{menu.rating}</p>
          <Rating defaultValue={menu.rating} precision={0.1} readOnly />
        </RatingWrapper>
        <CardTitle>{menu.title}</CardTitle>
        <CardSubtitle>by Kulina &bull; Uptown Kitchen</CardSubtitle>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default MenuCard;
