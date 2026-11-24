let personaje = {
    nombre: "santi", 
    edad: 15,
    raza: "humano",
    amigos: ["spiderman", "ironman", "thanos"],
    Atacar: function(dato){
        console.log("voy a Salvar la humanidad de un rasho laser" + dato + this.amigos[0])
    },
    direccion:{
        pais: "Uruguay",
        ciudad: "Punta Del Este",
        parada: 33
    },
    defender: function(dato){
        console.log(" voy a defender " + this.direccion.ciudad + " con mi amigo " + this.amigos[2])
    }
}
console.log(personaje)
personaje.superpoder = "telepatia"
console.log(personaje)
delete personaje.edad;
console.log(personaje)
personaje.Atacar(" con mi amigo ")
console.log(personaje.direccion.ciudad)
personaje.defender()
