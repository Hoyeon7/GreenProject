
import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate()

    function backPage() {
        navigate(-1)
    }

    return(
    <div>
        <h1>About</h1>
        <p>과제 제출을 위한 리액트 프론트엔드</p>

        <br />

    <button onClick={backPage}>뒤로가기</button>

    </div>

    )
}

export default About
