

<template>
  <div>
    <h1>메모</h1>
    <table>
      <tr>
        <td>Number │</td>
        <td>writer │</td>
        <td>MemoTitle</td>
      </tr>
      <tr v-for='(memo, i) in memo' :key=i>
        <td>{{memo.id}}</td>
        <td>{{memo.writer}}</td>
        <td @click="$router.push(`/memoPush/${memo.id}`)">{{memo.title}}</td>
      </tr>
    </table>
  </div>
</template>


<script>

export default ({
  data() {
    return({
      memo : []
    })
  },

  created() {
    this.$http.get('/api/memo')

    .then((response) => {
      this.memo = response.data;
    })
  }
})

</script>


    <style>

        table {
            border: 1.4px solid burlywood;
            border-radius: 8px;
        }

    </style>
