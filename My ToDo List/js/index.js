'use strict'

// Dom selection
const list = document.getElementById('list')
const input = document.getElementById('input')
const add = document.getElementById('add')

// Nouvelle instance pour la clé 'tasks'
const storage = new ArrayStorage('tasks')

// On récupère le tableau des tâches déjà existantes ou bien un tableau vide
const tasks = storage.list

// Une fonction qui ajoute les tâches au DOM avec un bouton de suppression auquel on attache un évènement 
function taskToDOM(task) {
    // Si on a une chaîne non-vide
    if (typeof task === 'string' && task){
        const li = document.createElement("li")
        const remove = document.createElement('button')
       
        li.textContent = task
        remove.textContent = 'X'

        remove.addEventListener('click', () => {
            const value = remove.parentNode.firstChild.textContent
            storage.remove(value)
            list.removeChild(remove.parentNode)
        })

        li.appendChild(remove)
        
        list.insertBefore(li, list.firstChild)

        return true
    }
    return false
}
// On ajoute chaque tâche à la liste à puces
tasks.forEach(task => taskToDOM(task))

// On gère l'ajout de tâches avec le bouton ADD et la touche 'Enter'
function newTask(){
    if (storage.list.indexOf(input.value) === -1 && taskToDOM(input.value)) {
        storage.set(input.value)
        input.value = ''
    }
    input.focus()
}

add.addEventListener('click', newTask) 
    input.addEventListener('keydown', e => {
        if (e.key === 'Enter'){
            newTask()
        }
})

// On gère l'importation de tâches
load.addEventListener('click', () => {
    fetch(url.value)
    .then(response => {
        if (response.ok){
            return response.json()
        }
        throw new Error(`${response.statusText} (${res.statusText})`)
    })
    .then(tasks => {
        if (Array.isArray(tasks)) {
            tasks.forEach(task => {
                if (storage.list.indexOf(task) === -1 && taskToDOM(task)) {
                    storage.set(task)
                }
                return
            })
        }
        throw new TypeError(`La réponse n'est pas un tableau JSON (type: ${typeOf}`)
    })
})

function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("mystyle");
 }
