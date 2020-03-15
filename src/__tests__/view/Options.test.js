import { mount , shallowMount } from '@vue/test-utils'
import Option from '@/components/Option'

describe('Option Component',() => {

    test('is a Vue Instance',() => {
        const wrapper = shallowMount(Option,{propsData:{
            option:{
                type: "img",
                img: "test"
            }
        }})

        expect(wrapper.isVueInstance()).toBeTruthy()
    })
    test('if type == color render color', () => {
        const wrapper = shallowMount(Option,{
            stubs: ['font-awesome-icon'],
            propsData:{
            option:{
                type: "color",
                random: true
            }
        }})

        expect(wrapper.find("div.color").exists()).toBeTruthy()
    })
    test('if type == img render img', () => {
        const wrapper = shallowMount(Option,{
            stubs: ['font-awesome-icon'],
            propsData:{
            option:{
                type: "img",
                img: "img"
            }
        }})

        expect(wrapper.find(".img").exists()).toBeTruthy()
    })
    test('method click emmit click event', async () =>{
        const wrapper = shallowMount(Option,{
            stubs: ['font-awesome-icon'],
            propsData:{
            option:{
                type: "img",
                img: "img"
            }
        }})
        wrapper.vm.click()
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted().click).toBeTruthy()
    })
})