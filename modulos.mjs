function videoPlay(id){
    console.log("Se reproduce video "+id);
}


function videoStop(id){
    console.log("Se pausa video "+id)
}

export class Clase{
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.name);
    }

    pausar(){
        videoStop(this.name);
    }
}