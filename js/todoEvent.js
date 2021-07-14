import TodoDom from './todoDom'
/**
 * 专负责处理数据
 */
class TodoEvent extends TodoDom{
    constructor(todoData,wrapper) {
        /**这super很关键，如果不写，继承的TodoDom那边就拿不到wrapper，报错
         * 
         */        
        super(wrapper)
        this.todoData = todoData
    }
    initData() {
        this.todoData && this.todoData.map((todo)=> {
            this.addItem(todo)
        })
    }
    //添加todo
    addTodo(todo) {
        //const {content} = todo
        //console.log(oList);
        const result = this.todoData.find((item,index)=> {
           
            return item.content === todo.content
        })
        if(result) {
            alert('已存在');
            return false;
        }
        this.todoData.unshift(todo)
        //调用操作dom
        this.addItem(todo)
       
    }
    removeTodo(target,id) {
        //console.log(target);
        this.todoData.filter(todo=> todo.id !== id)
        this.removeItem(target)
    }
    toggleTodo(target,id) {
        console.log(this.todoData);
        this.todoData = this.todoData.filter(todo=>{
            console.log('filter');
            if(todo.id === id ){
                todo.completed =!todo.completed
                console.log(todo.completed);
                this.changeItem(target,todo.completed)
            }
            
            return todo
        })

        
    }
}

export default TodoEvent