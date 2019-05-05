import { shallowMount } from '@vue/test-utils'
import Home from '../../src/pages/Home.vue'

const searchData = {"Title":"Game of Thrones","Year":"2011–","Rated":"TV-MA","Released":"17 Apr 2011","Runtime":"57 min","Genre":"Action, Adventure, Drama, Fantasy, Romance","Director":"N/A","Writer":"David Benioff, D.B. Weiss","Actors":"Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington","Plot":"Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.","Language":"English","Country":"USA, UK","Awards":"Won 1 Golden Globe. Another 273 wins & 454 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.5/10"}],"Metascore":"N/A","imdbRating":"9.5","imdbVotes":"1,429,496","imdbID":"tt0944947","Type":"series","totalSeasons":"8","Response":"True"}
describe('Home.vue', () => {
  it('renders props.data when passed', () => {
    const wrapper = shallowMount(Home)
    console.log("wrapper", wrapper)
    expect(wrapper).toBe(searchData)
  })
})
