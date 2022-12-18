import produce from "immer";
import {
  SET_ARTICLE,
  SET_GALLERY,
  SET_TESTIMONY,
  SET_TEACHER,
  SET_ASSESSMENT,
  SET_IS_LOGIN,
} from "../constants/index";

export const initialState = {
  isLogin: null,
  achievments: [],
  activity: [],
  certificates: [],
  teachers: [],
  galleries: [],
  articles: [],
  testimonies: [],
  assessments: [],
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ARTICLE:
        draft.achievments = action.achievment;
        draft.activity = action.activity;
        break;
      case SET_GALLERY:
        draft.galleries = action.galleries;
        break;
      case SET_TESTIMONY:
        draft.testimonies = action.testimonies;
        break;
      case SET_TEACHER:
        draft.teachers = action.teachers;
        break;
      case SET_ASSESSMENT:
        draft.assessments = action.assessments;
        break;
      case SET_IS_LOGIN:
        draft.isLogin = action.value;
        break;
      default:
        return state;
    }
  });

export default reducer;
