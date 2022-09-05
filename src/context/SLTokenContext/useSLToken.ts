import { useContext } from "react";
import SLTokenContext from "./context";

export default function useSLToken() {
  return useContext(SLTokenContext);
}
