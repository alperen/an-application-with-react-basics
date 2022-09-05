import { createContext, SetStateAction, Dispatch } from "react";

interface SLTokenContextValues {
  slToken?: string;
  setSLToken: Dispatch<SetStateAction<SLTokenContextValues["slToken"]>>;
}

const SLTokenContext = createContext<SLTokenContextValues>({
  slToken: undefined,
  setSLToken: () => undefined
});

export default SLTokenContext;
