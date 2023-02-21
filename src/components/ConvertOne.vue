<template>
  <div class="container mt-5">
    <b-form @submit.prevent="onSubmit">

      <b-form-group id="input-group-2" label="Masukan nilai rupiah" label-for="input-2">
        <b-form-input type="number" id="input-2" v-model="form.harga" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Konversi</b-button>
    </b-form><br>
    <h4>{{ btc }} bitcoin</h4>
  </div>
</template>

<script>

import axios from 'axios'
export default {
    name: 'ContentView',
    data() {
      return {
        form: {
          harga: 0,
        },
        rupiah: 14000,
        newharga: 0,
        btc : 0
      }
    },
    methods: {
      setBTC(data) {
            this.btc = data;
        
        },
      onSubmit(event) {
        event.preventDefault()
        this.newharga = this.form.harga / this.rupiah
        this.cekbtc(this.newharga)
      },
      cekbtc(nilai) {
        axios
            .get('https://blockchain.info/tobtc?currency=USD&value='+nilai)
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
