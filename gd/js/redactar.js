function redactar(grafo) {
  var texto = "";

  var cadenas = obtenerCadenas(grafo);
  cadenas = ordenarCadenas(cadenas, grafo);
  cadenas = combinarCadenas(cadenas, grafo);

  var nodos = grafo.elements().nodes();

  for (let i=0; i<cadenas.length; i++) {
    for (let j=0; j<nodos.length; j++) {
      if (cadenas[i] == nodos[j]._private.data.id) {
        texto = texto + nodos[j]._private.data.content;
        if (i != cadenas.length - 1) {
          texto = texto + " ";
        } else {
          texto = texto + ".";
        }
      }
    }
  }

  return texto;
}

function obtenerCadenas(grafo) {
  var ejes = grafo.elements().connectedEdges();
  var cBin = cadenasBinarias(ejes);
  var r = raiz(grafo);
  var h = hojas(grafo);
  var cExt = extenderCadenas(cBin,r,h);

  return cExt;
}

function cadenasBinarias(ejes) {
  var cb = new Array();
  for (let i=0; i<ejes.length; i++) {
    cb[i] = new Array();
    cb[i][0] = ejes[i]._private.source._private.data.id;
    cb[i][1] = ejes[i]._private.target._private.data.id;
  }
  return cb;
}

function raiz(grafo) {
  return grafo.elements().roots()[0]._private.data.id;
}

function hojas(grafo) {
  var h = new Array();
  for (let i=0; i<grafo.elements().leaves().length; i++) {
    h[i] = grafo.elements().leaves()[i]._private.data.id;
  }
  return h;
}

function extenderCadenas(cBin, raiz, hojas) {
  var cExt = extenderHastaLaRaiz(cBin,raiz);
  cExt = quitarCadenasIncompletas(cExt,hojas);
  return cExt;
}

function extenderHastaLaRaiz(cBin, raiz) {
  var cExt = new Array();

  for (let i=0; i<cBin.length; i++) {
    cExt[i] = new Array();
    cExt[i][0] = cBin[i][1];
    eslabon = cBin[i][0];
    var j = 0;
    while (eslabon != raiz) {
      if (eslabon == cBin[j][1]) {
        cExt[i].unshift(cBin[j][1]);
        eslabon = cBin[j][0];
        j = 0;
      } else {
        j = j + 1;
      }
      
    }
    cExt[i].unshift(eslabon);
  }

  return cExt;
}

function quitarCadenasIncompletas(cadenas, hojas) {
  var completas = new Array();
  for (let i=0; i<cadenas.length; i++) {
    if (llegaHastaLaHoja(cadenas[i], hojas)) {
      completas.push(cadenas[i]);
    }
  }
  return completas;
}

function llegaHastaLaHoja(cadena, hojas) {
  var posUltimoEslabon = cadena.length - 1;
  var ultimoEslabonEsHoja = hojas.includes(cadena[posUltimoEslabon], hojas);
  return ultimoEslabonEsHoja;
}

function ordenarCadenas(cadenas, grafo) {
  var ordenadas = new Array();
  var posiciones = new Array();
  var nodos = grafo.elements().nodes();

  for (let i=0; i<cadenas.length; i++) {
    posiciones[i] = new Array();
    for (let j=0; j<cadenas[i].length; j++) {
      posiciones[i][j] = obtenerCoordenadaY(cadenas[i][j], nodos);
    }
  }

  var promedios = new Array();

  var suma;

  for (let i=0; i<posiciones.length; i++) {
    suma = 0;
    for (let j=0; j<posiciones[i].length; j++) {
      suma = suma + posiciones[i][j];
    }
    promedios[i] = suma / (posiciones[i].length);
  }

  for (let i=0; i<cadenas.length; i++) {
    cadenas[i].unshift(promedios[i]);
  }

  ordenadas = cadenas.sort(function(a,b) {
    return a[0] - b[0];
  });

  for (let i=0; i<ordenadas.length; i++) {
    ordenadas[i].shift();
  }

  return ordenadas;
}

function obtenerCoordenadaY(cadena, nodos) {
  for (let i=0; i<nodos.length; i++) {
    if (cadena == nodos[i]._private.data.id) {
      return nodos[i]._private.position.y;
    }
  }
}

function combinarCadenas(cadenas, grafo) {
  var combinadas = new Array();
  var nodos = grafo.elements().nodes();

  for (let i=0; i<cadenas.length; i++) {
    for (let j=0; j<cadenas[i].length; j++) {
      if (!(combinadas.includes(cadenas[i][j]))) {
        combinadas.push(cadenas[i][j]);
      }
    }
  }

  return combinadas;
}