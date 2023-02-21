import { createGlobalState } from "react-hooks-global-state";

export const { setGlobalState, useGlobalState } = createGlobalState({
  checkup: [],

  checkUp: {
    checkupA: "",
    checkupB: "",
    checkupC: "",
    checkupD: "",
  },
});
