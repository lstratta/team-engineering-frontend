const WorkExperience = ({ work }) => (
    <tr>
      <td>{work.type}</td>
      <td>{work.employer}</td>
      <td>{work.position}</td>
      <td>{work.from}</td>
      <td>{work.to}</td>
      <td>{work.weight}</td>
      <td>{work.priority}</td>
      <td>{work.description}</td>
    </tr>
  );
  
  export default WorkExperience;
  