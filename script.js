window.addEventListener("load", inicio);

// CLASES Y VARIABLES GLOBALES
class ClaseLocales { //Clase de local con sus respectivas propiedades.
  constructor(
    unNumero, 
    unNombre,
    unaImagen,
    unaDireccion,
    unCupoMaximo,
    unasReservasRestantes,
    unEstado,
    unUsuario,
    unaContrasenia,
    unTipo,
    unNoDisponible,
    unaReserva = []
  ) {
    this.numero = unNumero;
    this.nombre = unNombre;
    this.imagen = unaImagen;
    this.direccion = unaDireccion;
    this.cupoMaximo = unCupoMaximo;
    this.reservasRestantes = unasReservasRestantes
    this.estado = unEstado;
    this.usuario = unUsuario;
    this.contrasenia = unaContrasenia;
    this.tipo = unTipo;
    this.noDisponible = unNoDisponible;
    this.reservas = unaReserva;
  }
  
  cambiarCupoMaximo(nuevoCupoMaximo) { //Metodo ubicado dentro de la clase local, para poder modificar el cupo maximo / Reservas restantes.
    let aumento = nuevoCupoMaximo - this.cupoMaximo;
    if (nuevoCupoMaximo > 0) {
      this.cupoMaximo = nuevoCupoMaximo
      this.reservasRestantes = this.reservasRestantes + aumento;
      alert("Datos guardados correctamente");
    } else {
      alert("El cupo máximo debe ser mayor a 0")
    } 
  }
} 

class Usuarios { //Clase de usuario con sus respectivas propiedades.
  constructor(
    unNombre,
    unNumero,
    unUsuario,
    unaContrasenia,
    unaReserva = []
    ) {
    this.nombre = unNombre;
    this.numero = unNumero;
    this.usuario = unUsuario;
    this.contrasenia = unaContrasenia;
    this.reservas = unaReserva;
  }
}

class Reservas { //Clase de reserva, la cual posteriormente se agregará como elemento del array reservas de locales y usuarios.
  constructor(
    unNombre,
    unUsuario,
    unLocal,
    unaImagen,
    unaCantidad,
    unEstado,
    unaCalificacion
  ) {
    this.nombre = unNombre
    this.usuario = unUsuario
    this.local = unLocal
    this.imagen = unaImagen
    this.cantidad = unaCantidad
    this.estado = unEstado
    this.calificacion = unaCalificacion
  }
}

//ARREGLOS
let divs = [];
let locales = [ //Locales precargados dentro del array.
  new ClaseLocales (1, "McDonalds", "imagenes/Mcdonalds.jpeg", "8 de Octubre 3395", 20, 18, "Habilitado", "Mc2022", "RonaldMcDonalds10", "Restaurante", false, [new Reservas ("Marcelo", "marcelogesti", "McDonalds", "imagenes/Mcdonalds.jpeg", 2, "Pendiente")] ),
  new ClaseLocales (2, "Burger King", "imagenes/BK.jpeg", "Luis Alberto de Herrera 3365", 20, 18, "Habilitado", "BurgerKing2022", "Bk123", "Restaurante", false, [new Reservas ("Agustin", "agustinlarre", "Burger King", "imagenes/BK.jpeg", 2, "Pendiente")]),
  new ClaseLocales (3, "Pizza Hut", "imagenes/PizzaHut.jpeg", "2101 NW 17th Av.", 20, 13, "Habilitado", "PizzaHut2022", "CheeseLover99", "Restaurante", false, [new Reservas ("Rita", "ritabogg", "Pizza Hut", "imagenes/PizzaHut.jpeg", 3, "Finalizada", 3), new Reservas ("Emilia", "emilarre", "Pizza Hut", "imagenes/PizzaHut.jpeg", 4, "Pendiente")]),
  new ClaseLocales (4, "Louvre", "imagenes/Louver.jpeg", "Rue de Rivoli 75001", 60, 56, "Habilitado", "LouvreMus2022", "Gioconda77", "Museo", false, [new Reservas ("Rita", "ritabogg", "Louvre", "imagenes/Louver.jpeg", 4, "Pendiente")]),
  new ClaseLocales (5, "Madame Tussauds", "imagenes/MadamTuseau.jpeg", "234 W 42nd St.", 50, 47, "Habilitado", "MTuss2022", "Wax123", "Museo", false, [new Reservas ("Gabriela", "gabrielaten", "Madame Tussauds", "imagenes/MadamTuseau.jpeg", 3, "Pendiente")]),
  new ClaseLocales (6, "Teatro Solis", "imagenes/TeatroSolis.jpeg", "Reconquista 11000", 30, 27, "Habilitado", "SolisT2022", "CiudadVieja150", "Teatro", false, [new Reservas ("Martin", "martincantor", "Teatro Solis", "imagenes/TeatroSolis.jpeg", 1, "Pendiente"), new Reservas ("Gabriela", "gabrielaten", "Teatro Solis", "imagenes/TeatroSolis.jpeg", 2, "Finalizada", 4)]),
  new ClaseLocales (7, "Opera de Sidney", "imagenes/Sidney.jpeg", "Bennelong Point, Sydney NSW 2000", 40, 38, "Habilitado", "SidneyOp2022", "Cangaroo80", "Teatro", false, [new Reservas ("Martin", "martincantor", "Opera de Sidney", "imagenes/Sidney.jpeg", 2, "Finalizada", 4)]),
];

let usuarios = [ //Usuarios precargados dentro del array, cada uno con sus datos característicos.

  new Usuarios ("Marcelo", 1, "marcelogesti", "Marcelo123", [new Reservas ("Marcelo", "marcelogesti", "McDonalds", "imagenes/Mcdonalds.jpeg", 2, "Pendiente")]),
  
  new Usuarios ("Agustin", 2, "agustinlarre", "Agustin123", [new Reservas ("Agustin", "agustinlarre", "Burger King", "imagenes/BK.jpeg", 2, "Pendiente")]),
  new Usuarios ("Emilia", 3, "emilarre", "Emilia123", [new Reservas ("Emilia", "emilarre", "Pizza Hut", "imagenes/PizzaHut.jpeg", 4, "Pendiente")]),
  
  new Usuarios ("Martin", 4, "martincantor", "Martin123", [new Reservas ("Martin", "martincantor", "Teatro Solis", "imagenes/TeatroSolis.jpeg", 1, "Pendiente"), new Reservas ("Martin", "martincantor", "Opera de Sidney", "imagenes/Sidney.jpeg", 2, "Finalizada", 4)]),
  new Usuarios ("Gabriela", 5, "gabrielaten", "Gabriela123", [new Reservas ("Gabriela", "gabrielaten", "Madame Tussauds", "imagenes/MadamTuseau.jpeg", 3, "Pendiente"), new Reservas ("Gabriela", "gabrielaten", "Teatro Solis", "imagenes/TeatroSolis.jpeg", 2, "Finalizada", 4)]),
  new Usuarios ("Rita", 6, "ritabogg", "Rita123", [new Reservas ("Rita", "ritabogg", "Louvre", "imagenes/Louver.jpeg", 4, "Pendiente"), new Reservas ("Rita", "ritabogg", "Pizza Hut", "imagenes/PizzaHut.jpeg", 3, "Finalizada", 3)]),

  new Usuarios ("Federico", 7, "fedesurf", "Federico123"),
  new Usuarios ("Luca", 8, "profeluca", "Luca123"),
  new Usuarios ("Diego", 9, "diegosalvavidas", "Diego123")
]

