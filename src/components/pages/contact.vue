<template>

  <div>

    <Header 
      title='contact' />

    <h3>Recivir props por la url</h3>
    <p>El nombre del usuario : {{this.nameToShow }}</p>
    <p>La edat del usuario : {{this.ageToShow }}</p>

    <Footer />

  </div>
  
</template>

<script>
  import Header from '../common/header';
  import Footer from '../common/footer';

  export default {

    name: 'Contact',
    data () {
      return {
        nameToShow: 'default',
        ageToShow: 'default'
      }
    },
    mounted() {

      const { name, ageUser} = this.$route.params

      this.nameToShow = (name) ? name : this.nameToShow
      this.ageToShow = (ageUser) ? ageUser : this.ageToShow
    },
    components: {
      Header,
      Footer
    }
  }
</script>
