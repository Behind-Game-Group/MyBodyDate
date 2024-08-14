export interface StorageValue {
  key: string;
  value: string | boolean | number | undefined;
}

export interface StorageValueMap {
  [key: string]: string | boolean | number | undefined;
}
