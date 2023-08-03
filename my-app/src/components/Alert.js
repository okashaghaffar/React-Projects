import React from "react";

export default function Alert(props) {
  const uper = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} d-flex align-items-center`}
          role="alert"
        >
          {uper(props.alert.type)} {props.alert.message}
        </div>
      )}
    </div>
  );
}
