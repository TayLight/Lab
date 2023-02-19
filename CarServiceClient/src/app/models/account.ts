import {Contract} from "./contract";

export interface Account {
  id?: number;
  number: string;
  contract: Contract;
}
