/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, eje) {
  /* Completar constructor a partir de Enemigo */
  //Enemigo.call(/* ... */);
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */  
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.eje = eje;  
}

/* Completar creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;


/* Completar metodos para el movimiento y el ataque */

ZombieConductor.prototype.mover = function() {
  /* Los movimientos estan basados en un numero aleatorio
  La direccion horizontal es siempre la misma y va ondulando verticalmente.
  Esto hasta llegar a sus limites, donde se invierte su direccion horizontal */
  //console.log(this.eje);
  //if(this.eje == 'y'){
  //	this.y -= this.velocidad;
  //}
 //console.log(this.eje);
  if (this.eje == 'horizontal') {
  	this.x -= this.velocidad; 
  	if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
    this.velocidad *= -1;
  	}     
  }
  if(this.eje == 'vertical'){
	this.y += this.velocidad;
	if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)){
    this.velocidad *= -1;
  	}   
  }
}

ZombieConductor.prototype.atacar = function(jugador) {
   /* jugador.perderVidas(5); */
   /* 1- es que el tren deberia quitarle todas las vidas al Jugador. En este caso sucede, porque le saca 5 vidas. Pero qué pasa si mañana el Jugador tiene 10 vidas en vez de 5? El tren le sacaría sólo la mitad de sus vidas y no es lo que queremos*/
  jugador.perderVidas(jugador.vidas);
}
