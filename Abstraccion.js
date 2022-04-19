class LearningPath{
    constructor(name, courses = []){
        this.name = name
        this.courses = courses
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: ["Curso Definitivo de HTML Y CSS", "Curso Practica de HTML y CSS"],
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: ["Cursos DataBusiness", "Curso Dataviz"],
})

const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: ["Curso de Unity", "Curso de Unreal"],
})