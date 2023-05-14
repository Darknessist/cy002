<template>
<div>
  <router-link to="/">
  <el-button type="primary">按钮</el-button>
</router-link>
<router-link to="/user">
  <el-button type="primary">按钮</el-button>
</router-link>
<el-radio v-model="radio" label="1">备选项</el-radio>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
