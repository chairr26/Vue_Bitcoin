<template>
  <div class="hello">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="container">
        <b-navbar-brand href="#">Cllau</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link class="linknya" to="/">PRICELIST</router-link>
            <router-link class="linknya" to="/btctoidr">IDR to BTC</router-link>
            <router-link class="linknya" to="/idrtobtc">BTC to IDR</router-link>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavbarView',
}
</script>
<style>
.container {
  text-align: left;
}
.linknya {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}
.linknya:hover {
  color: #bdcdd6;
  margin: 0 10px;
  text-decoration: none;
}
</style>

