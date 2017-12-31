var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, eje) {
   
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.eje = eje;  
}


ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;




ZombieConductor.prototype.mover = function() {

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
   
  jugador.perderVidas(jugador.vidas);
}
