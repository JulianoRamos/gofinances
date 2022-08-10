import React from "react";
import { categories } from "../../utils/categories";
import {
  Amount,
  Category,
  CategoryName,
  Container,
  Date,
  Footer,
  Icon,
  Title,
} from "./styles"

export interface TransactionCardProps {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({
  data: {
    type,
    name,
    amount,
    category,
    date,
  }
}: Props) {

  const [categoryUtil] = categories.filter(
    item => item.key === category
  );

  return (
    <Container>
      <Title>{name}</Title>

      <Amount
        type={type}
      >
        {
          type === 'negative' && '- '
        }
        {amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={categoryUtil.icon} />
          <CategoryName>{categoryUtil.name}</CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  )
}