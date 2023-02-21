<template>
  <div class="container mt-5">
    <b-table-simple class="table table-hover table-bordered">
      <b-thead head-variant="dark">
        <tr style="text-align: center;">
          <th>Mata Uang</th>
          <th>Harga Beli</th>
          <th>Harga Jual</th>
        </tr>
      </b-thead>
      <b-tbody>
        <tr v-for="result in results" :key="result.symbol">
          <td style="text-align: left;">{{result.alias}}</td>
          <td>{{result.buy}}</td>
          <td>{{ result.sell }}</td>
        </tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
import axios from 'axios'
    export default {
    name: 'ListView',
    data() {
        return {
            results: {
                AUD: {
                    buy: '',
                    alias : 'Dollar Australia',
                    sell: '',
                },
                EUR: {
                    buy: '',
                    alias : 'Euro Eropa',
                    sell: '',
                },
                GBP: {
                    buy: '',
                    alias : 'Poundsterling Inggris',
                    sell: '',
                },
                JPY: {
                    buy: '',
                    alias : 'Yen Jepang',
                    sell: '',
                },
                USD: {
                    buy: '',
                    alias : 'Dollar Amerika',
                    sell: '',
                },
            }
        }
    },
    methods: {
        setPrice(data) {
            this.results.AUD.buy = data.AUD.buy;
            this.results.AUD.sell = data.AUD.sell;
            this.results.EUR.buy = data.EUR.buy;
            this.results.EUR.sell = data.EUR.sell;
            this.results.GBP.buy = data.GBP.buy;
            this.results.GBP.sell = data.GBP.sell;
            this.results.JPY.buy = data.JPY.buy;
            this.results.JPY.sell = data.JPY.sell;
            this.results.USD.buy = data.USD.buy;
            this.results.USD.sell = data.USD.sell;
        
        }
    },
    mounted() {
        axios
            .get('https://blockchain.info/ticker')
            .then((response) => this.setPrice(response.data))
            .catch((error) => console.log(error))
    }
}
</script>

<style>
.hasil {
  text-align: right;
}
h3 {
  color: #537fe7;
}
h4 {
  color: #3e54ac;
}
</style>