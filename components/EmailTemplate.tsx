import React from "react";

const EmailTemplate = (subject: string, message: string) => {
  return (
    <>
      <h1>{subject}</h1>
      <p>Thankyou for contacting!</p>
      <p>New message submitted!</p>
      <p>{message}</p>
    </>
  );
};

export default EmailTemplate;
