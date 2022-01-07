const Degree = ({ degree }) => (
  <tr>
    <td>{degree.university}</td>
    <td>{degree.degreeSubject}</td>
    <td>{degree.degreeLevel}</td>
    <td>{degree.grade}</td>
    <td>{degree.fromDate}</td>
    <td>{degree.toDate}</td>
    <td>{degree.weight}</td>
    <td>{degree.priority}</td>
    <td>{degree.description}</td>
  </tr>
);

export default Degree;
