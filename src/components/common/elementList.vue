<template>

  <div class="wrapperElement" :key="element.id">

    <p><strong>{{ element.aliases[0] }}</strong></p>
    <p>{{ element.gender }}</p>

  </div>
  
</template>

<script>

  export default {

    name: 'ElementList',
    data () {
      return {
      }
    },
    computed: {
      element: function() {
        const { element } = this.$attrs
        return element
      }
    }
  }
</script>

<style type="text/css">
  .wrapperElement {
    background-color: #DBDBDB;
    width: 22%;
    float: left;
    margin: 0 1.5% 2% 1.5%;
  }
</style>