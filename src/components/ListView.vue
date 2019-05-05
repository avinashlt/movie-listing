<template>
        <div class="list-wrapper">
            <div class="search">
                <el-input
                    placeholder="Search"
                    prefix-icon="el-icon-search"
                    v-model="searchText" 
                    v-on:change = "searchEventEmit"
                >
                </el-input>
            </div>
            <div class="list-items">
                <el-menu>
                    <el-menu-item  v-for="(item, index) in items.Search" :index="item.imdbID" v-on:click="clickEventEmit(item.imdbID)">
                            <i class="el-icon-film" v-if="item.Type ==='movie'"></i>
                            <i class="el-icon-video-camera-solid" v-else></i>
                            <span>{{item.Title}}</span>
                    </el-menu-item>
                    <p v-if="!searchText" class="empty-records">Search for movies or series</p>
                    <p v-else-if="!items.Search" class="empty-records">No movies found! </p>
                </el-menu>
            </div>
            <div class="pagination" v-if="items.Search">                                
                <el-button icon="el-icon-arrow-left" class="arrow-left" circle :disabled="currentPage===1"
                @click="previousPage"></el-button>
                <div class="pagination-inner">
                    <p class="page-number">Page {{currentPage}}</p>    
                    <p class="result-total"> {{items.totalResults}} results</p>
                </div>

                <el-button icon="el-icon-arrow-right" class="arrow-right" circle :disabled="rightArrowFlag" 
                @click="nextPage"></el-button>
            </div>
        </div>
</template>

<style scoped>
.list-wrapper {
    position:relative;
    top : 0;
    left : 0;
    height:100vh;
    overflow : hidden;
}
.list-items {
    height: calc(100vh - 110px);
    width:100%;
    overflow-y:scroll;
    margin-bottom : 60px;
    overflow-x: hidden;
}
.pagination {
    position: absolute;
    left : 0;
    bottom : 0;
    height : 60px;
    width : 100%;
    text-align : center;
    background : var(--color-white);
}
.arrow-left {
    margin : 0 5px;
    position: absolute;
    top:5px;
    left : 5px;
}

.arrow-right {
    position : absolute;
    right: 5px;
    top : 5px;
    margin : 0 5px;
}

.page-number{
    margin :10px 0 0 0;
    font-size:12px;
}

.result-total{
    margin: 0;
    font-size: 10px;
    font-weight: bold;
}
.empty-records{
    text-align: center;
}
</style>

<script>
 export default {
    name : 'ListView',
    props: ['items'],
    data(){
        return {
            searchText : "",
            currentPage : 1,
        }
    },
    computed: {
        rightArrowFlag(){
            let totalPage = Math.ceil(this.items.totalResults/10);
            if(totalPage === this.currentPage)
                return true;
        },
    },
    methods : {
        previousPage() {
            this.currentPage -= 1;
            this.searchEventEmit();
        },
        nextPage() {
            this.currentPage += 1;
            this.searchEventEmit();
        }, 
        searchEventEmit() {
            this.$emit('searchChange', this.searchText, this.currentPage);
        },
        clickEventEmit(imdbID) {
            this.$emit('movieItemClick', imdbID)
        }
    }

  };
</script>