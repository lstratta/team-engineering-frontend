const Awards = ({ award }) => (
    <tr>
      <td>{award.type}</td>
      <td>{award.issuer}</td>
      <td>{award.award}</td>
      <td>{award.grade}</td>
      <td>{award.year}</td>
      <td>{award.weight}</td>
      <td>{award.priority}</td>
      <td>{award.description}</td>
    </tr>
  );
  
  export default Awards;
  