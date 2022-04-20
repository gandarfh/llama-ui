import "@emotion/react";

import { ThemeCustom } from "./config";

declare module "@emotion/react" {
  export interface Theme extends ThemeCustom {}
}
