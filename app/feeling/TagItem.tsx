"use client";
import styled from "styled-components";

interface TagItemProps {
  title: string;
}
export default function TagItem({ title = "명소" }: TagItemProps) {
  return (
    <TagButton>
      <Title>{`# ${title}`}</Title>
    </TagButton>
  );
}

const TagButton = styled.button`
  padding: 7px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.colors.pink300};
  background: #fff8f9;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.pink300};
  font-size: 13px;
`;
