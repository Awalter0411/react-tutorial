import { useMemo, useState } from "react"

function UseMemoExample() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const isEqual = useMemo(() => {
    const flag = count1 === count2
    return flag ? 'yes' : 'no'
  }, [count1, count2])
  return <>
    <div>isEqual: {isEqual}</div>
    <button onClick={() => setCount1(() => count1 + 1)}>count1++</button>
    <button onClick={() => setCount2(() => count2 + 1)}>count2++</button>
  </>
}

export default UseMemoExample