// third-party
import { merge } from "lodash";

// project import
import InputLabel from "./InputLabel";
import OutlinedInput from "./OutlinedInput";
// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme) {
  return merge(
    InputLabel(theme),
    OutlinedInput(theme)
  );
}
