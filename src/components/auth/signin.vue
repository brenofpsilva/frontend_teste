<template>
  <div id="signin">
  <div class="container">

      <form class="form-signin" @submit.prevent="onSubmit">
        <h2 class="form-signin-heading">Login</h2>
        <label for="username" class="sr-only">Login</label>
        <input type="text" id="username" class="form-control" v-model="username" placeholder="Login" required autofocus>
        <label for="password" class="sr-only">Password</label>
        <input type="password" id="password" class="form-control" v-model="password" placeholder="Senha" required>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Acessar</button>
      </form>

    </div> <!-- /container -->

  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          username: this.username,
          password: this.password,
        }
        console.log(formData)
        this.$store.dispatch('login', {username: formData.username, password: formData.password})
      }
    }
  }
</script>

<style scoped>

body {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #eee;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

  .signin-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    border-radius: 7px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
    border-radius: 18px;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>