// CARGADO DE BOTONES Y FUNCIONES GENERALES
function inicio() {
  document
    .querySelector("#btnIngresoLocal")
    .addEventListener("click", ingresoLocal);
  document
    .querySelector("#btnIngresoUs")
    .addEventListener("click", ingresoUsuario);
  document
    .querySelector("#botonVolverLocal")
    .addEventListener("click", ingresoLocalReturn);
  document
    .querySelector("#btnVolverUsuario")
    .addEventListener("click", ingresoUsuarioReturn);
  document
    .querySelector("#btnLoginToRegister")
    .addEventListener("click", loginToRegister);
  document
    .querySelector("#btnFinalizarRegistro")
    .addEventListener("click", registroUsuario);
  document
    .querySelector("#btnVolverRegistroPersonas")
    .addEventListener("click", registroUsuarioReturn);
  document
    .querySelector("#loginUsernameLocal")
    .addEventListener("click", IngresarSesionLocal);
  document
    .querySelector("#cambiarEstado")
    .addEventListener("click", cambiarEstado);
  document
    .querySelector("#btnSelectFuncionesLocales")
    .addEventListener("click", selectFuncionesLocal);
  document
    .querySelector("#btnCerrarSesionLocal")
    .addEventListener("click", cerrarSesionLocal);
  document.querySelector("#btnBuscarReservaPendiente").addEventListener("click", reservasLocal);
  document.querySelector("#btnFinalizarReserva").addEventListener("click", finalizarReserva);
  document
    .querySelector("#btnReservasLocalMenu")
    .addEventListener("click", volverDesdeReservasLocal);
  document
    .querySelector("#modificarCupoMaximo")
    .addEventListener("click", modificarCupoMaximoLocal);
  document
    .querySelector("#btnCupoMaximoLocalMenu")
    .addEventListener("click", volverDesdeCupoMaximoLocal);
  document
    .querySelector("#btnInformacionEstadisticaMenu")
    .addEventListener("click", volverDesdeInfoEstadisticaLocal);
  document
    .querySelector("#loginUsername")
    .addEventListener("click", ingresoSesionUsuario);
  document
    .querySelector("#btnCerrarSesionUsuario")
    .addEventListener("click", cerrarSesionUsuario);
  document
    .querySelector("#btnSelectFuncionesUsuarios")
    .addEventListener("click", selectFuncionesUsuario);
  document
    .querySelector("#btnReservaUsuarioMenu")
    .addEventListener("click", volverDesdeReservasUsuario);
  document
    .querySelector("#btnReservasPendientesUsuarioMenu")
    .addEventListener("click", volverDesdeReservasPendientesUsuario);
  document
  .querySelector("#btnCancelarReserva").addEventListener("click", cancelarReservaUsuario)
  document
    .querySelector("#btnCancelarUsuarioMenu")
    .addEventListener("click", volverDesdeCancelarReservasUsuario);
  document
  .querySelector("#btnCalificar")
  .addEventListener("click", calificarReservaFinalizada)  
  document
    .querySelector("#btnPuntajeReservaUsuarioMenu")
    .addEventListener("click", volverDesdePuntuarReservasUsuario);
  document
    .querySelector("#btnInformacionEstadisticaUsuarioMenu")
    .addEventListener("click", volverDesdeInfoEstadisticaUsuario);
  document
    .querySelector("#btnReservaUsuario")
    .addEventListener("click", hacerReserva);
  cargarDivs();
  mostrarDivs("paginaInicial");
}

// CARGADO DE DIVS
function cargarDivs() {
  divs.push(document.querySelector("#paginaInicial"));
  divs.push(document.querySelector("#ingresoLocal"));
  divs.push(document.querySelector("#inicioLocal"));
  divs.push(document.querySelector("#reservasLocal"));
  divs.push(document.querySelector("#cupoMaximoLocal"));
  divs.push(document.querySelector("#divInformacionEstadisticaLocal"));
  divs.push(document.querySelector("#ingresoPersonas"));
  divs.push(document.querySelector("#registroPersona"));
  divs.push(document.querySelector("#inicioUsuario"));
  divs.push(document.querySelector("#funcionReservarUsuario"));
  divs.push(document.querySelector("#divReservasPendientesUsuario"));
  divs.push(document.querySelector("#cancelarReservaUsuario"));
  divs.push(document.querySelector("#puntuarReservaUsuario"));
  divs.push(document.querySelector("#divInformacionEstadisticaUsuario"));

}

// BOTON PARA PAGINA INGRESO LOCAL DESDE INICIO
function ingresoLocal() {
  esconderDivs();
  mostrarDivs("ingresoLocal");
}

// BOTON VOLVER AL INICIO DESDE INGRESO LOCAL
function ingresoLocalReturn() {
  document.querySelector("#txtUsernameLocal").value = ""; //Se resetean los input type text para volver a iniciar sesión
  document.querySelector("#txtPasswordUsernameLocal").value = "";
  document.querySelector("#mensajeErrorInicioLocal").innerHTML = ""
  volverAInicio();
}

// BOTON PARA INGRESAR A SESION DE LOCAL (SE PERMITE UNA VEZ QUE SE HAYA INGRESADO UNA CUENTA VALIDA)
let NombreLocalSeleccionado;
let localSeleccionado = "";

function IngresarSesionLocal() {
  let existe = false;
  let usuarioLocal = document.querySelector("#txtUsernameLocal").value; //Se asignan todos los inputs y párrafos a variables.
  let contraseniaLocal = document.querySelector("#txtPasswordUsernameLocal").value;
  let titulo = document.querySelector("#localName");
  let imagenLocal = document.querySelector("#fotosLocales");
  let numeroLocal = document.querySelector("#numeroIdentificacionLocal");
  let nombreLocal = document.querySelector("#nombreInicioLocal");
  let tipoLocal = document.querySelector("#tipoInicioLocal");
  let direccionLocal = document.querySelector("#direccionInicioLocal");
  let cupoMaximoDelLocal = document.querySelector("#cupoMaximoInicioLocal");
  let mensajeErrorInicioLocal = document.querySelector("#mensajeErrorInicioLocal")

  for (let i = 0; i < locales.length; i++) {
    if (
      locales[i].usuario == usuarioLocal &&
      locales[i].contrasenia == contraseniaLocal
    ) {
      existe = true;
      esconderDivs();
      mostrarDivs("inicioLocal");
      document.querySelector("#txtUsernameLocal").value = ""
      document.querySelector("#txtPasswordUsernameLocal").value = ""
      localSeleccionado = locales[i]; //IMPORTANTE ya que toma el objeto (local) y sus propiedades guardadas para futuras modificaciones.
      NombreLocalSeleccionado = localSeleccionado.nombre; //Se precargan los datos para que aparezcan una vez logueado.
      titulo.innerHTML = NombreLocalSeleccionado;
      imagenLocal.src = localSeleccionado.imagen;
      numeroLocal.innerHTML = localSeleccionado.numero;
      nombreLocal.innerHTML = localSeleccionado.nombre;
      tipoLocal.innerHTML = localSeleccionado.tipo;
      direccionLocal.innerHTML = localSeleccionado.direccion;
      cupoMaximoDelLocal.innerHTML = localSeleccionado.cupoMaximo;
    }
  }
  if (!existe){
    mensajeErrorInicioLocal.innerHTML = "Usuario o constraseña incorrecto" //En caso de que la variable en booleano sea false, notificará error.
  }
  console.log(localSeleccionado)
}

