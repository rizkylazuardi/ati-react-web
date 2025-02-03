import { CHANGE_LOCALE,DEFAULT_LOCALE } from './constants';

const initialState = {
  locale: DEFAULT_LOCALE,
};

export default (state = initialState, action) => {
  let {type, payload} = action;
  switch (type) {
    case CHANGE_LOCALE:
      return { ...state, locale: payload };
    default:
      return { ...state, locale: DEFAULT_LOCALE };
  }
};
