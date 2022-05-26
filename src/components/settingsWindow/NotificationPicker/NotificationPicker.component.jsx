import React, { useState } from "react";
import Button from "../../button/Button.component";
import SettingsUI from "../settingsUI/SettingsUI.component";
import { notifications } from "../../../helperFunctions/notifications";
import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "../../../state/notificationSlice";

function NotificationPicker() {
  const dispatch = useDispatch();
  const notificationState = useSelector(
    (state) => state.notification.notification
  );
  console.log(notificationState);
  const [selectedNotification, setSelectedNotification] =
    useState(notificationState);

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
  }

  return (
    <SettingsUI title="Notification Sound">
      <select name="" id="" onChange={onChange}>
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
