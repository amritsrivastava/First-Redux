function appReducer(state, action) {
    if(action.type === 'DELETE_FLAVOR') {
        state.remove(state.filter((iceCream) => iceCream.flavor === action.flavor))
    }
    return state
}

function createStore () {

    let state = [{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }]
    let listeners = []

    const getState = () => state
    const subscriber = (listener) => {
        listeners.push(listener)
        return () => {
            listeners.filter((l) => l !== listener)
        }
    }

    return {
        getState,
        subscriber
    }
}