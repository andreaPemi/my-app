import { tipopersona } from './tipopersona';

export class Persona {
    private _nombre: string;   
    private _apellidos: string;    
    private _email: string;    
    private _edad: number;  
    private _sexo: tipopersona;
    

    constructor(){
        this.nombre="Anonimo";
        this.apellidos="";
        this.email="";
        this.edad=16;
        this.sexo=tipopersona.I;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get apellidos(): string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos = value;
    }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }
    
    public get sexo(): tipopersona {
        return this._sexo;
    }
    public set sexo(value: tipopersona) {
        this._sexo = value;
    }

}



