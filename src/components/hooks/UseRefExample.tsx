import { useRef } from "react"

function UseRefExample() {
  // 保存状态
  const status = useRef(false)
  // 获取dom
  const inputElement = useRef(null)
  const handleClick = () => {
    console.log(inputElement.current)
    console.log(status.current)
  }
  return <>
    <input ref={inputElement} />
    <button onClick={handleClick}>submit</button>
  </>
}

export default UseRefExample