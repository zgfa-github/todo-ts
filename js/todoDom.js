import TodoTemplate from './todoTemplate'
import findParentNode from '../utils/findParentNode'
/**
 * 专负责操作dom
 */
class TodoDom extends TodoTemplate{
    constructor(wrapper) {
        //也必须要写 super ，否则也报错
        super()
        this.wrapper =wrapper
    }
    addItem(todo) {
        console.log(this.wrapper);
        //console.log(this.todoData);
        const oItem = document.createDocumentFragment();
        const item = document.createElement('li')
        item.className= "list-item"
        item.innerHTML = this.todoView(todo)
        oItem.appendChild(item)
        /**如果不创建一个元素，直接this.wrapper.appendChild() 会如下报错
         * Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
         * */
        this.wrapper.appendChild(oItem)
    }
    removeItem(target) {
        console.log(target);
        const parentNode = findParentNode(target,'list-item')
        parentNode.remove()
    }
    changeItem(target,completed) {
       
        const parentNode = findParentNode(target,'list-item')
       
        const oContent = parentNode.getElementsByTagName('span')[0]
      
        oContent.style.textDecoration=completed?'line-through':"none"
    }
}

export default TodoDom