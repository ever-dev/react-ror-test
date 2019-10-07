export const signIn = (username, password) => ({
  type: "SIGN_IN",
  username,
  password
});

export const startFetching = () => ({
  type: "START_FETCHING"
});

export const receiveContacts = contacts => ({
  type: "RECEIVED_CONTACTS",
  contacts
});

export const fetchContacts = () => {
  return dispatch => {
    dispatch(startFetching());
    fetch("http://localhost:3001/api/v1/contacts")
      .then(response => response.json())
      .then(json => {
        dispatch(receiveContacts(json));
      });
  };
};

export const updateContactTag = (contactid, tagid, newtag) => ({
  type: "UPDATE_CONTACT_TAG",
  contactid,
  tagid,
  newtag
});

export const deleteContactTag = (contactid, tagid) => ({
  type: "DELETE_CONTACT_TAG",
  contactid,
  tagid
});
