import { USER_SETTINGS_UPDATE_LANGUAGE, USER_SETTINGS_UPDATE_ROLE } from "../";

export const settingsUpdateLang = (lang: any) => ({
  type: USER_SETTINGS_UPDATE_LANGUAGE,
  payload: lang,
});

export const settingsUpdateRole = (role: any) => ({
  type: USER_SETTINGS_UPDATE_ROLE,
  payload: role,
});