import React, { useContext } from "react"

const UserInfoContext = React.createContext({ name: 'curry', age: 34 })

function UseContextExample() {
  return (
    <UserInfoContext.Provider value={{ name: 'james', age: 19 }}>
      <ParentComponent />
    </UserInfoContext.Provider>
  )
}

function ChildrenComponent() {
  return <UserInfoContext.Consumer>
    {({ name }) => <div>my name is {name}</div>}
  </UserInfoContext.Consumer>
}

function ParentComponent() {
  const { name, age } = useContext(UserInfoContext)
  return <>
    <div>name: {name}</div>
    <div>age: {age}</div>
    <ChildrenComponent />
  </>
}

export default UseContextExample