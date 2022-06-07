
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    function backPage() {
        navigate(-1)
    }
    
    return(
    <div>
        <h1>Home</h1>
        <p>리액트 홈에 오신 것을 환영합니다</p>
        <p>NavLink를 통해서 이동하여 내용을 확인할 수 있습니다</p>
        <p>NavLink를 사용하여 현재 위치를 알수 있습니다</p>
        <p>NavLink는 a태그 CSS를 이용하여 꾸며줄수 있습니다</p>

        <button onClick={backPage}>뒤로가기</button>
    </div>
    )
}

export default Home
