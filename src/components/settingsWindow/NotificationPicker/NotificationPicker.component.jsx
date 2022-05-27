import React, { useState } from "react";
import Button from "../../button/Button.component";
import SettingsUI from "../settingsUI/SettingsUI.component";
import { notifications } from "../../../helperFunctions/notifications";
import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "../../../state/notificationSlice";
import { saveLocalContent } from "../../../helperFunctions/electron";
import { hexToRgbA } from "../../../helperFunctions/general";

function NotificationPicker() {
  const stateColor = useSelector((state) => state.color.color);
  const dispatch = useDispatch();
  const notificationState = useSelector(
    (state) => state.notification.notification
  );

  const [selectedNotification, setSelectedNotification] =
    useState(notificationState);

  const RgbaValues = hexToRgbA(stateColor);

  const options = notifications.map((sound, i) => (
    <option
      key={i}
      value={i}
      {...(sound.variable === notificationState ? { selected: "true" } : {})}
    >
      {[sound.name]}
    </option>
  ));

  function onChange(e) {
    const { value } = e.target;
    setSelectedNotification(
      value === "none" ? null : notifications[value].variable
    );
    if (value === "none") return;

    let song = new Audio(notifications[value].variable);
    song.play();
  }

  function onSave() {
    dispatch(setNotification(selectedNotification));
    saveLocalContent("data.notification", selectedNotification);
  }

  return (
    <SettingsUI title="Notification Sound">
      <select
        name=""
        id=""
        onChange={onChange}
        style={{
          border: `1px solid ${stateColor}`,
          color: stateColor,
          backgroundColor: RgbaValues,
        }}
      >
        <option
          value="none"
          {...(notificationState ? {} : { selected: "true" })}
        >
          None
        </option>
        {options}
      </select>
      <Button onClick={onSave}>Save</Button>
    </SettingsUI>
  );
}

export default NotificationPicker;
