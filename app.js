import TodoEvent from './js/todoEvent'
import './index.css'

;(function(doc){
   
    const oInput = doc.getElementsByTagName('input')[0]
   
    const oButton = doc.getElementsByTagName('button')[0]
   
    const oTodoList = doc.getElementById('list')
    //初始化数据
    const todoData =[{id:1,content:'zgf',completed:true}]
    //实例化对象
    const todoEvent = new TodoEvent(todoData,oTodoList)
    function bindEvent() {
        /**
         * 绑定事件处理函数
         * false 为冒泡阶段
         */
        oButton.addEventListener('click',handleAddTodo, false)
        oTodoList.addEventListener('click',handleClickItem, false)
    }
    //初始化绑定事件处理函数
    function init() {
        bindEvent()
        todoEvent.initData()
    }
    init()

    //添加todo事件处理函数
    function handleAddTodo(e) {
        const value= oInput.value.trim()
        if(!value.length) return;
        const todo = {
            id: new Date().getTime(),
            content: value,
            completed: false
        }  
        //调用操作数据
        todoEvent.addTodo(todo) 
        oInput.value= ''
    }
        
    //操作todo事件处理函数
    function handleClickItem(e) {
        const tar = e.target
        const tagName = e.target.tagName.toLowerCase()
        const id = parseInt(tar.dataset.id)
        //console.log(id);
        if(tagName === 'input' || tagName === 'button') {
            switch(tagName) {
                case 'input':
                    todoEvent.toggleTodo(tar,id)
                    break;
                case 'button':
                    todoEvent.removeTodo(tar,id)
                    break;
                default:
                    break;
            }
        }
    }
   
    
})(document)