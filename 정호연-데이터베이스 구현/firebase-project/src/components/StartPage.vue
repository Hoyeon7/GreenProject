

<template>
    <div>
        <h1>시작 페이지</h1>
        <h3><a @click="fnDoGoogleLogin_Popup()">구글 로그인</a></h3>
        <h3><router-link to="/login">이메일 로그인</router-link></h3>
    </div>
</template>


<script>

export default {

    methods: {
        fnDoGoogleLogin_Popup() {
            this.$store.dispatch('fnDoGoogleLogin_Popup');
        }
    }
}

</script>



<style>

h3 {
    color:lightgray
}

h1 {
    font-size: 35px;
}

</style>
