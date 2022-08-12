import { useReducer } from "react"

interface IDispatchCountAction {
  payload: number,
  name: 'add' | 'sub' | 'reset'
}

function UseReducerExample() {
  const [count, dispatchCount] = useReducer((state: number, action: IDispatchCountAction) => {
    const { payload, name } = action
    switch (name) {
      case 'add':
        return state + payload
      case 'sub':
        return state - payload
      case 'reset':
        return payload
    }
  }, 0)
  return (
    <>
      <div>count: {count}</div>
      <button onClick={() => dispatchCount({ name: 'add', payload: 20 })}>+20</button>
      <button onClick={() => dispatchCount({ name: 'sub', payload: 10 })}>-10</button>
      <button onClick={() => dispatchCount({ name: 'reset', payload: 233 })}>reset 233</button>
    </>
  )
}

export default UseReducerExample