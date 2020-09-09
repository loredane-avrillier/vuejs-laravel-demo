<template>
  <div>
    <header>
      <nav class="navbar justify-content-between">
        <a class="navbar-brand">API DEMO</a>
        <form class="form-inline">
          <input class="form-control" type="search" placeholder="Rechercher" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            <icon-base viewBox="0 0 551.13 551.13" icon-name="search">
              <icon-search />
            </icon-base>
          </button>
        </form>
      </nav>
    </header>
    <div class="d-flex justify-content-center" v-if="loading">
      loading
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="container mt-5" :class="{'loading' : loading}">
      <div class="row">
        <div class="col-md-6" v-for="product in products" :key="'product-key' + product.id">
          <div class="card w-100">
            <!-- <img src="..." class="card-img-top" alt="..." /> -->
            <div class="card-body">
              <h2>{{ product.title }}</h2>
              <p class="card-text">{{product.description}}</p>
            </div>
            <div class="card-footer">
              <router-link to="/about">about</router-link>
              <router-link :to="'/produit/' + product.slug">Voir plus</router-link>
            </div>
          </div>
        </div>
      </div>
      <!--  <router-link to="/about">à propos</router-link> -->
    </div>
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
      loading: true,
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
          this.loading = false;
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
  background-color: #1b1b1b;
  .navbar-brand {
    color: #e3e7dd;
  }
  button:hover,
  .navbar-brand:hover {
    color: #846e74;
    background-color: transparent;
  }
  .form-control,
  button {
    margin-right: 0;
    background-color: #fff;
    border-radius: 0;
    border: 0;
    color: #1b1b1b;
  }
}
h2 {
  color: #846e74;
}
.card-footer a {
  color: #b7a6ad;
}
.card:hover {
  .card-body {
    filter: blur(4px);
    cursor: pointer;
  }

  .card-footer {
    color: #513e3e;
  }
}
/*
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
} */
.container {
  min-height: 90vh;
}
</style>