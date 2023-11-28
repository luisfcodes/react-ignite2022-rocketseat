import "styled-components";
import { colors } from "../../constants/colors";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof colors;
  }
}
