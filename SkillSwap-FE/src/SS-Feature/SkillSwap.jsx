import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router";
import { mockSkills } from "./mockSkills.js";
import PopUp from "../components/PopUp";
import "./SkillSwap.css";

export default function SkillSwap() {
  const [skills] = useState(mockSkills);
  const { token, login, register } = useAuth();
  const navigate = useNavigate();

  const [popupContent, setPopupContent] = useState(null);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);

  const handleSkillClick = (skill) => {
    if (token) {
      navigate(`/profile/${skill.owner}`);
    } else {
      setPopupContent("login"); // 'login' or 'register'
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      if (popupContent === "login") {
        await login(formData);
      } else {
        await register(formData);
      }
      setPopupContent(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="skill-swap">
      <h1>Skill Swap Marketplace</h1>
      <div className="skills-list">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="skill-card"
            onClick={() => handleSkillClick(skill)}
          >
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
            <p><strong>Teacher:</strong> {skill.owner}</p>
            <p><strong>Rating:</strong> {skill.rating}</p>
          </div>
        ))}
      </div>

      {popupContent && (
        <PopUp onClose={() => setPopupContent(null)}>
          <h2>{popupContent === "login" ? "Login" : "Register"}</h2>
          <form onSubmit={handleSubmit} className="popup-form">
            <label>
              Username
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </label>
            <button type="submit">{popupContent === "login" ? "Login" : "Register"}</button>
            {error && <p className="popup-error">{error}</p>}
          </form>
          <button
            className="popup-switch"
            onClick={() =>
              setPopupContent(popupContent === "login" ? "register" : "login")
            }
          >
            {popupContent === "login" ? "Create an account" : "Already have an account?"}
          </button>
        </PopUp>
      )}
    </section>
  );
}



