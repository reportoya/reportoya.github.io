function formacionUnidadesSemanticas(entrada) {
    var palabras = entrada.split(" ");
    var palabrasEnMinuscula = [];
    for (var i=0; i<palabras.length; i++) {
        palabrasEnMinuscula.push(palabras[i].toLowerCase());
    }

    var salida = [];

    var us;
    var j;
    var k=0;

    for (i=0; i<palabras.length; i++) {
        us = "";
        if (!(prefijos.includes(palabrasEnMinuscula[i]))) {
            for (j=k; j<i+1; j++) {
                us = us + " " + palabras[j];
            }
            k=j;
            salida.push(us);
        }
    }

    for (i=0; i<salida.length; i++) {
        salida[i] = salida[i].slice(1);
    }

    return salida;
}

var prefijos = [
"de",
"la",
"que", 
"el",
"en",
"y",
"a",
"los",
"se",
"del",
"las",
"un",
"por",
"con", 
"no",
"una", 
"su",
"para",
"es",
"al",
"lo",
"como", 
"más", 
"o",
"pero",
"sus", 
"le",
"ha",
"me", 
"si",
"sin",
"sobre",
"este",
"ya",
"entre",
"cuando", 
"esta",
"ser",
"son", 
"dos", 
"fue",
"había",
"era",
"muy", 
"hasta",
"desde", 
"está",
"mi",
"porque", 
"qué", 
"sólo",
"han", 
"hay", 
"así",
"nos", 
"ni",
"uno", 
"donde", 
"ese", 
"cada", 
"e",
"otro",
"te",
"aunque", 
"esa", 
"eso", 
"tan",
"durante",
"sí",
"sido",
"según", 
"contra",
"sino",
"estaba", 
"estos",
"ante",
"unos", 
"les",
"hacia",
"hecho", 
"mientras",
"quien",
"esto",
"están",
"tal",
"estas",
"cual",
"tras",
"haber",
"tu",
"estar",
"unas", 
"mis", 
"algunas", 
"esos", 
"alguna",
"aquel",
"cuanto", 
"quienes", 
"esas", 
"bajo",
",",
"dicho",
"estado",
"estando",
"ex",
"habido",
"habiendo",
"mediante",
"nuestro",
"nuestra",
]