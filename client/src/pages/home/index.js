import React from "react";
import { connect } from "react-redux";
import "./index.css";

const Home = ({ user }) => {
  return <div>You are logged in with {user}.</div>;
};

const mapStatesToProps = state => ({
  user: state.auth.user
});

export default connect(mapStatesToProps)(Home);
