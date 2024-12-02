import { Link } from "react-router";
import { routes } from "../../router/routes";
import "./challenge-list.css";

const challengesData = routes.map(({ name, path }) => ({ name, path }));

export default function ChallengeList() {
  return (
    <ul className="challenge-list__container">
      {challengesData.map(({ path, name }, index) => (
        <li key={index} className="challenge-list__item">
          <Link className="challenge-list__item-link" to={path}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
