import React, { useState } from 'react';
import './App.css';

function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [gender, setGender] = useState(''); // Male, Female, Other
  const [skills, setSkills] = useState([]); // Array to store selected skills
  const [imageLink, setImageLink] = useState('');
  const [displayData, setDisplayData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Display the registered data
    setDisplayData(
      <div>
        <h2>Registered Data:</h2>
        <p><strong>Full Name:</strong> {fullName}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Website Link:</strong> {websiteLink}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Skills:</strong> {skills.join(', ')}</p>
        {imageLink && (
          <div>
            <p><strong>Image:</strong></p>
            <img src={imageLink} alt="User's Photo" style={{ maxWidth: '100%' }} />
          </div>
        )}
      </div>
    );

    // Clear the form fields after submission
    setFullName('');
    setEmail('');
    setWebsiteLink('');
    setGender('');
    setSkills([]);
    setImageLink('');
  };

  return (
    <div className="container">
      <div className="left">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="websiteLink">Website Link:</label>
          <input
            type="url"
            id="websiteLink"
            name="websiteLink"
            value={websiteLink}
            onChange={(e) => setWebsiteLink(e.target.value)}
            required
          />

          <label>Gender:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === 'Male'}
                onChange={(e) => setGender(e.target.value)}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === 'Female'}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={gender === 'Other'}
                onChange={(e) => setGender(e.target.value)}
              />
              Other
            </label>
          </div>

          <label>Skills:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                value="HTML"
                checked={skills.includes('HTML')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSkills([...skills, e.target.value]);
                  } else {
                    setSkills(skills.filter((skill) => skill !== e.target.value));
                  }
                }}
              />
              HTML
            </label>
            <label>
              <input
                type="checkbox"
                value="CSS"
                checked={skills.includes('CSS')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSkills([...skills, e.target.value]);
                  } else {
                    setSkills(skills.filter((skill) => skill !== e.target.value));
                  }
                }}
              />
              CSS
            </label>
            <label>
              <input
                type="checkbox"
                value="JavaScript"
                checked={skills.includes('JavaScript')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSkills([...skills, e.target.value]);
                  } else {
                    setSkills(skills.filter((skill) => skill !== e.target.value));
                  }
                }}
              />
              JavaScript
            </label>
            <label>
              <input
                type="checkbox"
                value="ReactJS"
                checked={skills.includes('ReactJS')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSkills([...skills, e.target.value]);
                  } else {
                    setSkills(skills.filter((skill) => skill !== e.target.value));
                  }
                }}
              />
              ReactJS
            </label>
          </div>

          <label htmlFor="imageLink">Image Link:</label>
          <input
            type="url"
            id="imageLink"
            name="imageLink"
            value={imageLink}
            onChange={(e) => setImageLink(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>
      </div>

      <div className="right">
        <div id="displayData">
          {/* Display the registered data here */}
          {displayData}
        </div>
      </div>
    </div>
  );
}

export default App;
