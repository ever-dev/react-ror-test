import React from "react";
import { connect } from "react-redux";
import "./index.css";

const Profile = ({ user }) => {
  return <div>UserName: {user}</div>;
};

const mapStatesToProps = state => ({
  user: state.auth.user
});

export default connect(mapStatesToProps)(Profile);
