import {Operation} from "./operation";
import {Account} from "./account";

export interface Document {
  id?: number;
  name: string;
  operation: Operation;
  account: Account;
}
