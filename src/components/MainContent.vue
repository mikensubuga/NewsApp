<template>

    <v-layout row wrap align-center>
          
          <v-flex xs12 md8  offset-md2>
            <!-- Looping through articles and displaying each article -->
            <div v-for="article in articles" :key="article.title">
              <v-card class="my-3" hover data-aos="zoom-in" data-aos-easing="ease">
                <v-img
                  height="350px"
                  v-bind:src="article.urlToImage"  
                ></v-img>
                  <v-container fill-height fluid>
                      

                    <v-layout>
                      
                      <v-flex xs12 align-end d-flex>
                        <!-- Display article title -->
                        <span class="headline">{{ article.title }}</span>
                      </v-flex>

                    </v-layout>
                  </v-container>
                <v-card-text>
                  <!-- Display description -->
                  {{ article.description }}
                </v-card-text>
                <v-card-actions>

          
                <v-chip small color="secondary" class="white--text">

                  <!-- Display article source name -->
                  {{article.source.name}}
                </v-chip>

                <v-spacer></v-spacer>

                
              
                
                <v-spacer></v-spacer>

                <v-btn small replace color="info" v-bind:href="article.url" target="_blank" >Read More</v-btn>
              </v-card-actions>
            </v-card>
            </div>
          </v-flex>

  </v-layout>

</template>

<script>

export default {
//Articles is passed as an external property from App.vue component
//The array of articles is then used in this main content section
  props: {
      articles: Array
  }

}

</script>
