import {ImageSourcePropType} from 'react-native';

export interface User {
  id: number;
  name: string;
  genre: string;
  cercle: string[];
  image1?: ImageSourcePropType;
  image2?: ImageSourcePropType;
  image3?: ImageSourcePropType;
  image4?: ImageSourcePropType;
  image5?: ImageSourcePropType;
  image6?: ImageSourcePropType;
  age: number;
  location: string;
  on: boolean;
  quality: boolean;
  medaille: boolean;
  partenaire: string | boolean;
  distance: number;
  ptCommun: number;
}
