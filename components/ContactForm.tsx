import React from "react";

const ContactForm = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <p className="mb-3 text-gray-200">
        You can reach out to me through the following platforms:
      </p>
      <ul className="space-y-3">
        <li>
          <a
            href="mailto:advika.thakur.official@gmail.com"
            className="text-blue-500 hover:text-blue-400"
          >
            Gmail: yourname@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/a-dvika/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400"
          >
            LinkedIn: linkedin.com/in/yourprofile
          </a>
        </li>
        <li>
          <a
            href="https://x.com/A_dvika"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400"
          >
            Twitter: @A_dvika
          </a>
        </li>
        <li>
          <a
            href="https://github.com/A-dvika"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400"
          >
            GitHub: github.com/A-dvika
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/139fryqObMmwWkhXRsgfC138TF5KyyQFc/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400"
          >
            Resume: Download Here
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactForm;
