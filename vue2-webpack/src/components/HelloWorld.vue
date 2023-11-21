<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <h1>count is {{ count }}</h1>
  </div>
</template>

<script>
import actions from "@/shared/actions";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  mounted(){
    actions.onGlobalStateChange(state => {
      const { count } = state;
     this.count=count
    }, true);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
