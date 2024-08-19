import {User} from './UserInterface';

export interface StorageValue {
  key: string;
  value:
    | string
    | string[]
    | number
    | number[]
    | boolean
    | boolean[]
    | User[]
    | StorageValue
    | StorageValue[]
    | undefined;
}

export interface StorageValueMap {
  [key: string]: string | boolean | number | undefined;
}
