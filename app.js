let pronombre = ["la", "nuestra"];
let adj = ["genial", "gran"];
let nombre = ["comadreja", "jirafa"];
let dominio = [".com", ".net",".es"];


for (let i=0; i<pronombre.length; i++) { 

    for (let j=0; j<nombre.length; j++) {

        for (let p=0; p<adj.length; p++) {
            for (let r= 0; r< dominio.length; r++) {

                console.log(pronombre[i]+adj[p]+nombre[j]+dominio[r]);
               }

           }
       }
    }