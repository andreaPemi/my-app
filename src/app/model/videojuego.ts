export class Videojuego {
    private _titulo: string;    
    private _imagen: string;   
    private _descripcion: string;    
    private _anyo: number;            //año pupublicacion    
    private _precio: number;
    
    alquilado:boolean;

    constructor(){
        this.titulo = "Sin titulo";
        this.imagen = "assets/imgs/videogame_cover.png";
        this.descripcion = "lorem ipsum...";
        this.anyo = 0;
        this.precio = 0;
        this.alquilado = false;
    }

//GET AND SET
    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        console.debug("** set titulo...(titulo:string)" );
        this._titulo = value;
    }

    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }

    public get anyo(): number {
        return this._anyo;
    }
    public set anyo(value: number) {
        this._anyo = value;
    }

    public get descripcion(): string {
        return this._descripcion;
    }
    public set descripcion(value: string) {
        this._descripcion = value;
    }
    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }
}


