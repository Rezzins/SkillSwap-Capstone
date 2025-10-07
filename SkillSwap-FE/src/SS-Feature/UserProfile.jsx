import { useParams } from "react-router";
import { mockSkills } from "./mockSkills";

export default function UserProfile() {
  const { username } = useParams();
  const userSkills = mockSkills.filter(skill => skill.owner === username);

  return (
    <div className="skill-swap">
      <h1>{`${username}'s Profile`}</h1>
      {userSkills.map(skill => (
        <div className="skill-card" key={skill.id}>
          <h2>{skill.title}</h2>
          <p>{skill.description}</p>
          <p>Rating: {skill.rating}</p>
        </div>
      ))}
      <button>Inquire About Skill</button>
    </div>
  );
}