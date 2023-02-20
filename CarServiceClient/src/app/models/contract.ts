import {Client} from "./car";
import {Account} from "./account";
import {Document} from "./document";

export interface Contract {
  id?: number;
  number: string;
  client: Client;
}
