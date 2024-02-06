import AddForm from "components/AddForm";
import Header from "components/Header";
import LetterList from "components/LetterList";
import styled from "styled-components";
import { useState } from "react";

export default function Home({ letters, setLetters }) {
  const [activeMember, setActiveMember] = useState("양희철 G");

  return (
    <Container>
      <Header activeMember={activeMember} setActiveMember={setActiveMember} />
      <AddForm setLetters={setLetters} />
      <LetterList activeMember={activeMember} letters={letters} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
