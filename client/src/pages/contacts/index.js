import React, { useMemo, useState } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import {
  fetchContacts,
  updateContactTag,
  deleteContactTag
} from "../../redux/actions";
import { ContactDetail } from "./components/ContactDetail";
import "./index.css";

const Contacts = ({
  contacts,
  loading,
  fetchContacts,
  updateContactTag,
  deleteContactTag
}) => {
  const [selectedUser, setUser] = useState(null);
  const [isVisible, setVisible] = useState(false);
  useMemo(() => {
    fetchContacts();
  }, []);
  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>IP Address</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          ) : (
            contacts.map((contact, index) => (
              <tr
                key={contact.id}
                onClick={() => {
                  setUser(index);
                  setVisible(true);
                }}
              >
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.ipAddress}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      {isVisible && (
        <ContactDetail
          user={contacts[selectedUser]}
          onClose={() => {
            setVisible(false);
          }}
          onChange={(id, e) => {
            console.log("change", selectedUser, id, e);
            updateContactTag(selectedUser, id, e);
          }}
          onDelete={id => {
            console.log("delete", selectedUser, id);
            deleteContactTag(selectedUser, id);
          }}
        />
      )}
    </div>
  );
};

const mapStatesToProps = state => ({
  contacts: state.contacts.contacts,
  loading: state.contacts.loading
});

const mapDispatchToProps = {
  fetchContacts,
  updateContactTag,
  deleteContactTag
};

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(Contacts);
