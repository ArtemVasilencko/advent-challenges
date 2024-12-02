import { Route, Routes } from "react-router";
import LayoutApp from "../components/layout/layout";
import { routes } from "./routes";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutApp />}>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
        <Route path="*" element={<div>NOT FOUND CHALLENGE</div>} />
      </Route>
    </Routes>
  );
}
