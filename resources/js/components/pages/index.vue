<template>
  <div>
    <header>
      <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand">Navbar</a>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    </header>
    <div v-for="product in products" :key="'product-key' + product.id">
      {{ product }}
    </div>
    <router-link to="/about">à propos</router-link>
  </div>
</template>


<script>
import IconBase from "../IconBase.vue";
import IconSearch from "../icons/IconSearch.vue";
export default {
  data() {
    return {
      search: "",
      products: [],
    };
  },
  mounted() {
    this.loadProducts();
  },
  methods: {
    loadProducts: function () {
      axios
        .get("/api/products")
        .then((response) => {
          this.products = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  components: {
    IconBase,
    IconSearch,
  },
};
</script>

<style lang="scss" scoped>
nav {
  background-color: #1c2833;
  a {
    color: #ffffff;
  }
}
.form-control {
  border-radius: 1em;
}
.input-group {
  input {
    border: 0;
  }
  .search {
    background: #ffffff;
    border: 0;
    cursor: pointer;
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
  }
}
.input-group,
.menu,
.navbar-brand {
  flex-basis: 33%;
}
</style>