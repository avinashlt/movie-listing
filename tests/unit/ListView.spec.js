import { createLocalVue, shallowMount} from '@vue/test-utils'; 
import Home from '../../src/pages/Home.vue'
import ContentView from '../../src/components/ContentView.vue'
import ElementUI from 'element-ui'; 

const localVue = createLocalVue();
localVue.use(ElementUI);   
describe('ListView.vue', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallowMount(ContentView, {localVue});
  });

  it('should render list view', () => { 
    expect(wrapper.find('.list-wrapper')).toBeTruthy();
  });

  it('matches snapshot', () => {
    const wrapper = shallowMount(Home, {
      propsData: {}
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})