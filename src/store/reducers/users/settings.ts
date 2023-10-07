import { HYDRATE } from "next-redux-wrapper";
import { USER_SETTINGS_UPDATE_LANGUAGE, USER_SETTINGS_UPDATE_ROLE } from "../../actions";

const initialState = {
    // language: "pt-BR",
    language: "en",
    postsPerPage: 4,
    role: '',
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload.settings };
        case USER_SETTINGS_UPDATE_LANGUAGE:
            return { ...state, language: action.payload };
        case USER_SETTINGS_UPDATE_ROLE:
            return { ...state, role: action.payload };
        default:
            return state;
    }
};

export default reducer;
// module.exports = reducer;