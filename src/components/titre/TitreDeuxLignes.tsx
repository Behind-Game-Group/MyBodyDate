import {Text, View} from 'react-native';
import React from 'react';
import StylesTitreDeuxLignes from '../../../assets/style/StyleComposants/StyleTitreDeuxLignes';

type TitreDeuxLignesProps = {
  txtTitle: string;
  txtTitle2: string;
  fontFamily: string | undefined;
  color: string | undefined;
  textAlign: 'left' | 'auto' | 'right' | 'center' | 'justify' | undefined;
  fontSize: number | undefined;
  top: number | undefined;
  left: number | undefined;
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

export const TitreDeuxLignes: React.FC<TitreDeuxLignesProps> = ({
  txtTitle,
  txtTitle2,
  fontFamily,
  color,
  textAlign,
  fontSize,
  top,
  left,
  fontWeight,
}) => {
  return (
    <View
      style={[
        StylesTitreDeuxLignes.ViewText,
        {
          top: top !== undefined ? top : 0,
          left: left !== undefined ? left : 0,
        },
      ]}>
      <Text
        style={[
          StylesTitreDeuxLignes.TxtTitle,
          {
            fontFamily:
              fontFamily !== undefined ? fontFamily : 'Comfortaa-Bold',
            color: color !== undefined ? color : '#fff',
            textAlign: textAlign !== undefined ? textAlign : 'left',
            fontSize: fontSize !== undefined ? fontSize : 24,
            fontWeight: fontWeight !== undefined ? fontWeight : '500',
          },
        ]}>
        {txtTitle}
      </Text>
      <Text
        style={[
          StylesTitreDeuxLignes.TxtTitle,
          {
            fontFamily:
              fontFamily !== undefined ? fontFamily : 'Comfortaa-Bold',
            color: color !== undefined ? color : '#fff',
            textAlign: textAlign !== undefined ? textAlign : 'left',
            fontSize: fontSize !== undefined ? fontSize : 24,
            fontWeight: fontWeight !== undefined ? fontWeight : '500',
          },
        ]}>
        {txtTitle2}
      </Text>
    </View>
  );
};
