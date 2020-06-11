<template>
  <div id="page-container">
    
    <h3>Covid-19</h3>
    
    <div id="content-wrap">
      <section v-if="errored">
        <p>Sorry, it is not possible to get the information at this time, please try again later.</p>
      </section>

      <section v-else>
        <div v-if="loading">Cargando...</div>

        <div
          v-else
        >
          <b-table
            show-empty
            small
            stacked="md"
            :items="info"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :sort-direction="sortDirection"
          >
          </b-table>
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            align="fill"
            size="sm"
            class="my-0"
          ></b-pagination>
        </div>

      </section>
    </div>
  </div>
</template>

<script>
/* eslint no-unused-vars: "off" */
import { mapMutations } from 'vuex';
export default {
  name: 'covid',
  beforeMount() {
    
  },
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
      fields: [
        { key: 'Country', label: 'Country', sortable: true, sortDirection: 'asc' },
        { key: 'TotalConfirmed', label: 'Total Confirmed', sortable: true, class: 'text-center' },
        { key: 'TotalDeaths', label: 'Total Deaths', sortable: true, class: 'text-center' },
        { key: 'TotalRecovered', label: 'Total Recovered', sortable: true, class: 'text-center' },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
    };
  },
  mounted () {
    this.axios
      .get('https://apidemo.lyceumcloud.net/covid-19.json')
      .then(response => {
        console.log(response.data.Countries);
        this.info = response.data.Countries;
        this.totalRows = this.info.length
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
  computed: {
    
  },
  components: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
