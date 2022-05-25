


<template>
    <div>
        <h2>환영합니다 {{fnGetUser.name}}님, 메인 페이지에 접속되었습니다.</h2>
        <img v-if="fnGetUser.photoURL" :src="fnGetUser.photoURL" alt="">
        <h3>{{fnGetUser.name}}</h3>
        <p>{{fnGetUser.email}}</p>
    </div>
</template>

<script>

export default {
    computed : {
        fnGetUser(){
            let oUserInfo = this.$store.getters.fnGetUser
            return oUserInfo
        }
    }
}
</script>


