import Vuex from "vuex";
import questions from "../jsons/questions.json";
import Vue from 'vue'


export function defaultState(){
    return {
        stage: 0,
        history: [],
        answers: [],
        questions,
    }
}

Vue.use(Vuex)
const state = defaultState()
console.log(state)
const store = new Vuex.Store({
    state,
    mutations: {
        executeCommand(state,command){
            if(command.execute(state)){
                state.history.push(command)
            }
        },
        undoCommand(state){
            let lastCommand = state.history.pop()
            lastCommand.undo(state)
        }
    },
    actions:{
        nextStage(context,answer){

            const cmd = {
                execute(state){
                    console.log(state.questions)

                    //check if there is another question
                    if(state.questions.length <= state.stage){

                        return false
                    }
                    state.stage++
                    state.answers.push(answer)
                    return true
                },
                undo(state){
                    state.answers.pop()
                    state.stage--
                },
                redo(state){
                    state.stage++
                    state.answers.push(answer)
                },
            }
            context.commit('executeCommand',cmd)
        },

    }
});

export default store;