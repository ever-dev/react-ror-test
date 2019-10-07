export const auth = (state = { isLoggedIn: true, error: "" }, action) => {
  switch (action.type) {
    case "SIGN_IN":
      if (action.username === "Admin" && action.password === "test1A") {
        return {
          ...state,
          isLoggedIn: true,
          user: action.username
        };
      } else {
        return { isLoggedIn: false, error: "Invalid Username or Password" };
      }
    default:
      return state;
  }
};
