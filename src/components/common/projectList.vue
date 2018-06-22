<template>

  <div class="wrapperList">

    
    <ElementList 
      v-if="lists && lists.length"
      v-for="(element, id) of lists"
      :element="element"
      key="id"
    />

  </div>
  
</template>

<script>

  import ElementList from '../common/elementList';

  export default {

    name: 'ProjectList',
    data () {
      return {
      }
    },
    computed: {
      lists: function() {
        const { list } = this.$attrs
        return (list) ? list : 'default'
      }
    },
    components: {
      ElementList
    }
  }
</script>

<style type="text/css">
  .wrapperList {
    border: 1px solid red;
    overflow: hidden;
    margin-bottom: 25px;
  }
</style>
