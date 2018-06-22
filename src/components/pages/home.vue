<template>

  <div>

    <Header 
      title='Home'/>

    <p>La home</p>

    <Footer />
    
  </div>

</template>

<script>
  import Header from '../common/header';
  import Footer from '../common/footer';

  export default {

    name: 'Home',
    data () {
      return {
      }
    },
    components: {
      Header,
      Footer
    }
  }
</script>
