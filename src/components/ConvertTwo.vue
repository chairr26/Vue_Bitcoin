<template>
  <div class="container mt-5">
    <b-form @submit.prevent="onSubmit">

      <b-form-group id="input-group-2" label="Masukan nilai bitcoin" label-for="input-2">
        <b-form-input type="number" id="input-2" v-model="form.btc" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Konversi</b-button>
    </b-form><br>
    <h4>Rp.{{ rupiah.toLocaleString() }}</h4>
  </div>
</template>

<script>

import axios from 'axios'
export default {
    name: 'ContentView',
    data() {
      return {
        form: {
          btc: 0,
        },
        kurs: 14000,
        usd: 0,
        rupiah : 0
      }
    },
    methods: {
      setBTC(data) {
        this.rupiah = data.USD.buy*this.kurs*this.form.btc;
      },
      onSubmit(event) {
        event.preventDefault()
        this.cekbtc()
      },
      cekbtc() {
        axios
            .get('https://blockchain.info/ticker')
            .then((response) => this.setBTC(response.data))
            .catch((error) => console.log(error))
      }
    }
  }
</script>

<style>
.hasil {
  text-align: center;
}
</style>
