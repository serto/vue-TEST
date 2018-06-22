<template>

  <div>

    <h4>Listado de nombres</h4>

    <ul>
      <li 
        v-for="(name, index) in this.lists"
        key="index">
        {{ name.name }}
      </li>
    </ul>

  </div>
  
</template>

<script>

  export default {

    name: 'ListNames',
    data () {
      return {
        lists : ''
      }
    },
    mounted() {
      const { testing } = this.$attrs

      this.lists = (testing) ? testing : ''
    }
  }
</script>

<style type="text/css" scoped>

  ul {
    border: 1px solid green; 
    width: auto;
    margin: 0 ;
  }
  li {
    float: none;
    margin: 20px 0;
    list-style: none;
  }
  
</style>