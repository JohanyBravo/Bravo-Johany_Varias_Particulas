class Sistema {
    connstructor(){
        this.pos = createVector(width / 2, height / 2);
        this.ps = []
        this.t = random(100);


    }
    update() {
        // 1. Actualización de posición 
        this.pos.x = map(noise(this.t), 0,1,0, width);
        this.pos.y = map(noise(this.t + 10), 0,1,0, height);

        // 2.Agregamos partículas
        this.p = new Particula(this.pos.x, this.pos.y);
        this.ps.push(p);
        // Verificar cuales están muertas y llamar los macrófogos
        for (let i = 0; i < array.length; i++) {
            if (!this.ps[i]. isAlive){
                this.ps.slice(i, 1);
                
            }
            
        }
    }
    display(){
        for (let i = 0; i < array.length; i++) {
           this.ps[i].update();
          this.ps[i].display();
            
        }
    }

}