import React from "react";
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

interface Category {
  icon: string;
  name: string;
}

export interface TransactionCardProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({
  data: {
    type,
    title,
    amount,
    category,
    date,
  }
}: Props) {
  return (
    <Container>
      <Title>{title}</Title>

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
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  )
}