const Portfolio = ({ portfolio }) => (
  <tr>
    <td>{portfolio.title}</td>
    <td>{portfolio.url}</td>
    <td>{portfolio.year}</td>
    <td>{portfolio.weight}</td>
    <td>{portfolio.priority}</td>
    <td>{portfolio.description}</td>
  </tr>
);

export default Portfolio;
