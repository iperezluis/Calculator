import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 10,
  },
  calculadoraContainer: {
    flex: 1,
    textAlign: 'right',
    justifyContent: 'flex-end',
  },
  result: {
    color: 'white',
    fontSize: 50,
    textAlign: 'right',
    marginHorizontal: 15,
  },
  resultPequeño: {
    color: 'rgba( 255,255,255, 0.5)',
    fontSize: 20,
    textAlign: 'right',
    marginHorizontal: 20,
  },
  boton: {
    // backgroundColor: '9B9B9B',
    width: 55,
    height: 55,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    // flexWrap: 'wrap',
  },
  naranja: {
    backgroundColor: '#FF9427',
  },
  negro: {
    backgroundColor: '#2D2D2D',
    color: '#DDDD',
  },
  gris: {
    backgroundColor: '#B9B9B9',
  },
  grisText: {
    color: 'black',
  },
  ancho: {
    width: 140,
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
