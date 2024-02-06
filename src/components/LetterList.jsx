import LetterCard from "./LetterCard";
import styled from "styled-components";

export default function LetterList({ activeMember, letters }) {
  const filteredLetters = letters.filter(
    (letter) => letter.name === activeMember
  );

  return (
    <ListWrapper>
      {filteredLetters.map((letter) => (
        <LetterCard letter={letter} />
      ))}
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 12px;
  padding: 12px;
  width: 500px;
`;
