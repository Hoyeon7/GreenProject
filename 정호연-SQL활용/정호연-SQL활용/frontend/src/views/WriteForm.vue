

<template>
    <div id="WriteForm_div">
        <hr>

        <h1>메모리스트 내용 작성</h1>
        <input type="text" v-model="title" value="제목">
        <br>
        <br>
        <textarea cols="30" rows="10" v-model='memo'>내용을 입력하세요</textarea>
        <br>
        <button @click="addmemo">제출</button>

        <hr>
    </div>
</template>


<script>
export default {
    data () {
        return {
            title :'',
            memo : ''
        }
    },
    methods : {

        // axios를 이용해 제출 버튼을 눌렀을때 값을 보내줌 - post
        addmemo() {
            this.$http.post('/api/memo/writeform',{
                data : {
                    title :this.title,
                    memo : this.memo
                }
            }).then((response)=>{
                console.log(response.data)
            });
            this.$router.push('/')
        }
    }
}
</script>


<style>

#WriteForm_div {
    margin: auto;
    background-color:cornsilk;
    text-align: center;
    padding: 5px;
    padding-top: 10px;
    border: 1px solid lightgray;
    border-radius: 20px;
    width: 600px;
    height: 350px;
}

</style>