'use strict'

// Stockage local de nos tâches
class ArrayStorage {
    // Un constructeur pour initialiser l'objet avec le nom de la clé et de son contenue 
    constructor(name){
        this.name = name
        this.list = this.get()
    }

    // Une méthode pour récupèrer un tableau des valeurs par défaut , le créer  si jamais n'existe pas 
    get() {
        if (!localStorage.getItem(this.name)){
            localStorage.setItem(this.name, '[]')
        }
        return JSON.parse(localStorage.getItem(this.name))
    }

    //  Une méthode pour ajouter une valeur dans le tableau
    set(value) {
        this.list.push(value)
        localStorage.setItem(this.name, JSON.stringify(this.list))
    }

    // Une méthode pour supprimer une valeur du tableau 
    remove(value){
        const index = this.list.indexOf(value)
        this.list.splice(index, 1)
        localStorage.setItem(this.name, JSON.stringify(this.list))
    }

    // Une méthode pour vider tout le tableau
    clear() {
        localStorage.removeItem(this.name)
    }
}
