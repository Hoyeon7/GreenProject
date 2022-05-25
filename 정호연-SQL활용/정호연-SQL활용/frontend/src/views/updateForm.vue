


<template>

    <div id="UpdateForm_div">
        <hr>

        <h1>메모장 수정하기</h1>
        <input type="text" v-model="memo.title">
        <br>
        <br>
        <textarea cols="30" rows="10" v-model="memo.memo"></textarea>
        <br>
        <button @click="updatememo">수정</button>

        <hr>
    </div>

</template>



<script>

export default {
    data() {
        return {
            memo: {
                title: '',
                memo: '',
            }
        }
    },


    created() {
        this.$http.get(`/api/memo/${this.$route.params.id}`)
        .then((response) => {
            this.memo = response.data
        })
    },


    methods: {
        updatememo() {
            this.$http.put('/api/memo/updateForm', {
                data : {
                    memo: this.memo
                }
            })
            this.$router.push('/')
        }
    }

    

}

</script>


<style>

    #UpdateForm_div {
        margin: auto;
        background-color:mintcream;
        text-align: center;
        padding: 5px;
        padding-top: 10px;
        border: 1px solid lightgray;
        border-radius: 20px;
        width: 600px;
        height: 350px;
    }
    
    </style>
