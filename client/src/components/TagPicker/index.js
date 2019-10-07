import React, { useState } from "react";
import "./index.css";
import { OverlayTrigger, Popover, Form } from "react-bootstrap";

export const TagPicker = ({ name = "", onDelete, onChange }) => {
  const [value, setValue] = useState(name);
  return (
    <OverlayTrigger
      rootClose
      trigger="click"
      placement="bottom"
      overlay={
        <Popover>
          <Popover.Content>
            <Form.Control
              type="text"
              placeholder="Type tag"
              onChange={e => {
                setValue(e.target.value);
              }}
              onKeyDown={e => {
                if (e.keyCode === 13 && value) {
                  onChange(value);
                }
              }}
              value={value}
            />
          </Popover.Content>
        </Popover>
      }
    >
      <div className="tag-picker">
        {name ? (
          <div className="tag-content">
            <span className="caption">{name}</span>
            <a className="action" onClick={() => onDelete()}>
              X
            </a>
          </div>
        ) : (
          <a className="action">+</a>
        )}
      </div>
    </OverlayTrigger>
  );
};
