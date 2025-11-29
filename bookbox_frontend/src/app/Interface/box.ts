import {Coordinates} from "./coordinates";

export interface Box {
  boxId: number;
  name : string;
  quantity : number;
  description : string;
  coordinates : Coordinates;
}
