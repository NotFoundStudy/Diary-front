const initialState = {
  editor: null,
};

export const Action = {
  Types: {
    UPDATE_STATE: "@EDITOR/UPDATE_STATE",
    CLEAR_STORE: "@EDITOR/CLEAR_STORE",

    INSERT: "@EDITOR/INSERT",
    UPDATE: "@EDITOR/UPDATE",
  },
  Creators: {
    insert: (body) => ({
      type: Action.Types.INSERT,
      body,
    }),
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case Action.Types.INSERT:
      return {
        ...state,
        ...action.payload,
      };
  }
};
