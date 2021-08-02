import fp from 'lodash/fp';

export const fibo = (n, mem = {}) => {
  if (n <= 2){
    return 1;
  }
  else if (!mem[n]){        
    return mem[n] = fibo(n-1, mem) + fibo(n-2, mem);
  }
  else {
    return mem[n];
  }
}

export const factorial = (n) => {
  return fp.range(1,n+1).reduce((acc, x) => acc*x);
};

export const multiplicacion = (n) => {
  return n.reduce((acc, x) => acc*x, 1);
};

// Funciones de lodash/fp que les pueden ser útiles a partir de este punto:
// Las vistas en la clase (particularmente fp.flow y fp.curry)
// fp.sortBy (para ordenar un array)
// fp.reverse (para dar vuelta un array)
// fp.first (para obtener el primer valor de un array)

export const atributo = keyName => object => keyName in object ? object[keyName] : false;

export const multiplicarAtributo = fp.curry((keyName, object) => {
  return keyName in object ? multiplicacion(object[keyName]) : false;
});

export const ordenarPor = fp.curry( (keyName, arrayObjects) => { 
  return fp.orderBy( [keyName], ["desc"],  arrayObjects );
});

export const mayorPersona = arrayObjects => fp.first(ordenarPor("edad", arrayObjects)).nombre;
