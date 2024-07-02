import React from "react";

const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <input type="text" className="input" placeholder="full name" />
      <input type="email" className="input" placeholder="email address" />
      <input type="text" className="input" placeholder="phone number" />
      <textarea className="textarea mb-2" placeholder="your message"></textarea>
      <button type="submit" className="btn self-start">
        Send message
      </button>
    </form>
  );
};

export default Form;
