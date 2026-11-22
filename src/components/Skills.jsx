import "./Skills.css";

function Skills() {

    const skills = ["C++", "JavaScript", "HTML", "CSS", "React", "Lua", "Git & GitHub"];
    
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      
      <div className="skills-container">
            {skills.map((skill) => (
                <div className="skill-card" key={skill}>
                    {skill}
                </div>
            ))}
    </div>

    </section>
  );
}

export default Skills;