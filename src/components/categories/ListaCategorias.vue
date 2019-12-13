<template>
  <div>
    <li>
      <button @click.prevent.stop="subcategorias(categoria.id)">{{categoria.name}}</button>
      <ul v-for="subcat in subcategoria" :key="subcat.id">
        <li>{{subcat.title}}</li>
        <li>{{subcat.price}}</li>
        <li><img :src="subcat.thumbnail"/></li>
      </ul>
    </li>
  </div>
</template>

<script>
import axios from "axios";
import config from "../../config/config";
export default {
  data() {
    return {
      subcategoria: []
    };
  },
  props: {
    categoria: {
      type: Object,
      required: true
    }
  },
  methods: {
    subcategorias
  }
};
function subcategorias(categoria) {
  axios.get(`${config.baseURL}/search?category=${categoria}`).then(response => {
    console.log(response);
    this.subcategoria = response.data.results;
  });
}
</script>