const initialState = {
  user: null, // logged in user data
  validEmail: null, // register process
  validStudentId: null, // register process
  validLogin: null, // login process
};

// login 관련 state
export const Action = {
  Types: {
    UPDATE_STATE: "@USER/UPDATE_STATE",
    CLEAR_STORE: "@USER/CLEAR_STORE",

    REGISTER: "@USER/REGISTER",
    UPDATE_USER: "@USER/UPDATE_USER",
    DELETE_USER: "@USER/DELETE_USER",
    REQUEST_CONFIRMATION_CODE: "@USER/REQUEST_CONFIRMATION_CODE",
    CONFIRMED: "@USER/CONFIRMED",
    CHECK_EMAIL: "@USER/CHECK_EMAIL",
    CHECK_STUDENT_ID: "@USER/CHECK_STUDENT_ID",
    CHANGE_ROLES: "@USER/CHANGE_ROLES",
    RESET_PASSWORD: "@USER/RESET_PASSWORD",

    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
  },
  Creators: {
    updateState: (payload) => ({
      type: Action.Types.UPDATE_STATE,
      payload,
    }),
    clearStore: () => ({
      type: Action.Types.CLEAR_STORE,
    }),

    register: (body) => ({
      // email, password, studentId, name
      type: Action.Types.REGISTER,
      body,
    }),
    updateUser: (body) => ({
      // token / name, password
      type: Action.Types.UPDATE_USER,
      body,
    }),
    deleteUser: () => ({
      // token / email 미완성
      type: Action.Types.DELETE_USER,
    }),
    requestConfirmationCode: () => ({
      // token
      type: Action.Types.REQUEST_CONFIRMATION_CODE,
    }),
    confirmed: (body) => ({
      // token / confirmation-code
      type: Action.Types.CONFIRMED,
      body,
    }),
    checkEmail: (body) => ({
      // email
      type: Action.Types.CHECK_EMAIL,
      body,
    }),
    checkStudentId: (body) => ({
      // studentId
      type: Action.Types.CHECK_STUDENT_ID,
      body,
    }),
    changeRoles: (body) => ({
      // token / role
      type: Action.Types.CHANGE_ROLES,
      body,
    }),
    resetPassword: (body) => ({
      // 미완성
      type: Action.Types.RESET_PASSWORD,
      body,
    }),

    login: (body) => ({
      // token / userId, password
      type: Action.Types.LOGIN,
      body,
    }),
    logout: () => ({
      type: Action.Types.LOGOUT,
    }),
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case Action.Types.UPDATE_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case Action.Types.CLEAR_STORE:
      return initialState;
  }
};
