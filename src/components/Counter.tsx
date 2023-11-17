import { useReducer } from "react"

type OperationType = '+' | '-' | '0'
type ActionType = { type: OperationType, payload?: number}
type StateType = { count: number }
type ReducerType = (state: StateType, action: ActionType) => StateType

const initialState: StateType = { count: 0 }

const reducer: ReducerType = (state, action) => {
    const incrementFactor = action.payload ?? 0
    switch (action.type) {
        case '+':
            return { count: state.count + incrementFactor };
        case '-':
            return { count: state.count - incrementFactor };
        case '0':
            return { count: 0 };
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count: {state.count}</div>
            <button onClick={() => { dispatch({ type: '+', payload: 1 }) }}>+</button>
            <button onClick={() => { dispatch({ type: '-', payload: 1 }) }}>-</button>
            <button onClick={() => { dispatch({ type: '0', payload: 0 }) }}>Reset</button>
        </div>
    )
}

export default Counter
