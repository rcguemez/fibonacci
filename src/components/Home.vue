<template>
  <div id="page-container">
    
    <h3>Fibonacci</h3>
    
    <div id="content-wrap">
      
      <b-input-group prepend="#" class="mt-1">
        <b-form-input placeholder="Number" 
                      type="number" 
                      min="1"
                      v-model.number="number"
                      @keyup.enter="calculate"
        >
        </b-form-input>
        <b-input-group-append>
          <b-button variant="dark" @click="calculate">Add</b-button>
        </b-input-group-append>
      </b-input-group>

      <br>

      <b-list-group>
        <b-list-group-item v-for="(item, index) in items" :key="index" class="d-flex justify-content-between align-items-center">
          <b-container class="bv-example-row">
            <b-row class="text-center">
              <b-col class="p-0" cols="3">
                <h5><b-badge variant="secondary" pill>n = {{item.number}}</b-badge></h5>
              </b-col>
              <b-col class="p-0" cols="4">
                <h5 v-if="item.number === item.fibonacci"><b-badge variant="success" pill>Equal</b-badge></h5>
                <h5 v-else><b-badge variant="primary" pill>Less than</b-badge></h5>
              </b-col>
              <b-col class="p-0" cols="3">
                <h5><b-badge variant="secondary" pill>f = {{item.fibonacci}}</b-badge></h5>
              </b-col>
              <b-col class="p-0" cols="2">
                <b-button variant="info" size="sm" class="mb-2" @click="showModal(item)">
                  <b-icon icon="eye-fill" aria-hidden="true"></b-icon>
                </b-button>
              </b-col>
            </b-row>
          </b-container>
        </b-list-group-item>

      </b-list-group>
    
    </div>

    <b-modal ref="modal-series"  :title="'N='+itemSerie.number" ok-only>
      <h3>Serie</h3>
      <p>{{itemSerie.serie}}</p>
    </b-modal>

  </div>
</template>

<script>
import CONSTANTS from '@/constants/Home.constants';
export default {
  name: 'home',
  beforeMount() {
    
  },
  data() {
    return {
      bannerMessage: CONSTANTS.BANNER_MESSAGE,
      number: 1,
      items: [],
      itemSerie: {
        number: 1,
        fibonacci: 1,
        serie: []
      },
      pattern: /^\d*$/
    };
  },
  methods: {
    showModal(item) {
      this.itemSerie = item;
      this.$refs['modal-series'].show();
    },
    calculate() {
      if (this.number === '') {
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<div class="text-danger">Invalid number!!!</div>'
        });
        return;
      }
      else if (!this.pattern.test(this.number)) {            
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<div class="text-danger">Invalid number!!!</div>'
        });
        return;
      } 
      const serie = this.fibonacci_calculate(this.number);
      const item = {
        number: this.number,
        fibonacci: serie[serie.length - 1],
        serie: serie
      };
      console.log(serie);
      this.items.unshift(item);
    },
    fibonacci_calculate(n)
    {
      if (n===1)
      {
        return [0, 1];
      } 
      else 
      {
        var s = this.fibonacci_calculate(n - 1);
        const fibonacci = s[s.length - 1] + s[s.length - 2];
        if (fibonacci <= this.number) {
          s.push(fibonacci);
        }
        return s;
      }
    }
  },
  computed: {
    
  },
  components: {
    
  },
};
</script>

<style scoped>
</style>
