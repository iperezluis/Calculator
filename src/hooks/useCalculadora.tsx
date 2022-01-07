import {useRef, useState} from 'react';

export const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const clean = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };
  enum Operadores {
    sumar,
    restar,
    dividir,
    multiplicar,
  }
  //vamos a usar useRef para identificar cada boton sin que se renderice el screen y usamos el generico <Operadores>
  const ultimaOperacion = useRef<Operadores>();

  //el parametro numeroTexto que ponemos  en este parentesis de esta funcion es es el text destructurado que pusiste  en el parametro del onPress en el screen BotonCal.tsx chequea para que lo tomes en cuanta
  const valorTexto = (numeroTexto: string) => {
    //aqui hacemos todas las validaciones
    if (numeroTexto === '.' && numero.includes('.')) {
      return;
    }

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };
  //vamos a validar los numeros
  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };
  //recuerda que para usar el slice enm la posicon que quieras eliminar debes especificar el 0
  const Delete = () => {
    let negativo = '';
    let numeroTemp = numero;
    if (numero.includes('-')) {
      negativo = '-';
      //con substring le cortamos la promera posicion al numero que tengamos
      numeroTemp = numero.substring(1);
    }

    if (numeroTemp.length > 1) {
      setNumero(negativo + numeroTemp.slice(0, -1));
    } else {
      setNumero('0');
    }
  };
  const NumeroAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };
  const sumar = () => {
    NumeroAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };
  const restar = () => {
    NumeroAnterior();
    ultimaOperacion.current = Operadores.restar;
  };
  const multiplicar = () => {
    NumeroAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };
  const dividir = () => {
    NumeroAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };
  const calcular = () => {
    //los transformamos primero a numeros para poder hacer el calculo
    let num1 = Number(numeroAnterior);
    let num2 = Number(numero);
    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero((num1 + num2).toString());
        break;
      case Operadores.restar:
        setNumero((num1 - num2).toString());
        break;
      case Operadores.multiplicar:
        setNumero((num1 * num2).toString());
        break;
      case Operadores.dividir:
        setNumero((num1 / num2).toString());
        break;
      default:
        //para todos los casos se va a ejecutar esta funciomn por default
        NumeroAnterior();
    }
  };
  return {
    valorTexto,
    positivoNegativo,
    Delete,
    sumar,
    restar,
    multiplicar,
    dividir,
    calcular,
    clean,
    numeroAnterior,
    numero,
  };
};
