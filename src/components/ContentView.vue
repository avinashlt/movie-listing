<template>
<div class="content-view-wrapper">
  <p v-if="!movieDetails.Title" class="select-movie-text"> Select a movie to view more details</p>
    <el-row :gutter="10">
    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
      <div class="grid-content" v-if="movieDetails.Title">
              <div class="details-wrapper">
                  <h1 class= "movie-title">{{movieDetails.Title}}</h1>
                  <p class="movie-genre">{{movieDetails.Genre}}</p>
                  <p class="movie-description">{{movieDetails.Plot}}</p>
                  <p class="movie-language"><b>Language :</b> {{movieDetails.Language}}</p>
                  <p class="movie-director"><b>Director :</b> {{movieDetails.Director}}</p>
                  <p class="movie-actors"><b>Actors :</b> {{movieDetails.Actors}}</p>
                  <p class="movie-duration"><b>Duration :</b> {{movieDetails.Runtime}}</p>
              </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12"><div class="grid-content">
          <div class= "image-wrapper">
              <el-image class="poster-image" fit="cover" v-if="movieDetails.Poster" v-bind:src="movieDetails.Poster">
              </el-image>
          </div>
    </div></el-col>
  </el-row>
</div>
</template>
<style scoped>
  .grid-content {
    min-height: 100%;
  }
  .image-wrapper .poster-image {
        margin: 0 auto;
        display: table;
  }
  .select-movie-text{
    text-align : center;
  }

</style>

<script>
export default {
    name: 'ContentView',
    props : ['movieDetails'],
    data() {
        return {
            title : "Avengers",
            genre : "Sci-fi",
            description : "Lorem ipsum lorel ipsum rest kilas asedfe ewrq Lorem ipsum lorel ipsum rest kilas asedfe ewrq Lorem ipsum lorel ipsum rest kilas asedfe ewrq Lorem ipsum lorel ipsum rest kilas asedfe ewrqLorem ipsum lorel ipsum rest kilas asedfe ewrq",
            language : "English",
            director : "John Carter",
            actors : "Smith",
            duration : "56 min",
            poster : ""
        };
    }
}
</script>