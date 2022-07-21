export class Todo {


    static fromJson({id, tarea, completado, creado}) {


        const tempTodo = new Todo(tarea);

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;


    }

    constructor ( tarea ) {
    
        this.tarea = tarea;


        // Cunado ingrese la tare se creara todo automaticamente
        this.id         = new Date().getTime(); 
        this.completado = false;
        this.creado     = new Date();
    
    }


    imprimirClase() {
        console.log(`${this.tarea} - ${this.id}`);
    }

}