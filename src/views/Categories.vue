
<template>
  <div>
    <h1>Categorias</h1>
    <h3>Selecione uma categoria</h3>
    <ul>
      <ListaCategorias v-for="categoria in categorias"
       :key="categoria.id" 
       :categoria="categoria"
      >
      </ListaCategorias>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import config from "../config/config";
import ListaCategorias from "../components/categories/ListaCategorias";
export default {
  components: {
    ListaCategorias
  },
  data() {
    return {
      categorias: []
    };
  },
  created() {
    axios.get(`${config.baseURL}`).then(response => {
      this.categorias = response.data.categories;
    });
  },
};
</script>