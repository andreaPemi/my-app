export class Videojuego {
    titulo:string;
    imagen:string;
    descripcion:string;
    anyo:number;            //año pupublicacion
    precio:number;
    alquilado:boolean;

    constructor(){
        this.titulo = "Sin titulo";
        this.imagen = "assets/imgs/videogame_cover.png";
        this.descripcion = "lorem ipsum...";
        this.anyo = 0;
        this.precio = 0;
        this.alquilado = false;
    }

    ngOnInit() {
        console.trace("Videojuego.ts init");
        this.titulo="Mario Bross";
      }
}


