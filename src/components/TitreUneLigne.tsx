import {Text} from 'react-native';
import React from 'react';
import StylesTitreUneLigne from '../../assets/style/StyleComposants/StyleTitreUneLigne';

type TitreUneLigneProps = {
  txtTitle: string;
  top: number | undefined;
  left: number | undefined;
  fontFamily: number | undefined;
  textAlign: 'left' | 'auto' | 'right' | 'center' | 'justify' | undefined;
};

export const TitreUneLigne: React.FC<TitreUneLigneProps> = ({
  txtTitle,
  top,
  left,
  fontFamily,
  textAlign,
}) => {
  return (
    <Text
      style={[
        StylesTitreUneLigne.TxtTitle,
        {
          color: 'white',
          top: top !== undefined ? top : 0,
          left: left !== undefined ? left : 0,
          textAlign: textAlign !== undefined ? textAlign : 'left',
          fontFamily:
            fontFamily === undefined
              ? 'Comfortaa-Bold'
              : fontFamily === 2
              ? 'Comfortaa-Light'
              : 'Comfortaa-Bold',
          // fontWeight: fontFamily === 'Comfortaa-Light' ? '100' : '500',
        },
      ]}>
      {txtTitle}
    </Text>
  );
};