// MODIFICAR EL ESTADO DEL LOCAL (DISPONIBLE/NO DISPONIBLE)
function cambiarEstado() {
  let checkDisponible = document.querySelector("#estadoDisponible");
  let checkNoDisponible = document.querySelector("#estadoNoDisponible");
  let tienePendientes = false

  for (let i=0; i<localSeleccionado.reservas.length; i++){
    if (localSeleccionado.reservas[i].estado == "Pendiente") { //Primero se corrobora que no hayan reservas pendientes.
      tienePendientes = true
    }
  }

  if (checkDisponible.checked) {
    localSeleccionado.noDisponible = false;
    alert("Datos guarados correctamente")
  }
  if (checkNoDisponible.checked && !tienePendientes ){ //Solo se puede confirmar el cambio si no hay reservas pendientes.
    localSeleccionado.noDisponible = true;
    alert("Datos guarados correctamente")
  }

  if (checkNoDisponible.checked && tienePendientes){ //De lo contrario, se notificará con un párrafo.
      alert("No debe modificarse el estado del local si hay reservas pendientes")
  }

  console.log(localSeleccionado.noDisponible)
}

// SELECT DE FUNCIONES LOCAL
function selectFuncionesLocal() {
  let select = document.querySelector("#funcionesLocales").value;
  let cupoMaximoInicial = document.querySelector("#cupoMaximoActual");
  cupoMaximoInicial.innerHTML = localSeleccionado.cupoMaximo;
  
  switch (select) { //En el caso de seleccionar cualquier opción, se mostrará la pestana con su div correspondiente.
    case "reservas":
      esconderDivs();
      mostrarDivs("reservasLocal");
      preloaded(); //Precargado de datos, mostrando el listado de reservas pendientes y finalizadas del local.
      break;
    case "cupoMaximo":
      esconderDivs();
      mostrarDivs("cupoMaximoLocal");
      break;
    case "informacionEstadisticaLocal":
      esconderDivs();
      mostrarDivs("divInformacionEstadisticaLocal");
      preloadedStatsLocal(); //Precargado de datos, mostrando la información estadística del local.
      break;
  }
}

// PRECARGADO DE DATOS FUNCION RESERVA (DESDE LOCAL)
function preloaded(){
  let existenReservas = false;
  let parrafoReservasPendientes = document.querySelector("#radioListadoReservasPendientes");
  let listadoReservasFinalizadas = document.querySelector("#listaReservasFinalizadasLocal");
  listadoReservasFinalizadas.innerHTML = "";

  for (let j = 0; j < localSeleccionado.reservas.length; j++){ //Recorrido de reservas, de haber finalizadas, se imprimen en un listado.
    if (localSeleccionado.reservas[j].estado == "Finalizada"){
      listadoReservasFinalizadas.innerHTML += "<li> " + localSeleccionado.reservas[j].nombre + " - Cantidad - " + localSeleccionado.reservas[j].cantidad + "</li>";
    }
  }
  parrafoReservasPendientes.innerHTML = "";

  for (let i = 0; i < localSeleccionado.reservas.length; i++){ //Se genera un listado de radio buttons con las reservas en estado pendiente.
    if (localSeleccionado.reservas[i].estado == "Pendiente"){
      parrafoReservasPendientes.innerHTML += "<input type='radio' name='reservasPendientes' class='resPen'> " + localSeleccionado.reservas[i].nombre + " -  Cantidad - " + localSeleccionado.reservas[i].cantidad + "<br/><br/>";
      existenReservas = true;
    } else {
      parrafoReservasPendientes.innerHTML += "<input type='radio' hidden name='reservasPendientes' class='resPen'>";
    }
  }

  if (!existenReservas){ //En caso de no haber reservas, se notifica a través de un párrafo.
    parrafoReservasPendientes.innerHTML = "De momento no hay reservas pendientes.</br></br>";
  }
}

// BUSCAR RESERVAS PENDIENTES DESDE EL LOCAL
function reservasLocal(){
  let existe = false;
  let buscadorReservas = document.querySelector("#buscadorReservaPendiente").value.toLowerCase(); //Ya se pasa el buscador a case insensitive
  let parrafoReservasPendientes = document.querySelector("#radioListadoReservasPendientes");
  parrafoReservasPendientes.innerHTML = "";

  for (let i = 0; i < localSeleccionado.reservas.length; i++){
    if (localSeleccionado.reservas[i].nombre.toLowerCase().indexOf(buscadorReservas) != -1 && localSeleccionado.reservas[i].estado == "Pendiente") { //En caso de que lo escrito en el campo de texto coincida con algún fragmento del nombre del usuario, se imprimirá/n dicho/s nombre/s
      existe = true;
      parrafoReservasPendientes.innerHTML += "<input type='radio' name='reservasPendientes' class='resPen'> " + localSeleccionado.reservas[i].nombre + " - Cantidad: " + localSeleccionado.reservas[i].cantidad + "</br></br>";
      console.log(localSeleccionado.reservas[i]);
    } else { //En el caso de no haber coincidencias (con usuarios con reservas pendientes), se esconderán los radio button. Si bien siguen estando presentes (ya que cada uno está vinculado a un usuario), no son visibles por el usuario, por ende, no pueden ser chequeados
      parrafoReservasPendientes.innerHTML += "<input type='radio' hidden name='reservasPendientes' class='resPen'> ";
    }
  }

  if (!existe){ //Si no existe el usuario buscado, una vez apretado el botón se vuelve a resetear el listado con reservas pendientes
    alert("El nombre ingresado no figura dentro de las reservas. Intente nuevamente...")
    for (let j = 0; j < localSeleccionado.reservas.length; j++){
      if (localSeleccionado.reservas[j].estado == "Pendiente"){
        parrafoReservasPendientes.innerHTML += "<input type='radio' name='reservasPendientes' class='resPen'> " + localSeleccionado.reservas[j].nombre + " -  Cantidad - " + localSeleccionado.reservas[j].cantidad + "<br/><br/>";
      }
    }
  }

  console.log(buscadorReservas);
}

