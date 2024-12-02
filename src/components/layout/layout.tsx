import { Outlet } from "react-router-dom";
import ChallengeList from "../challenge-list/challenge-list";
import Header from "../header/header";

import "./layout.css";

const LayoutApp = () => {
  return (
    <div className="layout__container">
      <Header />
      <div className="layout__content">
        <ChallengeList />
        <div className="layout__content-challenge">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutApp;
