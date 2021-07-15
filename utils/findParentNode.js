const findParentNode =(target,className) =>{
    //不断循环找点击元素的父节点，通过标识'list-item'来确认当前这个父节点，然后删除
    while(target = target.parentNode) {
        if(target.className === className) {
           
            return target
        }
    }
}

export default findParentNode