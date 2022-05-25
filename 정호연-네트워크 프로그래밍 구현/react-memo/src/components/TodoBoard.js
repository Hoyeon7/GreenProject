


import React from 'react'

import TodoItem from './TodoItem'

function TodoBoard(props) {
    // app.js에서 전송한 todoList값을 props로 받아서 함수에 넣고 실행

    return (
        <div>
            <h1>Todo List</h1>
            {props.todoList.map((item) => <TodoItem item={item}/>)}
            {/* props로받아온.todoList를.map반복출력((todoList값을 item매개변수로 받아서) 함수실행=>
                <TodoItem.js에 item이라는 이름으로={todoList 데이터값을 전송}*/}
        </div>
    )
}


export default TodoBoard