

<template>

    <div class="MemoList_div">

        <h1>Yeon's 메모 리스트</h1>

        <div>
        <table>
            <tr>
                <td class="td_1">아이디</td>
                <td class="td_2">작성자</td>
                <td class="td_3">제목</td>
            </tr>
            <tr v-for="memo in memo" :key="memo.i">
                <td id="td_4">{{memo.id}}</td>
                <td id="td_5">{{memo.writer}}</td>
                <!-- 타이틀을 눌렀을때 /list/:id 링크로 이동 -->
                <td id="td_6" @click="$router.push(`/list/${memo.id}`)">{{memo.title}}</td>
                <td><button @click="$router.push(`/updateform/${memo.id}`)">수정</button></td>
                <td><button @click="deletememo(memo.id)">삭제</button></td>
            </tr>
        </table>
        </div>
    </div>

</template>

<script>
export default {
    data () {
        return {
            //v-for로 확인하기 위해 배열
            memo : [ {
                id :1,
                title : "첫번째 메모입니다",
                writer : "green"
            }]
        }
    },
    // 컴포지션이 처음 생성될때 값을 가져와야 화면에 출력할수 있다
    created() {
        // axios를 통해 값을 가져옴 - get
        // this.memo에 가져온 값 넣어줌
        this.$http.get('/api/memo')
        .then((response) => {
            // data를 통해서 값 가져올 수 있다.
            console.log(response.data);
            this.memo = response.data
        })
    },

    methods: {
        deletememo(id) {
            this.$http.delete(`/api/memo/${id}`)
            .then((response) => {
                this.memo = response.data
            })
        }
    }
}
</script>



<style>

    .MemoList_div {
    margin: auto;
    background-color:floralwhite;
    text-align: center;
    padding: 5px;
    padding-top: 9px;
    border-radius: 35px;
    border: 1px solid lightgray;
    width: 600px;
    height: 350px;
    }

table {
    border:1px solid lightblue;
    border-radius: 10px;
    text-align: center;
    margin: auto;
    padding: 10.5px;
}

.td_1, .td_2, .td_3 {
    background-color:bisque;
    border-radius: 8.5px;
    font-size: 15px;
    padding: 3px;
    padding-left: 6px;
    padding-right: 6px;
}

#td_4, #td_5, #td_6 {
    background-color: lightgoldenrodyellow;
    border-radius: 6px;
}

#td_5, #td_6 {
    font-size: 13.5px;
}

#td_6 {
    padding-left: 6px;
    padding-right: 6px;
}


</style>
