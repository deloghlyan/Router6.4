import { Link } from "react-router-dom";

export default function SubmissionMessage() {
  return (
    <div className="submission-message">
      <h2>Your message has been successfully submitted. Thank you.</h2>
      <h3>Go back to the <Link to="/">Homepage</Link>.</h3>
    </div>
  );
}
