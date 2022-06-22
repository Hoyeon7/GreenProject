

const CHANG_TITLE = 'memo/CHANG_TITLE';
const CHANG_TEXT = 'memo/CHANG_TEXT';
const INSERT = 'memo/INSERT';
const REMOVE = 'memo/REMOVE';

export const changTitle = (input) => ({
    type: CHANG_TITLE,
    input
})
export const changText = (input) => ({
    type: CHANG_TEXT,
    input
})

let id = 3
export const insert = (memo) => ({
    type: INSERT,
    memo: {
        id: id++,
        title: memo.title,
        text: memo.text,
    }
})
export const remove = (id) => ({
    type: REMOVE,
    id,
})


const initalState = {
    title: '',
    text: '',
    memos: [
        {
            id: 1,
            title: '첫번쨰',
            text: '첫번째 메모입니다'
        },
        {
            id: 2,
            title: '2번쨰',
            text: '2번째 메모입니다'
        }
    ]
}


function memo(state=initalState, action){
    switch (action.type) {
        case CHANG_TITLE:
            return {
                ...state,
                title: action.input
            }
        case CHANG_TEXT:
            return {
                ...state,
                text : action.input
            }
        case INSERT:
            return {
                ...state,
                memos: state.memos.concat(action.memo)
            }
        case REMOVE:
            return {
                ...state,
                memos: state.memos.filter((memo) => memo.id !== action.id)
            }
        default:
            return state;
    }   
}

export default memo;