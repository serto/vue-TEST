<template>

  <div>

    <Header 
      title='info' />

    <h3>Random names from 'Game of Thrones'</h3>

    <ProjectList :list="this.posts" />

    <Footer />

  </div>

</template>

<script>
  import Header from '../common/header';
  import Footer from '../common/footer';
  import ProjectList from '../common/projectList'

  import axios from 'axios';

  export default {

    name: 'Info',
    data () {
      return {
        posts: [],
        errors: [],
      }
    },
    created() {
      axios.get('https://www.anapioficeandfire.com/api/characters')
        .then(response => {
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    components: {
      Header,
      Footer,
      ProjectList
    }
  }
</script>