
import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

import '../App.css'

const Board = () => {

    const navigate = useNavigate()

    function backPage() {
        navigate(-1)
    }

    const numlist = [1,2,3,4,5];


    return(
    <div>
        <h1>Board</h1>
        <p>파라미터 및 중첩 라우터를 사용하여 아래 Board의 내용이 보입니다</p>

        { numlist.map((num,inx) => (
            <NavLink to={`/board/${num}`} key={inx}
            className="numlist"><div><p>{num}</p></div></NavLink>
        )) }

    
    <Outlet />

    <br />

    <button onClick={backPage}>뒤로가기</button>

    </div>
    )
}

export default Board
