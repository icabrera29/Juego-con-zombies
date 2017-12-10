/* Un objeto que representa a los obstaculos. Recibe un sprite que tendra la
imagen que lo representa y una potencia indicando cuando danio hace al chocar
al jugador, ademas de los parametros comunes x, y, ancho y alto*/
var Obstaculo = function (sprite, x, y, ancho, alto, potencia) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.potencia = potencia;
  // Implementar el metodo chocar(jugador) para que al chocar con un obstaculo
  // el jugador pierda vidas
 /* this.chocar = function(vidas, potencia){
    Jugador.vidas = vidas - potencia;
  }

  Otra cosa para destacatar (como podés ver en el código de recién) es que hubiera sido mejor que la potencia del obstáculo se pierda en la función chocar del objeto Obstaculo y no desde el objeto Juego como lo resolviste.
  /*Correcion del metodo*/
  this.chocar = function(jugador){
    jugador.perderVidas(this.potencia);
    this.potencia = 0;
  }
}