// FINALIZAR RESERVAS LOCAL
function finalizarReserva(){   
  let radioReservaPendiente = document.querySelectorAll(".resPen"); //Se invoca a la clase de radio buttons del listado de reservas pendientes (explicado en la función anterior)
  let listadoReservasFinalizadas = document.querySelector("#listaReservasFinalizadasLocal"); //Párrafo que genera el listado de reservas finalizadas
  let parrafoReservasPendientes = document.querySelector("#radioListadoReservasPendientes");
  let usuarioFinalizado = ""
  parrafoReservasPendientes.innerHTML = "";
  listadoReservasFinalizadas.innerHTML = "";

  for (let i = 0; i < radioReservaPendiente.length; i++){
    if (radioReservaPendiente[i].checked){ //Recorrido por la clase de radio buttons, en caso de que una de ellas sea chequeada, su respectivo usuario quedará con su reserva en estado "finalizada"
      alert("Datos guardados correctamente");
      localSeleccionado.reservas[i].estado = "Finalizada"; // SE FINALIZA EL ESTADO DE LA RESERVA SELECCIONADA
      localSeleccionado.reservasRestantes += localSeleccionado.reservas[i].cantidad
      usuarioFinalizado = localSeleccionado.reservas[i].usuario //Aquel usuario chequeado pasa a guardarse dentro de una nueva variable
    }
  }

  for (let k=0; k<usuarios.length; k++){
    if (usuarios[k].usuario == usuarioFinalizado) {
      for(l = 0; l < usuarios[k].reservas.length; l++){
        if (usuarios[k].reservas[l].local == localSeleccionado.nombre && usuarios[k].reservas[l].estado == "Pendiente") {
          usuarios[k].reservas[l].estado = "Finalizada"
          console.log(usuarios[k].reservas[l].estado)
        }
      }
    }
  }

  for (let j = 0; j < localSeleccionado.reservas.length; j++){ //Se genera un listado con las reservas finalizadas
    if (localSeleccionado.reservas[j].estado == "Finalizada"){
      listadoReservasFinalizadas.innerHTML += "<li> " + localSeleccionado.reservas[j].nombre + " - Cantidad - " + localSeleccionado.reservas[j].cantidad + "</li>";
    }
  }

  for (let n = 0; n < localSeleccionado.reservas.length; n++){ //Se vuelve a actualizar el listado de reservas pendientes, corroborando nuevamente el estado de cada reserva realizada en el local seleccionado
    if (localSeleccionado.reservas[n].estado == "Pendiente"){
      parrafoReservasPendientes.innerHTML += "<input type='radio' name='reservasPendientes' class='resPen'> " + localSeleccionado.reservas[n].nombre + " -  Cantidad - " + localSeleccionado.reservas[n].cantidad + "<br/><br/>";
    } else {
      parrafoReservasPendientes.innerHTML += "<input type='radio' hidden name='reservasPendientes' class='resPen'>";
    }
  }
  console.log(localSeleccionado);
}

// PRECARGADO DE DATOS FUNCION INFORMACION ESTADISTICA (DESDE LOCAL)
function preloadedStatsLocal(){
  let porcentajeOcupacion = document.querySelector("#porcentajeOcupacion");
  let reservasPendientesInfoLocal = document.querySelector("#reservasPendientesInfoLocal");
  let promedioCalificacionLocal = document.querySelector("#promedioCalificacionLocal");
  let promedioCalificacionOtros = document.querySelector("#promedioCalificacionOtros");
  let promedioCalificacionLocalRed = document.querySelector("#promedioCalificacionLocalRed");
  let cantidadPendientes = 0;
  let reservasFinalizadasInfoLocal = document.querySelector("#reservasFinalizadasInfoLocal");
  let cantidadFinalizadas = 0;
  let sumaCalificacionesLocal = 0;
  let cantidadCalificaciones = 0;
  promedioCalificacionOtros.innerHTML = "";
  promedioCalificacionLocalRed.innerHTML = "";
  
  // PORCENTAJE DE OCUPACION
  let resultadoPorcentaje = ((localSeleccionado.cupoMaximo - localSeleccionado.reservasRestantes) * 100) / localSeleccionado.cupoMaximo;
  porcentajeOcupacion.innerHTML = resultadoPorcentaje + "%";

  // CANTIDAD DE RESERVAS PENDIENTES
  for (let j=0; j < localSeleccionado.reservas.length; j++){
    if (localSeleccionado.reservas[j].estado == "Pendiente") {
      cantidadPendientes += 1
    }
  }
  reservasPendientesInfoLocal.innerHTML = " " + cantidadPendientes

  // CANTIDAD DE RESERVAS FINALIZADAS
  for (let k=0; k < localSeleccionado.reservas.length; k++){
    if (localSeleccionado.reservas[k].estado == "Finalizada") {
      cantidadFinalizadas += 1
    }
  }
  reservasFinalizadasInfoLocal.innerHTML = " " + cantidadFinalizadas

  // CALIFICACION PROMEDIO DEL LOCAL
  for (let l = 0; l < localSeleccionado.reservas.length; l++){
    if (localSeleccionado.reservas[l].estado == "Finalizada" && !isNaN(localSeleccionado.reservas[l].calificacion)) {
      sumaCalificacionesLocal +=  localSeleccionado.reservas[l].calificacion
      cantidadCalificaciones += 1
    }
  }

  if (cantidadCalificaciones == 0){
    promedioCalificacionLocalRed.innerHTML = "De momento no hay reservas calificadas"
  } else {
    promedioCalificacionLocal.innerHTML = "Calificacion promedio: " + sumaCalificacionesLocal / cantidadCalificaciones;
  }

  for (let k=0; k<locales.length; k++){
    let contadorReservas = 0
    let sumaCalificacionesLocales = 0
      for(let l=0; l<locales[k].reservas.length; l++){
          if (locales[k].reservas[l].estado == "Finalizada" && !isNaN(locales[k].reservas[l].calificacion)) {
              sumaCalificacionesLocales += locales[k].reservas[l].calificacion
              contadorReservas += 1
          }
      }
      if (contadorReservas > 0) {
        promedioCalificacionOtros.innerHTML += "<li>" + locales[k].nombre + ": " + sumaCalificacionesLocales / contadorReservas + "</li>"
      } else {
        promedioCalificacionOtros.innerHTML += "<li>" + locales[k].nombre + ": Sin calificaciones.</li>"
      }  
  }
}

// CERRAR SESION LOCAL
function cerrarSesionLocal() {
  let listadoReservasPendientes = document.querySelector("#radioListadoReservasPendientes");
  let listadoReservasFinalizadas = document.querySelector("#listaReservasFinalizadasLocal");
  listadoReservasPendientes.innerHTML = "";
  listadoReservasFinalizadas.innerHTML = "";
  volverAInicio();
  document.querySelector("#mensajeErrorInicioLocal").innerHTML = ""
  localSeleccionado = "";
}

// MODIFICAR CUPO MAXIMO LOCAL
function modificarCupoMaximoLocal() {
  let modificador = Number(document.querySelector("#cupoMaximoNuevo").value);
  let cupoMaximoInicial = document.querySelector("#cupoMaximoActual");
  let reservasPendientes = false

  for (let i = 0; i < localSeleccionado.reservas.length; i++){ //Recorrido de estados de reservas
    if (localSeleccionado.reservas[i].estado == "Pendiente") {
      reservasPendientes = true
    }
  }
  if (reservasPendientes){ //En caso de haber reservas pendientes, no se permite la modificación del cupo máximo
    alert("No se puede cambiar el cupo máximo si existen reservas pendientes");
  } else {
    localSeleccionado.cambiarCupoMaximo(modificador);
    cupoMaximoInicial.innerHTML = localSeleccionado.cupoMaximo;
  }
  console.log(localSeleccionado.cupoMaximo);
}

// BOTON VOLVER AL MENU DESDE RESERVAS LOCAL
function volverDesdeReservasLocal() {
  volverMenuLocal();
  document.querySelector("#promedioCalificacionLocalRed").innerHTML = ""
}

// FUNCION PARA VOLVER AL MENU DESDE CUPO MAXIMO LOCAL
function volverDesdeCupoMaximoLocal() {
  volverMenuLocal();
}

// FUNCION PARA VOLVER AL MENU DESDE INFO ESTADISTICA LOCAL
function volverDesdeInfoEstadisticaLocal() {
  volverMenuLocal();
}

// PAGINA INGRESO USUARIO
function ingresoUsuario() {
  esconderDivs();
  mostrarDivs("ingresoPersonas");
}

