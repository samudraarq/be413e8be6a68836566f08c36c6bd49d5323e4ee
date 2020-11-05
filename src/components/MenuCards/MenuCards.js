import styled from "styled-components";
import { format, addDays } from "date-fns";
import { id } from "date-fns/locale";

import Container from "../UI/Container";
import MenuCard from "./MenuCard/MenuCard";

const Wrapper = styled.div`
  padding-top: 13.7rem;
  padding-bottom: 8rem;
`;

const MenusDate = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 2.4rem;
`;

const MenuCards = () => {
  const today = new Date();

  const dayFormat = "EEEE. dd LLLL y";
  // format(today, dayFormat, { locale: id })

  const menuData = [
    {
      id: 1,
      date: today,
      menu: [
        {
          id: 1,
          title: "Roasted Chicken with Scramble Egg",
          rating: 4.5,
          price: 35000,
          image_url:
            "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
        },
        {
          id: 2,
          title: "Roasted Chicken with Scramble Egg",
          rating: 4.5,
          price: 35000,
          image_url:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        },
        {
          id: 3,
          title: "Roasted Chicken with Scramble Egg",
          rating: 4.5,
          price: 35000,
          image_url:
            "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        },
      ],
    },
    {
      id: 2,
      date: addDays(today, 1),
      menu: [
        {
          id: 4,
          title: "Roasted Chicken with Scramble Egg",
          rating: 4.5,
          price: 35000,
          image_url:
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        },
        {
          id: 5,
          title: "Roasted Chicken with Scramble Egg",
          rating: 4.5,
          price: 35000,
          image_url:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        },
        {
          id: 6,
          title: "Roasted Chicken with Scramble Egg",
          rating: 4.5,
          price: 35000,
          image_url:
            "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        },
        {
          id: 7,
          title: "Roasted Chicken with Scramble Egg",
          rating: 4.5,
          price: 35000,
          image_url:
            "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        },
      ],
    },
  ];

  const renderMenu = menuData.map((data) => (
    <div key={data.id}>
      <MenusDate>{format(data.date, dayFormat, { locale: id })}</MenusDate>

      {data.menu.map((menu) => (
        <MenuCard menu={menu} key={menu.id} />
      ))}
    </div>
  ));

  return (
    <Container>
      <Wrapper>{renderMenu}</Wrapper>
    </Container>
  );
};

export default MenuCards;
