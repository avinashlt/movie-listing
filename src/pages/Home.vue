<template>
    <el-container>
    <div class="left-nav-bar">
        <el-aside style="width:100%">
          <ListView :items="movies" v-on:searchChange="getSearchResults" v-on:movieItemClick="itemClickEvent"></ListView>
        </el-aside>
    </div>

    <div class="main-desktop-content">
        <el-container>
            <el-main>
                <ContentView :movieDetails = "movieDetails"></ContentView>
            </el-main>
        </el-container>
    </div>
    <div class="main-mobile-content">
        <el-dialog title="Movie Details" :visible.sync="dialogVisible" width="90%">
          <ContentView :movieDetails = "movieDetails"></ContentView>
        </el-dialog>
    </div>
    
    </el-container>
</template>

<style scoped>
  .left-nav-bar{
    width:300px;
    border-right : 1px solid var(--border-color);
  }
  .main-mobile-content {
    display:none;
  }
  .main-desktop-content {
      display : block;
      width: 100%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .left-nav-bar{
      width:100%;
    }
    .main-desktop-content {
      display : none;
    }
    .main-mobile-content {
      display:block;
    }
  }
  
</style>

<script>
import ListView from './../components/ListView'
import ContentView from './../components/ContentView'
import MovieList from './../services/movie.js'
  export default {
    components : {
        ListView,
        ContentView
    }, 
    data() {
      return {
        movies : [],
        movieDetails : {},
        dialogVisible : false,
      }
    },
    methods : {
      getSearchResults(value, page){
        MovieList.getMovie(value, page).then(res => {
          this.movies = res || {};
        });
      },

      itemClickEvent(imdbID) {
        if(screen.width < 480)
        this.dialogVisible = true;
        this.getMovieDetails(imdbID);
      },

      getMovieDetails(imdbID) {
        MovieList.getMovieDetails(imdbID).then(res => {
          this.movieDetails = res || {};
        })
      }


    }
  };
</script>