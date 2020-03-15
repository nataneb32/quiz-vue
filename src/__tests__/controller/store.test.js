import store,{defaultState} from '@/store/store'

describe('Vuex store actions',()=>{
    test('nextStage change stage',() => {
        store.replaceState(defaultState())
        store.dispatch('nextStage',{color: 1})
        expect(store.state.stage).toBe(1)
    })
    test('nextStage change history',() => {
        store.replaceState(defaultState())
        store.dispatch('nextStage',{color: 1})
        expect(store.state.history.length).toBe(1)
    })
})