// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useState } from 'react';

function UsernameForm({ onSubmitUsername }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitUsername(username);
    setUsername('');
  };

  function handleChange(e) {
    const { value } = e?.target;
    setUsername(value?.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          name="name"
          value={username}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
