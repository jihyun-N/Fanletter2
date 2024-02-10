import { createContext, useState } from "react";
import fakeData from "fakeData.json";

export const LetterContext = createContext(null);

function LetterContextProvider({ Children }) {
  const [letters, setLetters] = useState(fakeData);

  return (
    <LetterContext.Provider value={{ letters, setLetters }}>
      {Children}
    </LetterContext.Provider>
  );
}

export default LetterContextProvider;
