import { Routes as RoutesBase, Route } from "react-router-dom";
import Login from "./Login";
import Posts from "./Posts";
import { RequiresSLToken } from "../context/SLTokenContext";

export default function Routes() {
  return (
    <RoutesBase>
      <Route index element={<Login />} />
      <Route
        path="posts"
        element={
          <RequiresSLToken>
            <Posts />
          </RequiresSLToken>
        }
      />
    </RoutesBase>
  );
}
