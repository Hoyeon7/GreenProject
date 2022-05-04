

<template>
    <div>
        <h2>【 글을 작성하는 공간입니다 】</h2>
        
        <br>
        <hr>
        <br>

<div style="border">
    <form action="/api/memo/writeform" method="post">
        <input type="text" name="write" value="작성자">
        <br>
        <br>
        <input type="text" name="title" value="제목">
        <br>
        <br>
        <textarea cols="30" rows="10" name="memo" value="메모 내용"></textarea>
        <br>
        <br>
        <input type="submit" value="전송">
    </form>
<div>
    <br>

    <hr>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                title:"",
                memo:'',
            }
        },
        methods: {
            addmemo() {

                this.$http.post('/api/memo', {
                    data: {
                        write: this.write,
                        title: this.title,
                        memo: this.memo,
                    }
                });
                
                this.$router.push('/')
            }
        }
    }

</script>


<style>

    h2 {
        color:darksalmon;
    }

</style>
