/**
 * 专负责视图模板块
 */
class TodoTemplate {
    constructor() {
        
    }
    todoView(todo) {
        console.log('视图模板开始');
        console.log(this.wrapper);
        const {id,content,completed} = todo
        return `<div >
            <label>
            <input type="checkbox" ${completed?'checked':''} data-id="${id}"/>
            <span style="text-decoration:${completed?'line-through':'none'}">${content}</span>
            </label>
            <button data-id="${id}"> 删除</button>
        </div>`
    }
}

export default TodoTemplate