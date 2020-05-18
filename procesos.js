// Variables
let procesos = [];
let contProcesos = 0;
// // Colores aleatorios
var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
// Agrega un area de texto en la pagina html
function agregarTextArea(){
    contProcesos += 1;
    let idEntrada= document.getElementById("procesos");
    let job = document.createElement("text");
    job.innerHTML = `<div class="${ contProcesos % 2 ? "jobc" : "jobc" }">
                     <p>Proceso ${contProcesos}</p>
                     <textarea class="midpro"></textarea>
                     </div>`;
    idEntrada.appendChild( job ); /*es una referencia a un nodo existente en el documento.*/
}
// Crea nuevo proceso recorre los textarea creados
function nuevoProceso(){
    let idProcesos = document.getElementById("procesos").getElementsByTagName("textarea");
      for( let i = 0; i < idProcesos.length; i++ ){
          procesos.push({ // Mete los procesos y los separa
              nombre: idProcesos[ i ] = `Proceso ${(i+1)}`,
              codigo: idProcesos[ i ].value.split("\n"),
              estado: "activo",
          });
      }
  }
// Muestra los procesos y la linea de código y los termina (Muestra el contenido dependiendo de los precesos).
     function simulacion(){
         nuevoProceso();
         let idMostrar = document.getElementById("mostrar");
         // idMostrar.value ="";
         let terminados = 0;
          for( let i = 0;  ; i++ ){
              for( let j = 0; j < procesos.length; j++ ){
                  if( procesos[ j ].codigo[ i ] != undefined ){ 
                      idMostrar.value += "Proceso: " + procesos[ j ].nombre + "\n";
                      idMostrar.value += "Linea de código: " + procesos[ j ].codigo[ i ] + "\n";
                   } else if( procesos[ j ].estado == "activo" ){
                       idMostrar.value += procesos[ j ].nombre + " Terminado" + "\n";
                       procesos[ j ].estado = "inactivo";
                       terminados += 1;
                  }       
                }
                  if( terminados == procesos.length )
                             break;
             }
     }