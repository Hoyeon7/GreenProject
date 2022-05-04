

let express = require('express');
const { response } = require('../../../정호연-서버프로그램구현/backend/app');
let router = express.Router();


const memos = require('../memo.json')

let count = 2;

router.get('/', function(request,response,next) {
    response.send(memos);
});

router.get("/:id", function(request,resposne,next) {
    const id = request.params.id;
    const m = memos.filter( (memo) => {
        if(memo.id == id) {
            return true
        }
    });
    resposne.send(m[0])
})

router.post('/writeform', function (request,resposne,next) {
    const memo = request.body
    count++;
    const m = {
        id: count,
        title: memo.title,
        memo: memo.memo,
        writer:memo.write,
    };

    memos.push(m);
    resposne.redirect("/");
});

router.post('/', function (request, resposne, next) {
    console.log(request.body.data)
    const memo = req.body.data
    count++;
    const m = {
        id : count+1,
        title: memo.title,
        memo: memo.memo,
        write: '',
    };

    memos.push(m);
    response.send('ok')
});


module.exports = router;
