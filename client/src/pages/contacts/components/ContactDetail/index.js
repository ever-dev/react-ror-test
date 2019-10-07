import React from "react";
import { Tabs, Tab, Button } from "react-bootstrap";
import { TagPicker } from "../../../../components";
import "./index.css";

export const ContactDetail = ({ user, onClose, onChange, onDelete }) => {
  return user ? (
    <div className="back-drop">
      <div className="contact-detail">
        <aside className="sidebar">
          <Button
            className="close-btn"
            onClick={() => {
              onClose();
            }}
          >
            X
          </Button>
        </aside>
        <div className="content">
          <div className="identity">
            <div className="marker">AT</div>
            <h6>{user.name}</h6>
            <div className="tags">
              {user.tags.map((tag, tagIndex) => (
                <TagPicker
                  name={tag}
                  key={tag}
                  onChange={e => {
                    onChange(tagIndex, e);
                  }}
                  onDelete={() => onDelete(tagIndex)}
                />
              ))}
              <TagPicker
                onChange={e => {
                  onChange(user.tags.length, e);
                }}
              />
            </div>
            <span>j...(hidden in the screenshot)</span>
            <div className="buttons">
              <Button className="invite-btn">Invite</Button>
              <Button className="cancel-btn">Cancel</Button>
              <Button className="cancel-btn">Delete</Button>
            </div>
          </div>
          <div className="content-info">
            <Tabs defaultActiveKey="main-info">
              <Tab eventKey="main-info" title="Main Info">
                <div className="info-item col-sm-6 col-md-6 col-12">
                  <h6 className="info-name">PHONE</h6>
                  <div className="info-value">{user.phone}</div>
                </div>
                <div className="info-item col-sm-6 col-md-6 col-12">
                  <h6 className="info-name">IP Address</h6>
                  <div className="info-value">{user.ipAddress}</div>
                </div>
                <div className="info-item col-sm-6 col-md-6 col-12">
                  <h6 className="info-name">Country</h6>
                  <div className="info-value">
                    <img
                      src={`https://www.countryflags.io/${user.country.slice(
                        0,
                        2
                      )}/flat/16.png`}
                    />
                    {user.country}
                  </div>
                </div>
                <div className="info-item col-sm-6 col-md-6 col-12">
                  <h6 className="info-name">Time On Webinar</h6>
                  <div className="info-value">{user.time}</div>
                </div>
                <div className="info-item col-sm-6 col-md-6 col-12">
                  <h6 className="info-name">LTV</h6>
                  <div className="info-value">{user.ltv}</div>
                </div>
              </Tab>
              <Tab eventKey="history" title="History">
                History is shown here.
              </Tab>
              <Tab eventKey="messages2" title="Messages2">
                Message is shown here.
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};
