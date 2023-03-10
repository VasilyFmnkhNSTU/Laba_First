import React, { useState } from "react";
import "./styles.css";

function PasswordManager() {
const [passwords, setPasswords] = useState([]);
const [newPassword, setNewPassword] = useState("");
const [errorMessage, setErrorMessage] = useState("");

const handleSubmit = (event) => {
event.preventDefault();
if (newPassword === "") {
setErrorMessage("Please enter a password");
} else {
setPasswords([...passwords, newPassword]);
setNewPassword("");
setErrorMessage("");
}
};

const handleDelete = (index) => {
const newPasswords = [...passwords];
newPasswords.splice(index, 1);
setPasswords(newPasswords);
};

return (
<div className="password-manager">
<h1>Password Manager</h1>
<form onSubmit={handleSubmit}>
<label htmlFor="password-input">New Password:</label>
<input
id="password-input"
type="password"
value={newPassword}
onChange={(event) => setNewPassword(event.target.value)}
/>
<button type="submit">Add Password</button>
</form>
{errorMessage !== "" ? (
<p className="error-message">{errorMessage}</p>
) : passwords.length > 0 ? (
<ul>
{passwords.map((password, index) => (
<li key={index}>
{password}{" "}
<button onClick={() => handleDelete(index)}>Delete</button>
</li>
))}
</ul>
) : (
<p>No passwords saved yet.</p>
)}
</div>
);
}

export default PasswordManager;