import { shallowMount } from '@vue/test-utils'
import App from '@/App'
import Vuex from 'vuex'
import Vue from 'vue'
import questions from "./testData/questions.json";

Vue.use(Vuex)

let actions
let store
let state

beforeEach(() => {
actions = {
    actionClick: jest.fn(),
    actionInput: jest.fn()
}
state = {
    stage: 0,
    questions,

}
store = new Vuex.Store({
    actions,
    state
})
})


describe('App', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(App,{store,state})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})