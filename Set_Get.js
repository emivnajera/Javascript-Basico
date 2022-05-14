class Course{
    constructor({
        name,
        classes = [],
    }){
        this._name = name; //El guion bajo significa privado
        this.classes = classes
    }


    get name(){
        return this._name;
    }

    set name(nombre){
        this._name = nombre
    }

}