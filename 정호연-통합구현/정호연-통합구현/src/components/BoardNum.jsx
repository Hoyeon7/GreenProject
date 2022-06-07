

import { useParams } from "react-router-dom"


const BoardNum = () => {
    const {id} = useParams();

    return (
        <div>
            <h2>{id}번 페이지 입니다</h2>
        
    </div>
    )
}

export default BoardNum;

