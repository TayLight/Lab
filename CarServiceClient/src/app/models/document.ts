import {Operation} from "./operation";
import {Account} from "./account";

export interface Document {
  id?: number;
  operation: Operation;
  account: Account;
}
