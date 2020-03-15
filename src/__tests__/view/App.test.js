import { mount , shallowMount } from '@vue/test-utils'
import App from '@/App'
import Result from '@/components/Result'
import questions from './testData/questions'

describe('App', () => {
  test('is a Vue instance', () => {

    const wrapper = shallowMount(App,{mocks:{
      $store:{
        state:{
          stage: 0,
          questions: questions
        }
      }
    }})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('if has no more question(questions.length <= stage) then show result', ()=>{
    const wrapper = shallowMount(App,{mocks:{
        $store:{
          state:{
            stage: questions.length,
            questions: questions
          }
        }
      },
    })
    expect(wrapper.find('result-stub').exists()).toBeTruthy()
  })
})