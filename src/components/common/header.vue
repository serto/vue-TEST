<template>
  <div>
    <header>
  		<h1>Template de Vue</h1>	
      <ul>
        <li><router-link to="/" >Página 1</router-link></li>
        <li><router-link to="/my-info" >Página 2</router-link></li>
        <li><router-link to="/contact" >Página 3</router-link></li>
        <li><router-link to="/search" >Página 4</router-link></li>
        <li><router-link to="/virales" >Virales</router-link></li>
      </ul>
      <h2>title de la page: {{ this.titlePage }}</h2>
  	</header>
  </div>
 
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      titlePage : ''
    }
  },
  mounted() {
    const { title } = this.$attrs
    this.titlePage = (title) ? title : 'default'
  }
}
</script>

<style type="text/css">
  header {
    border: 1px solid red; 
    padding: 24px 0;
    text-align: center;
  }
  ul { 
    overflow: hidden; 
    border: 1px solid red; 
    width: 400px;
    margin: 0 auto;
  }
  li {
    float: left;
    margin: 0 20px;
    list-style: none;
  }
</style>