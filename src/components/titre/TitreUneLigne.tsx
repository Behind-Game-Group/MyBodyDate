import {Text} from 'react-native';
import React from 'react';
import StylesTitreUneLigne from '../../../assets/style/StyleComposants/StyleTitreUneLigne';

type TitreUneLigneProps = {
  txtTitle: string;
  top: number | undefined;
  left: number | undefined;
  fontFamily: string | undefined;
  color: string | undefined;
  textAlign: 'left' | 'auto' | 'right' | 'center' | 'justify' | undefined;
  fontSize: number | undefined;
  fontWeight:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 'ultralight'
    | 'thin'
    | 'light'
    | 'medium'
    | 'semibold'
    | 'black'
    | undefined;
};

export const TitreUneLigne: React.FC<TitreUneLigneProps> = ({
  txtTitle,
  top,
  left,
  fontFamily,
  color,
  textAlign,
  fontWeight,
  fontSize,
}) => {
  return (
    <Text
      style={[
        StylesTitreUneLigne.TxtTitle,
        {
          fontFamily: fontFamily !== undefined ? fontFamily : 'Comfortaa-Bold',
          color: color !== undefined ? color : '#fff',
          top: top !== undefined ? top : 0,
          left: left !== undefined ? left : 0,
          textAlign: textAlign !== undefined ? textAlign : 'left',
          fontSize: fontSize !== undefined ? fontSize : 24,
          fontWeight: fontWeight !== undefined ? fontWeight : '500',
        },
      ]}>
      {txtTitle}
    </Text>
  );
};
