import Vuex from "vuex";

function createStore(){
//
// I'm using the command pattern, because it brings an easy to created a undo/redo 
//
return new Vuex.Store({
    state:{
        stage: 0,
        history: [],
        answers: [],
        questions:[ //here is the questions that are made 
            {
                title: "Titulo da pergunta?",
                options:[
                    {img: "https://via.placeholder.com/300x200"},
                    {img: "https://via.placeholder.com/300x200"},
                    {img: "https://via.placeholder.com/300x200"},
                    {img: "https://via.placeholder.com/300x200"}
                ]
            },
            {
                title: "Titulo da pergunta2?",
                options:[
                    {img: "https://via.placeholder.com/300x200"},
                    {img: "https://via.placeholder.com/300x200"},
                    {img: "https://via.placeholder.com/300x200"},
                    {img: "https://via.placeholder.com/300x200"}
                ]
            }
        ]
    },
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
}
export default createStore;