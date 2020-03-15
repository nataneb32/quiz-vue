import { mount , shallowMount } from '@vue/test-utils'
import Option from '@/components/Option'

describe('Option Component',() =>{

    test('is a Vue Instance',()=>{
        const wrapper = shallowMount(Option,{propsData:{
            option:{
                type: "img",
                img: "test"
            }
        }})

        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})