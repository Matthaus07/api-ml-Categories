  <template>
    <div class="home">
      <v-container>
        <v-row>
          <v-col md="6" cols="12">
            <v-text-field v-model="produto" label="Digite o nome do produto" solo>
              <template v-slot:append>
                <v-icon
                  @click.prevent.stop="dataProdutoRelevante()"
                  class="blue darken-2"
                >fas fa-search</v-icon>
              </template>
            </v-text-field>
          </v-col>
          <v-col  md="6" cols="12">
            <v-simple-table v-if="produtos.length">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Melhor categoria para o produto</th>
                    <!-- <th class="text-left">Probabilidade de previsão para a categoria</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="produto in produtos" :key="produto.id">
                    <td>{{produto.name}}</td>
                    <!-- <td>{{produto.prediction_probability}}</td> -->
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <div v-else></div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  

  <script>
  import config from "../services/CategoriesApi";

  export default {
    name: "home",
    data() {
      return {
        produto: "",
        produtos: []
      };
    },
    methods: {
      dataProdutoRelevante
    }
  };
  function dataProdutoRelevante() {
    const url = `category_predictor/predict?title=${this.produto}`;
    config.getCategories(url, response => {
      this.produtos = response.data.path_from_root;
    });
  }
  </script>
