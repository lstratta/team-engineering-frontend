const SchoolQualifications = ({ schooling }) => (
  <tr>
    <td>{schooling.school}</td>
    <td>{schooling.examType}</td>
    <td>{schooling.subject}</td>
    <td>{schooling.grade}</td>
    <td>{schooling.year}</td>
    <td>{schooling.weight}</td>
    <td>{schooling.priority}</td>
    <td>{schooling.description}</td>
  </tr>
);

export default SchoolQualifications;
