
import Question from '@/components/Question'
import { mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
describe('Question', () => {
    test('is a Vue Instance',() =>{
        const wrapper = shallowMount(Question,{
            stubs: ['font-awesome-icon'],
            mocks:{
                $store:{
                    state:{
                        stage: 0,
                        questions:[{title: "Titulo",options:{type: "img",img: "img"}}]
                    }
                }
            }
        })
        
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
    test('it\'s asking the right questions',() =>{
        const wrapper = shallowMount(Question,{
            stubs: ['font-awesome-icon'],
            mocks:{
                $store:{
                    state:{
                        stage: 1,
                        questions:[
                            {title: "a1",options:{type: "img",img: "img"}},
                            {title: "2 pergunta",options:{type: "img",img: "img"}}
                        ]
                    }
                }
            }
        })
        
        let textInDOM = wrapper.find('.questions').vm.$el.textContent
        textInDOM= textInDOM.substring(0, textInDOM.length - 2); //I dont know why but there is two blank space in text content
        expect(textInDOM).toBe("2 pergunta")
    })
    test('nextStage methods is calling the action', () => {

        const store = new Vuex.Store({
            actions:{
                nextStage: jest.fn((context,option)=>{
                    console.log(option)
                    expect(option).toStrictEqual({type: "img",img: "img"})
                })
            },
            state:{
                stage: 1,
                questions:[
                    {title: "a1",options:{type: "img",img: "img"}},
                    {title: "2 pergunta",options:{type: "img",img: "img"}}
                ],
                history: []
            }
        })

        const wrapper = shallowMount(Question,{
            stubs: ['font-awesome-icon'],
            mocks:{
                $store: store
            }
        })

        wrapper.vm.nextStage({type: "img",img: "img"})
    })
})