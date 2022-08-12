import { useState } from "react"

function UseStateExample() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(() => count + 1)
  }
  return (
    <>
      <div>count:{count}</div>
      <button onClick={handleClick}>+</button>
    </>
  )
}

export default UseStateExample