// BOTON PARA IR A REGISTRO
function loginToRegister() {
  esconderDivs();
  mostrarDivs("registroPersona");
  document.querySelector("#txtUsernamePersona").value = "";
  document.querySelector("#txtPasswordUsernamePersona").value = "";
  let aviso = document.querySelector("#avisoUsuarioInexistente");
  aviso.innerHTML = "";
}

// BOTON PARA VOLVER AL INICIO DESDE INGRESO USUARIO
function ingresoUsuarioReturn() {
  volverAInicio();
  document.querySelector("#txtUsernamePersona").value = "";
  document.querySelector("#txtPasswordUsernamePersona").value = "";
  let aviso = document.querySelector("#avisoUsuarioInexistente");
  aviso.innerHTML = "";
}

let contador = 10;
// PAGINA REGISTRO USUARIO
function registroUsuario() {
  let nombre = document.querySelector("#txtName").value;
  let username = document.querySelector("#txtUsernamePersonaRegister").value;
  let usernamePassword = document.querySelector(
    "#txtPasswordUsernameRegister"
  ).value;
  let password2 = document.querySelector("#repeatPassword").value;
  let aviso = document.querySelector("#avisoRegistro");
  let usuarioCreado = document.querySelector("#usuarioCreado");
  aviso.innerHTML = "";
  usuarioCreado.innerHTML = "";

  let usuarioNuevo = new Usuarios(nombre, contador, username, usernamePassword); //Se asigna una variable a la clase Usuarios con su constructor correspondiente

  if (username.length == 0 || nombre.length == 0) {
    aviso.innerHTML = "Debe ingresar un nombre y un nombre de usuario";
  } else if (wrongPassword(usernamePassword)) {
    aviso.innerHTML =
      "La contraseña debe contener al menos 6 caracteres, una mayúscula, una minúscula y un número";
  } else if (usernamePassword != password2) {
    aviso.innerHTML = "Las contraseñas no coinciden";
  } else if (usuarioExistente(username)) { //Recorrido de los nombres de los usuarios ya registrados dentro del array de usuarios (la función aparece a continuación), se toma como parámetro el nombre de usuario ingresado en el campo de texto
    aviso.innerHTML = "El usuario ya existe";
  } else {
    contador = contador + 1; // Funcion generica definida en la parte superior del codigo.
    usuarios.push(usuarioNuevo); // IMPORTANTE: En caso de que todos los datos sean válidos, se pushea al array de usuarios (ya con 9 usuarios precargados) el nuevo usuario
    usuarioCreado.innerHTML = "Usuario creado correctamente";
    document.querySelector("#txtName").value = "";
    document.querySelector("#txtUsernamePersonaRegister").value = "";
    document.querySelector("#txtPasswordUsernameRegister").value = "";
    document.querySelector("#repeatPassword").value = "";
  }
}

// FUNCION PARA VERIFICAR QUE EL USUARIO NO EXISTE CUANDO SE REGISTRA
function usuarioExistente(username) {
  let existe = false;
  let minusculaUsername = username.toLowerCase();

  for (let i = 0; i < usuarios.length && !existe; i++) {
    for (let j=0; j < locales.length && !existe; j++)
    if (
      usuarios[i].usuario.toLowerCase() == minusculaUsername || 
      locales[j].usuario.toLowerCase() == minusculaUsername
    ) {
      existe = true;
    }
  }
  return existe;
}

// FUNCION PARA VERIFICAR SI LA CONTRASEÑA CONTIENE AL MENOS 1 MAY, 1 MIN, 6 CARCT Y 1 NUMERO
function wrongPassword(usernamePassword) {
  let incorrecto = false;
  let contadorMay = 0;
  let contadorMin = 0;
  let contadorNum = 0;

  if (usernamePassword.length <= 5) {
    incorrecto = true;
  }
  for (let i = 0; i < usernamePassword.length && !incorrecto; i++) {
    let letra = usernamePassword.charAt(i);
    if (
      letra == "0" ||
      letra == "1" ||
      letra == "2" ||
      letra == "3" ||
      letra == "4" ||
      letra == "5" ||
      letra == "6" ||
      letra == "7" ||
      letra == "8" ||
      letra == "9"
    ) {
      contadorNum += 1;
    } 
    if (isNaN(letra) && 
      letra == letra.toUpperCase()
    ) {
      contadorMay += 1;
    } 
    if (isNaN(letra) && 
      letra == letra.toLowerCase()
    ) {
      contadorMin += 1;
    }
  }
  if (contadorMin == usernamePassword.length - contadorNum) {
    incorrecto = true;
  }
  if (contadorMay == usernamePassword.length - contadorNum) {
    incorrecto = true;
  }
  if (contadorNum == 0) {
    incorrecto = true;
  }
  return incorrecto;
}

let usuarioLogueado = ""
// BOTON PARA INGRESAR A SESION DE USUARIO
function ingresoSesionUsuario() {
  let userName = document.querySelector("#txtUsernamePersona").value;
  let password = document.querySelector("#txtPasswordUsernamePersona").value;
  let aviso = document.querySelector("#avisoUsuarioInexistente");
  let titulo = document.querySelector("#tituloInicioUsuario");
  let numeroSpan = document.querySelector("#numeroIdentificacionusuario");
  let nombreSpan = document.querySelector("#nombreSpan");
  let usuarioSpan = document.querySelector("#usuarioSpan");
  aviso.innerHTML = "";
  let existe = false;
  let user = search(usuarios, "usuario", userName); //Método para buscar si el usuario ingresado en el campo de texto coincide con uno de los usuarios ya registrados

  for (let i = 0; i < usuarios.length; i++) {
    if (
      userName == usuarios[i].usuario &&
      password == usuarios[i].contrasenia
    ) {
      usuarioLogueado = user // IMPORTANTE: Se guarda al usaurio logueado dentro de una variable. Caso similar al de la variable "localSeleccionado"
      esconderDivs();
      mostrarDivs("inicioUsuario");
      existe = true;
      titulo.innerHTML = usuarios[i].nombre; //Precargado de datos del usuario que se imprimen en el menú principal
      numeroSpan.innerHTML = usuarios[i].numero;
      nombreSpan.innerHTML = usuarios[i].nombre;
      usuarioSpan.innerHTML = usuarios[i].usuario;
      document.querySelector("#txtUsernamePersona").value = "";
      document.querySelector("#txtPasswordUsernamePersona").value = "";
    }
  }
  if (!existe) {
    aviso.innerHTML = "Usuario erroneo o no existente";
  }
  console.log(usuarios.reservas)
}

// BOTON PARA VOLVER AL INICIO DESDE REGISTRO USUARIO
function registroUsuarioReturn() {
  volverAInicio();
  let aviso = document.querySelector("#avisoRegistro");
  let usuarioCreado = document.querySelector("#usuarioCreado");
  document.querySelector("#txtName").value = "";
  document.querySelector("#txtUsernamePersonaRegister").value = "";
  document.querySelector("#txtPasswordUsernameRegister").value = "";
  document.querySelector("#repeatPassword").value = "";
  aviso.innerHTML = "";
  usuarioCreado.innerHTML = "";
}

