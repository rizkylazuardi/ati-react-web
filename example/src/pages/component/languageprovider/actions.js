import { CHANGE_LOCALE } from './constants';

export const changeLocale = (languageLocale,onSuccess) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_LOCALE,
      payload: {locale: languageLocale},
    });
    onSuccess();
  };
};
