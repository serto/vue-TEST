<template>

  <div>

    <Header 
      title='virales' />

    <h1>CONCIERTOS</h1>

    <div class="virales">
      <div class="viral-box">
        <h3>SUAVES</h3>
        <p><iframe src="https://www.youtube.com/embed/P90IRRPzGkw?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p>
      </div>

      <div class="viral-box">
        <h3>MAREA</h3>
        <p><iframe src="https://www.youtube.com/embed/buZUaIBRThQ?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p>
      </div>

      <div class="viral-box">
        <h3>PLATERO Y TU</h3>
        <p><iframe src="https://www.youtube.com/embed/o1Zu2gGE_VM?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p>
      </div>

    </div>



    <Footer />

  </div>
  
</template>

<script>
  import Header from '../common/header';
  import Footer from '../common/footer';

  export default {

    name: 'Virales',
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

<style type="text/css" scoped>

  .virales {
    border: 1px solid green;
    display: flex;
  }
  
  .viral-box {
    flex: 1 1 20%;
    padding: 8px;

    p {
      display: block;
      width: 100%;
      border: 1px solid blue;
      iframe {
        width: 100%;
        height: auto;
      }
    }
  }

</style>