// SELECT DE FUNCIONALIDADES DEL USUARIO
function selectFuncionesUsuario() {
  let selectUsuario = document.querySelector("#funcionesUsuario").value; 

  switch (selectUsuario) {
    case "reservasUsuario":
      esconderDivs();
      mostrarDivs("funcionReservarUsuario");
      preLoadedRealizarReservasUser() //Precargado del listado de locales con las reservas restantes de cada uno
      break;
    case "reservasPendientesUsuario":
      esconderDivs();
      mostrarDivs("divReservasPendientesUsuario");
      preLoadedReservasPendientesUser() //Precargado de una tabla con los datos de las reservas pendientes del usuario
      break;
    case "cancelarReservasPendientes":
      esconderDivs();
      mostrarDivs("cancelarReservaUsuario");
      preLoadedCancelarReservasUser() //Precargado con un listado de reservas pendientes y radio buttons, dejandole la posibilidad al usuario de cancelar reservas
      break;
    case "calificarReservas":
      esconderDivs();
      mostrarDivs("puntuarReservaUsuario");
      preLoadedCalificarReservasUser() //Precargado con un listado de reservas finalizadas (sin calificar) y radio buttons, permitiendo calificar las mismas
      break;
    case "informacionEstadisticaUsuario":
      esconderDivs();
      mostrarDivs("divInformacionEstadisticaUsuario");
      preloadedStatsUsuario() //Precargado con la información estadística del usuario
      break;
  }
}

// PRECARGAR DATOS DE REALIZAR RESERVAS USUARIO
function preLoadedRealizarReservasUser() {
  let cuposDisponibles = document.querySelectorAll(".mostrarCupos");
  for (let i=0; i < locales.length; i++){
    if (locales[i].noDisponible == false) {
      cuposDisponibles[i].innerHTML = locales[i].nombre + " (Cupos disponibles: " + locales[i].reservasRestantes + ")" 
    } else {
      cuposDisponibles[i].innerHTML = locales[i].nombre + " (Local no disponible para reservar)" 
    }
  }  
}

// PRECARGAR DATOS PARA VER LAS RESERVAS PENDIENTES
function preLoadedReservasPendientesUser() {
  let tablaMostrarPendientes = document.querySelector("#tablaMostrarPendientes")
  tablaMostrarPendientes.innerHTML = ""
  for (let j = 0; j < usuarioLogueado.reservas.length; j++){
    if (usuarioLogueado.reservas[j].estado == "Pendiente") {
      tablaMostrarPendientes.innerHTML += "<tr><td> <img width='100' height='100' src='" + usuarioLogueado.reservas[j].imagen + "'" + "</td><td>"+ usuarioLogueado.reservas[j].local +"</td><td>"+ usuarioLogueado.reservas[j].cantidad +"</td></tr>"
    }
  }
  console.log(usuarioLogueado.reservas)
}

// PRECARGAR DATOS PARA CANCELAR RESERVAS PENDIENTES
function preLoadedCancelarReservasUser() {
  let mensajeSinReservasPendientes = document.querySelector("#sinReservasPendientes")
  let radioCancelarReservas = document.querySelector("#radioCancelarReservas")
  let sinReservasPendientes = true
  mensajeSinReservasPendientes.innerHTML = ""
  radioCancelarReservas.innerHTML = ""

    for (let k = 0; k < usuarioLogueado.reservas.length; k++){
      if (usuarioLogueado.reservas[k].estado == "Pendiente") {
        sinReservasPendientes = false
        radioCancelarReservas.innerHTML += 
        "<input type='radio' name='radioCanceladas' class='cancelarReservas'/> <p style='display: inline'> Local: "+ usuarioLogueado.reservas[k].local +"</p><br/><p> Cantidad de reservas: "+ usuarioLogueado.reservas[k].cantidad +"</p>"
      }
    }
    if (sinReservasPendientes == true) {
      mensajeSinReservasPendientes.innerHTML = "No hay reservas pendientes"
    }
    console.log(radioCancelarReservas)
}

// PRECARGAR DATOS PARA CALIFICAR RESERVAS
function preLoadedCalificarReservasUser() {
  let mensajeSinReservasFinalizadas = document.querySelector("#sinReservasFinalizadas")
  let radioReservasAPuntuar = document.querySelector("#radioReservasAPuntuar")
  let sinReservasFinalizadas = true
  radioReservasAPuntuar.innerHTML = ""

  for (let l=0; l < usuarioLogueado.reservas.length; l++){
    if (usuarioLogueado.reservas[l].estado == "Finalizada" && isNaN(usuarioLogueado.reservas[l].calificacion)) {
      sinReservasFinalizadas = false
      radioReservasAPuntuar.innerHTML += "<input type='radio' name='radioPuntaje' id='reservaFinalizada"+l+"' class='puntuarReservas'/> <p style='display: inline'> Local: "+ usuarioLogueado.reservas[l].local +"</p><br/><p> Cantidad de reservas: "+ usuarioLogueado.reservas[l].cantidad +"</p>" 
    }
  }
  if (sinReservasFinalizadas == true) {
    mensajeSinReservasFinalizadas.innerHTML = "No hay reservas finalizadas"
  }
}

// PRECARGAR DATO USUARIO INFO ESTADISTICA
function preloadedStatsUsuario() {
  let listaDatosReservas = document.querySelector("#listaDatosReservas")
  let mensajeErrorInfoUsuario = document.querySelector("#mensajeErrorInfoUsuario")
  let localConMasReservas = document.querySelector("#localConMasReservas")
  let mensajeSinReservas = document.querySelector("#mensajeSinReservas")
  let existeReservasFinalizadas = false
  let localLogueado = ""
  let cantidadReservas = 0;
  let promedio = 0
  let mayores = [0,0,0,0,0,0,0]
  let mayorPalabra = ["Mcdonalds"]
  let mayor = mayores[0]
  localConMasReservas.innerHTML = ""
  mensajeSinReservas.innerHTML = ""

  for (let h=0; h<usuarioLogueado.reservas.length; h++){
    if (usuarioLogueado.reservas[h].local == "McDonalds") {
      mayores[0] += 1
    } else if (usuarioLogueado.reservas[h].local == "Burger King") {
      mayores[1] += 1
    } else if (usuarioLogueado.reservas[h].local == "Pizza Hut") {
      mayores[2] += 1
    } else if (usuarioLogueado.reservas[h].local == "Louvre"){
      mayores[3] += 1
    } else if (usuarioLogueado.reservas[h].local == "Madame Tussauds") {
      mayores[4] += 1
    } else if (usuarioLogueado.reservas[h].local == "Teatro Solis"){
      mayores[5] += 1
    } else if (usuarioLogueado.reservas[h].local == "Opera de Sidney") {
      mayores[6] += 1
    }
  }

  for(let m=0; m < usuarioLogueado.reservas.length; m++){
    if (usuarioLogueado.reservas[m].estado == "Finalizada") {
      existeReservasFinalizadas = true
      localLogueado = usuarioLogueado.reservas[m].local
      for (let n=0; n < locales.length; n++){
        if (localLogueado == locales[n].nombre) {
          if (locales[n].nombre == "McDonalds") {
            promedio =  mayores[0] * 100 / locales[n].reservas.length
          } else if (locales[n].nombre == "Burger King") {
            promedio = mayores[1] * 100 / locales[n].reservas.length
          } else if (locales[n].nombre == "Pizza Hut") {
            promedio = mayores[2] * 100 / locales[n].reservas.length
          } else if (locales[n].nombre == "Louvre"){
            promedio = mayores[3] * 100 / locales[n].reservas.length
          } else if (locales[n].nombre == "Madame Tussauds") {
            promedio = mayores[4] * 100 / locales[n].reservas.length
          } else if (locales[n].nombre == "Teatro Solis"){
            promedio = mayores[5] * 100 / locales[n].reservas.length
          } else if (locales[n].nombre == "Opera de Sidney") {
            promedio = mayores[6] * 100 / locales[n].reservas.length
          }
          console.log(promedio)
          for (let o = 0; o < locales[n].reservas.length; o++){
            if (locales[n].reservas[o].estado == "Finalizada") {
              cantidadReservas += 1
            }
          }
        }
      } 
        listaDatosReservas.innerHTML += "<li> Local visitado: " + usuarioLogueado.reservas[m].local + 
        "</li><p> Cupos reservados: "+ usuarioLogueado.reservas[m].cantidad + "</p><p> Cantidad de reservas finalizadas de todos los usuarios: "+ cantidadReservas +
        "</p><p> Porcentaje de reservas que correponden al usuario: " + Math.round(promedio) + " %</p>"
        cantidadReservas = 0 
    }
  }
  if (existeReservasFinalizadas == false) {
    mensajeErrorInfoUsuario.innerHTML = "No tiene reservas finalizadas"
  }

  if (mayores[0] !== 0 || mayores[1] !== 0 || mayores[2] !== 0 || mayores[3]!== 0 || mayores[4]!== 0 || mayores[5]!== 0 || mayores[6]!== 0) {
    for (let s = 0; s < mayores.length; s++){
      if (mayor < mayores[s]) {
        mayor = mayores[s]
        mayorPalabra = []
        mayorPalabra.push(locales[s].nombre)
      } else if (mayor == mayores[s]) {
        mayorPalabra.push(locales[s].nombre)
      }
    }
    for (let x= 0; x < mayorPalabra.length; x++){
      if (isNaN(mayorPalabra[x])) {
        localConMasReservas.innerHTML += "<br/><br/>" + mayorPalabra[x] 
      }
    }
  } else {
    mensajeSinReservas.innerHTML = "No se han realizado reservas en ningun local" 
  }
  
}

