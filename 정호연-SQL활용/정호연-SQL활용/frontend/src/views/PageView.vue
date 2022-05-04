

<template>
    <div class="PageView_div">
        <h1 class="h1_1">{{memo.title}}</h1>
        <hr>
        <p class="p_1">{{memo.memo}}</p>
    </div>
</template>


<script>
export default {
    data () {
        return {
            memo : {}
        }
    },
    created() {
        // axios 값을 가져옴 단, id값에 따른 1개의 값 - get
        // 값을 받아와서 this.memo에 저장
        // $route.params.id 를 통해 memo의 id 값 전달
        this.$http.get(`/api/memo/${this.$route.params.id}`)
        .then((response)=>{
            this.memo = response.data
        })
    }
}
</script>

<style>

.h1_1 {
    text-align: center;
}

.p_1 {
    text-align: left;
    margin: 20px;
    overflow: auto
}


.PageView_div {
    margin: auto;
    background-color:cornsilk;
    text-align: center;
    padding: 5px;
    padding-top: 9px;
    border: 1px solid lightgray;
    border-radius: 20px;
    width: 600px;
    height: 350px;
}

</style>