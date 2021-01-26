<template>
  <!-- <div id="welcome">
    <h1>Learning Vue Authentication</h1>
    <p>Here you go!</p>
    <div class="cta">
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/signin">Sign In</router-link>
    </div>
  </div> -->
  <div>
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">Seja bem vindo!</h1>
        <p>
          <router-link class="btn btn-primary" to="/signin">Fazer Login</router-link>
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
  #welcome {
    width: 80%;
    margin: auto;
  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  .cta {
    width: 300px;
    margin: auto;
    text-align: center;
  }

  .cta a {
    margin: 10px;
    text-decoration: none;
    display: inline-block;
    border: 1px solid #521751;
    border-radius: 3px;
    width: 100px;
    padding: 10px;
    box-sizing: border-box;
    color: #521751;
  }

  .cta a:hover,
  .cta a:active {
    background-color: #521751;
    color: white;
  }
</style>