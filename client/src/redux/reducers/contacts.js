export const contacts = (
  state = { isLoading: false, contacts: [] },
  action
) => {
  console.log(action);
  switch (action.type) {
    case "START_FETCHING":
      return { ...state, isLoading: true };
    case "RECEIVED_CONTACTS":
      return { isLoading: false, contacts: action.contacts };
    case "UPDATE_CONTACT_TAG": {
      const newContacts = [...state.contacts];
      newContacts[action.contactid].tags[action.tagid] = action.newtag;
      return { ...state, contacts: newContacts };
    }
    case "DELETE_CONTACT_TAG": {
      const newContacts = [...state.contacts];
      newContacts[action.contactid].tags.splice(action.tagid, 1);
      return { ...state, contacts: newContacts };
    }
    default:
      return state;
  }
};
