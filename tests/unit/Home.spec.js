import { createLocalVue, shallowMount} from '@vue/test-utils'; 
import Home from '../../src/pages/Home.vue'
import ListView from '../../src/components/ListView.vue'
import ContentView from '../../src/components/ContentView.vue'
import ElementUI from 'element-ui'; 

const localVue = createLocalVue();
localVue.use(ElementUI);   
describe('Home.vue', () => {
  let wrapper;
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