function cadenasBinariasAscendentes(entrada) {
    var salida = [];
    var cb = [];
    var i,j;
    for (i=0; i<entrada.length; i++) {
        for (j=i+1; j<entrada.length; j++) {
            cb.push(entrada[i]);
            cb.push(i+1);
            cb.push(entrada[j]);
            cb.push(j+1);
            salida.push(cb);
            cb = [];
        }
    }

    return salida;
}