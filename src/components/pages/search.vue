<template>

  <div>

    <Header 
      title='ADDING VUE' />

      <h3>adding elements Test Vuex</h3>

      <input 
       type="text" 
       name="nameTest"
       id="nameTest"
       placeholder="insert something"
      />
      <button
        v-on:click="addNameToStore()">ADD name</button>

      <ListNames 
        :testing=names
        v-if="names.length > 0" />

    <Footer />

  </div>
  
</template>

<script>
  import Header from '../common/header';
  import Footer from '../common/footer';
  import ListNames from '../comps/listNames'

  export default {

    name: 'Search',
    data () {
      return {
      }
    },
    computed: {
      names: function () {
        return this.$store.getters.names;
      }
    },
    methods: {
      addNameToStore: function() {
        const name = document.getElementById('nameTest').value
        this.$store.commit('addElement', { name });
        document.getElementById('nameTest').value = ''
      }
    },
    components: {
      Header,
      ListNames,
      Footer
    }
  }
</script>


<style type="text/css" scoped>

  #nameTest,
  button {
    padding: 8px;
  }

</style>