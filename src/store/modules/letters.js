import fakeData from "fakeData.json";
// 팬레터 추가
const ADD_LETTER = "letter/ADD_LETTER";
// 팬레터 삭제
const DELETE_LETTER = "letter/DELETE_LETTER";
// 팬레터 수정
const EDIT_LETTER = "letter/EDIT_LETTER";

export const addLetter = (payload) => {
  return { type: ADD_LETTER, payload };
};
export const deleteLetter = (payload) => {
  return { type: DELETE_LETTER, payload };
};
export const aditLetter = (payload) => {
  return { type: EDIT_LETTER, payload };
};

const initialState = fakeData;

const letters = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LETTER:
      const newLetter = action.payload;
      return [newLetter, ...state];
    case DELETE_LETTER:
      const letterId = action.payload;
      return state.filter((letter) => {
        return letter.id !== letterId;
      });
    case EDIT_LETTER:
      const { id, editingText } = action.payload;
      // 오른쪽꺼에서 꺼내온다.
      return state.map((letter) => {
        if (letter.id === id) {
          return { ...letter, content: editingText };
        }
        return letter;
      });
    default:
      return state;
  }
};

export default letters;
