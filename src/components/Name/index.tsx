import styled from '@emotion/styled'

export const Title = styled.h1 `
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 32px;
  flex-direction: column;
  font-family: 'Rubik', sans-serif;
  font-size: 22px;
  font-weight: 600;
  font-style: italic;
  text-transform: uppercase;
  color: #2164f3;
`;

export default function AppName() {
  return (
    <Title>
      CRUD
    </Title>
  );
}