// BOTON PARA CERRAR SESION DESDE PAGINA PRINCIPAL USUARIO
function cerrarSesionUsuario() {
  volverAInicio();
  usuarioLogueado = ""
  document.querySelector("#listaDatosReservas").innerHTML = ""
}

// BOTON PARA REALIZAR RESERVAS DEL USUARIO
function hacerReserva() {
  let todosRadioButtons = document.querySelectorAll(".radiosReservas") //Se invocan los radio button de cada local, abriendo la posibilidad de reserva
  let cantidadReserva = Number(
    document.querySelector("#cantidadLugaresUsuario").value
  );
  let error = document.querySelector("#errorReservaUsuario");
  let reservaAceptada = document.querySelector("#reservaAceptada")
  let reservado = false
  let reservaRepetida = false
  document.querySelector("#cantidadLugaresUsuario").value = "";
  error.innerHTML = ""
  reservaAceptada.innerHTML = ""

  for (let j=0; j<locales.length; j++){
    if (todosRadioButtons[j].checked && locales[j].noDisponible == false && cantidadReserva <= locales[j].reservasRestantes && cantidadReserva >0 && !reservaExistente(locales[j].nombre)) { //En caso de que el local esté disponible, no se hayan realizado reservas pendientes en el mismo y la cantidad de reservas no es ni 0 ni mayor a las reservas restantes del local, entonces se ejecutará el siguiente código...
      locales[j].reservasRestantes = locales[j].reservasRestantes - cantidadReserva;
      document.querySelector("#reserva"+j).innerHTML =
      locales[j].nombre + " (Cupos disponibles: " + locales[j].reservasRestantes + ")";
      reservaAceptada.innerHTML = "Reserva realizada correctamente"
      let nuevaReserva = new Reservas (usuarioLogueado.nombre ,usuarioLogueado.usuario, locales[j].nombre, locales[j].imagen, cantidadReserva, "Pendiente")
      usuarioLogueado.reservas.push(nuevaReserva)
      locales[j].reservas.push(nuevaReserva)
      reservado = true 
    } 
    if (todosRadioButtons[j].checked) {
      if (reservaExistente(locales[j].nombre)) {
        reservaRepetida = true 
      }
    }
  } 
  if (cantidadReserva <=0) {
    error.innerHTML = "Debe ingresar una cantidad mayor"
  } else if(reservado == false && reservaRepetida == true) {
    error.innerHTML = "Ya tiene una reserva en este local";
  } else if (reservado == false && reservaRepetida == false) {
    error.innerHTML = "La cantidad de reservas supera al cupo disponible o el local no esta disponible para reservas";
  }
}
console.log(usuarios);

// FUNCION PARA SABER SI EXISTE LA RESERVA
function reservaExistente(nombreLocal){
  let existe = false
  for(i=0; i < usuarioLogueado.reservas.length && !existe; i++ ){
    if (usuarioLogueado.reservas[i].estado == "Pendiente") {
      if (nombreLocal == usuarioLogueado.reservas[i].local) { //Se corrobora que el usuario no haya realizado reservas en estado pendiente sobre el local ya seleccionado
        existe = true
      }
    }
  } return existe
}

// BOTON PARA VOLVER AL MENU PRINCIPAL DESDE RESERVAS USUARIO
function volverDesdeReservasUsuario() {
  volverMenuUsuario();
  document.querySelector("#errorReservaUsuario").innerHTML = ""
  document.querySelector("#reservaAceptada"). innerHTML = ""
}

// BOTON PARA VOLVER AL MENU PRINCIPAL DESDE RESERVAS PENDIENTES USUARIO
function volverDesdeReservasPendientesUsuario() {
  volverMenuUsuario();
}

// BOTON PARA CANCELAR LAS RESERVAS PENDIENTES DEL USUARIO
function cancelarReservaUsuario() {
  let radioCancelar = document.querySelectorAll(".cancelarReservas")
  let radioCancelarReservas = document.querySelector("#radioCancelarReservas")
  let mensajeSinReservasPendientes = document.querySelector("#sinReservasPendientes")
  let localReserva = ""
  let cupos = 0
  let reservasPendientes = false
  radioCancelarReservas.innerHTML = ""
  
  for (let i = 0; i < usuarioLogueado.reservas.length; i++){
    if (radioCancelar[i].checked && usuarioLogueado.reservas[i].estado == "Pendiente") {
      localReserva = usuarioLogueado.reservas[i].local
      cupos = usuarioLogueado.reservas[i].cantidad
      usuarioLogueado.reservas.splice(i,1) //En el caso de que se permita cancelar la reserva, se elimina ese elemento del array de reservas del usuario
    }
  }
  for (let i = 0; i < usuarioLogueado.reservas.length; i++){
    if (usuarioLogueado.reservas[i].estado == "Pendiente") { //Se actualiza el listado con radio buttons de reservas pendientes del usuario
      radioCancelarReservas.innerHTML += 
      "<input type='radio' class='cancelarReservas' name='radioCanceladas'/> <p style='display: inline'> Local: "+ usuarioLogueado.reservas[i].local +"</p><br/><p> Cantidad de reservas: "+ usuarioLogueado.reservas[i].cantidad +"</p>"
    }
  }
  cancelarReservaLocal(localReserva, usuarioLogueado, cupos)

  for (let j=0; j <usuarioLogueado.reservas.length; j++ ){
    if (usuarioLogueado.reservas[j].estado == "Pendiente") {
      reservasPendientes = true
    } 
  }
  if (reservasPendientes == false) {
    mensajeSinReservasPendientes.innerHTML = "No hay reservas pendientes"
  }
}

