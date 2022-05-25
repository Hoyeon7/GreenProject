

import React from 'react'


// TodoBoard에서 item이라는 이름으로 받은 todoList데이터를 props로 받아옴
function TodoItem(props) {
    return (
        <div className="todo-item">
            {props.item}
        </div>
        /*props로 받은 item데이터(todoList)를 출력함*/
    )
}

export default TodoItem
