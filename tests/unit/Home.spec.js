import { createLocalVue, shallowMount} from '@vue/test-utils'; 
import Home from '../../src/pages/Home.vue'
import ListView from '../../src/components/ListView.vue'
import ContentView from '../../src/components/ContentView.vue'
import ElementUI from 'element-ui'; 

const localVue = createLocalVue();
localVue.use(ElementUI);   
describe('Home.vue', () => {
  let wrapper;
  const searchData = [{"Title":"Game of Thrones","Year":"2011–","Rated":"TV-MA","Released":"17 Apr 2011","Runtime":"57 min","Genre":"Action, Adventure, Drama, Fantasy, Romance","Director":"N/A","Writer":"David Benioff, D.B. Weiss","Actors":"Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington","Plot":"Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.","Language":"English","Country":"USA, UK","Awards":"Won 1 Golden Globe. Another 273 wins & 454 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.5/10"}],"Metascore":"N/A","imdbRating":"9.5","imdbVotes":"1,429,496","imdbID":"tt0944947","Type":"series","totalSeasons":"8","Response":"True"}];
  beforeEach(() => {
    wrapper = shallowMount(Home, {localVue});
  });

  it('should render list view on the left nav bar', () => { 
    expect(wrapper.find(ListView)).toBeTruthy();
  });

  it('should render content view on desktop', () => {
    expect(wrapper.find(ContentView)).toBeTruthy();
  });
  it('matches snapshot', () => {
    const wrapper = shallowMount(Home, {
      propsData: {}
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})