// FUNCION PARA SACAR LA RESERVA DEL ARRAY DE RESERVAS DEL LOCAL Y MODIFICAR EL CUPO RESTANTE
function cancelarReservaLocal(localReserva, usuario, cantidad){
  for(let j = 0; j < locales.length; j++){
    if (locales[j].nombre == localReserva) {
      for (let k = 0; k < locales[j].reservas.length; k++){
        if (locales[j].reservas[k].usuario == usuario.usuario) {
          locales[j].reservas.splice(k,1) //Del mismo modo que se elimina el elemento de la reserva cancelada, se aplica lo mismo para dicha reserva desde el lado del local
          locales[j].reservasRestantes += cantidad //Se vuelve a agregar la cantidad de reservas que en un principio fueron solicitadas por el usuario previo a su cancelación
        }
      }
    }
  }
}

// BOTON PARA VOLVER AL MENU DESDE CANCELAR RESERVAS USUARIO
function volverDesdeCancelarReservasUsuario() {
  volverMenuUsuario();
}

// BOTON PARA CALIFICAR LA RESERVA FINALIZADA
function calificarReservaFinalizada() {
  let notaPuntajeUsuario = document.querySelector("#notaPuntajeUsuario").value;
  let puntuarReservas = document.querySelectorAll(".puntuarReservas")
  let mensajeDeCalificacion = document.querySelector("#mensajeDeCalificacion")
  let radioReservasAPuntuar = document.querySelector("#radioReservasAPuntuar")
  let mensajeSinReservasFinalizadas = document.querySelector("#sinReservasFinalizadas")
  let sinReservasFinalizadas = true
  let localReserva = ""
  mensajeDeCalificacion.innerHTML = ""
  radioReservasAPuntuar.innerHTML = ""
  mensajeSinReservasFinalizadas.innerHTML = ""
  console.log(puntuarReservas)

  for (let i=0; i<puntuarReservas.length; i++){
    console.log(puntuarReservas[i])
        if (puntuarReservas[i].checked) {
          let radioId = puntuarReservas[i].id;
          let posicionReserva = Number(radioId.substring(17)); //Se busca el id con el número de reserva
          if (usuarioLogueado.reservas[posicionReserva].estado == "Finalizada" && isNaN(usuarioLogueado.reservas[posicionReserva].calificacion)){ //Se corrobora que esa reserva no haya sido calificada
          console.warn(usuarioLogueado.reservas[posicionReserva]);
          localReserva = usuarioLogueado.reservas[posicionReserva].local
          console.log(puntuarReservas)
          switch (notaPuntajeUsuario) {
            case "uno":
              usuarioLogueado.reservas[posicionReserva].calificacion = 1
              puntuarReservaLocal(localReserva, usuarioLogueado, 1)
              mensajeDeCalificacion.innerHTML = "Puntaje guardado correctamente"
            break;
            case "dos":
              usuarioLogueado.reservas[posicionReserva].calificacion = 2
              puntuarReservaLocal(localReserva, usuarioLogueado, 2)
              mensajeDeCalificacion.innerHTML = "Puntaje guardado correctamente"
            break;
            case "tres":
              usuarioLogueado.reservas[posicionReserva].calificacion = 3
              puntuarReservaLocal(localReserva, usuarioLogueado, 3)
              mensajeDeCalificacion.innerHTML = "Puntaje guardado correctamente"
            break;
            case "cuatro":
              usuarioLogueado.reservas[posicionReserva].calificacion = 4
              puntuarReservaLocal(localReserva, usuarioLogueado, 4)
              mensajeDeCalificacion.innerHTML = "Puntaje guardado correctamente"
            break;
            case "cinco":
              usuarioLogueado.reservas[posicionReserva].calificacion = 5
              puntuarReservaLocal(localReserva, usuarioLogueado, 5)
              mensajeDeCalificacion.innerHTML = "Puntaje guardado correctamente"
            break;
          }
      }
    }
  }
  

  for (let l=0; l < usuarioLogueado.reservas.length; l++){
    if (usuarioLogueado.reservas[l].estado == "Finalizada" && isNaN(usuarioLogueado.reservas[l].calificacion)) {
      sinReservasFinalizadas = false
      radioReservasAPuntuar.innerHTML += "<input type='radio' name='radioPuntaje' id='reservaFinalizada"+l+"' class='puntuarReservas'/> <p style='display: inline'> Local: "+ usuarioLogueado.reservas[l].local +"</p><br/><p> Cantidad de reservas: "+ usuarioLogueado.reservas[l].cantidad +"</p>" //Se genera una clase de radio buttons, y para cada uno de ellos, un id con su numero identificador, siento este un acumulador de un recorrido "for"
    }
  }
  if (sinReservasFinalizadas == true) {
    mensajeSinReservasFinalizadas.innerHTML = "No hay reservas finalizadas"
  }
  console.log(locales)
  console.log(usuarios) 
}

// FUNCION PARA GENERAR PUNTAJE
function puntuarReservaLocal(localReserva, usuario, puntaje){
  for(let j = 0; j < locales.length; j++){
    if (locales[j].nombre == localReserva) {
      for (let k = 0; k < locales[j].reservas.length; k++){
        if (locales[j].reservas[k].usuario == usuario.usuario) {
          locales[j].reservas[k].calificacion = puntaje 
        }
      }
    }
  }
}

// BOTON PARA VOLVER AL MENU DESDE PUNTUAR RESERVAS USUARIO
function volverDesdePuntuarReservasUsuario() {
  volverMenuUsuario();
  document.querySelector("#mensajeDeCalificacion").innerHTML = ""
  document.querySelector("#sinReservasFinalizadas").innerHTML = ""
}

// BOTON PARA VOLVER AL MENU DESDE INFO ESTADISTICA USUARIO
function volverDesdeInfoEstadisticaUsuario() {
  volverMenuUsuario();
  document.querySelector("#mensajeErrorInfoUsuario").innerHTML = "" 
  document.querySelector("#listaDatosReservas").innerHTML = ""
}

// ESCONDER DIVS
function esconderDivs() {
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "none";
  }
}

// MOSTRAR DIVS
function mostrarDivs(id) {
  esconderDivs();
  for (let i = 0; i < divs.length; i++) {
    if (divs[i].id == id) {
      divs[i].style.display = "block";
    }
  }
}

// FUNCION PARA VOLVER AL MENU DEL LOCAL
function volverMenuLocal() {
  esconderDivs();
  mostrarDivs("inicioLocal");
}

// FUNCION PARA VOLVER AL MENU DEL USUARIO
function volverMenuUsuario() {
  esconderDivs();
  mostrarDivs("inicioUsuario");
}

// FUNCION PARA VOLVER A LA PAGINA DE INICIO
function volverAInicio() {
  esconderDivs();
  mostrarDivs("paginaInicial");
}

// FUNCION PARA BUSCAR EN EL ARRAY
function search(array, propiedad, valor) {
  let toReturn = -1;
  let noExiste = true;
  for (let i = 0; i < array.length && noExiste; i++) {
      if (array[i][propiedad] == valor) {
          toReturn = array[i];
          noExiste = false;
      }
  }
  return toReturn;
}
