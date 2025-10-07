import { useState } from "react";
import { NavLink } from "react-router";
import { mockSkills } from "../SS-Feature/mockSkills";
import "./Home.css";

export default function Home() {
  const [skills] = useState(mockSkills);

  const topSkills = [...skills]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <div className="home-page-wrapper">
      <section className="home-page">
        <img src="/branding.png" alt="Skill Exchange Logo" className="home-logo" />
        <h1>Welcome to Skill Exchange</h1>
        <p className="mission">
          At Skill Exchange, we understand that traditional education can be expensive and out of reach for many. 
          Our mission is to democratize learning by connecting skilled teachers with eager learners. 
          We share the power of knowledge at the price of knowledge, enabling anyone to gain valuable skills 
          through a community-driven marketplace of expertise. Whether you're looking to master a new language, 
          hone your creative talents, or explore technical skills, Skill Exchange empowers you to learn, grow, 
          and succeed without financial barriers.
        </p>

        <h2>Top Rated Teachers</h2>
        <div className="skills-preview">
          {topSkills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <p><strong>Teacher:</strong> {skill.owner}</p>
              <p><strong>Rating:</strong> {skill.rating}</p>
            </div>
          ))}
        </div>

        <NavLink className="home-button" to="/skillswap">
          Explore All Skills
        </NavLink>
      </section>

      <footer className="site-footer">
        <p>© 2025 Skill Exchange. All rights reserved.</p>
        <p>Support: <a href="mailto:support@skillexchange.com">support@skillexchange.com</a></p>
      </footer>
    </div>
  );
}

