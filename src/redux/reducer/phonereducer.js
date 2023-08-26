let initialState = {
  contactList: [],
  keyword:'',
};

function phonereducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          { name: payload.name, phoneNumber: payload.phoneNumber },
        ],
      };

    case "SEARCH" :
      state.keyword = payload.keyword
      break;

    default:
      return { ...state };
  }
}

export default phonereducer;
