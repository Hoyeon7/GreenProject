
const MemoItem = ({ memo, onRemove }) => {
    return (
      <div>
        <span>제목 : {memo.title}</span>
        <button
          onClick={() => {
            onRemove(memo.id);
          }}
        >
          X
        </button>
        <p>내용 : {memo.text} </p>
      </div>
    );
  };
  
  const Memo = ({ title, text, memos, onChangText, onChangTitle, onInsert, onRemove }) => {
    const memoAdd = () => {
      onInsert({ title: title, text: text });
      onChangText("");
      onChangTitle("");
    };
  
    return (
      <div>
        <h1>메모하는 공간입니다</h1>

        <input
          type="text"
          value={title}
          onChange={(e) => {
            onChangTitle(e.target.value);
          }}
        />{" "}
        <br />
        <textarea
          cols="24"
          rows="5"
          value={text}
          onChange={(e) => {
            onChangText(e.target.value);
          }}
        ></textarea>
        <br />

        <button onClick={memoAdd}>입력</button>
        <hr />

        {memos.map((memo) => (
          <MemoItem memo={memo} onRemove={onRemove} key={memo.id} />
        ))}
      </div>
    );
  };
  
  export default Memo;