import Tabs from "./Tabs";
import styled from "styled-components";
export default function Header({ activeMember, setActiveMember }) {
  return (
    <Container>
      <Title>Avoid 팬레터</Title>
      <Tabs activeMember={activeMember} setActiveMember={setActiveMember} />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 300px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: yellow;
  flex: 1;
  display: flex;
  align-items: center;
`;
