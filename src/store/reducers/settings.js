export const initialState = {
  lang: 'en',
};

export const settings = (state = initialState, action) => {
  switch (action.type) {
    case 'settings/setLang':
      return {
        ...state,
        lang: action.lang,
      };
    default:
      return state;
  }
};
