import { useState, useEffect } from "react"

interface User {
  name: string,
  age: number
}

function getUserInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'curry',
        age: 30
      } as User)
    }, 500)
  })
}

function UseEffectExample() {
  const [userInfo, setUserInfo] = useState<User | null>(null)
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => { console.log(123) }, 1000)
    setUserInfo(null)
    getUserInfo().then((res) => {
      setUserInfo(res as User)
    })
    return () => {
      clearInterval(timer)
    }
  }, [count])

  return (
    <>
      <div>name:{userInfo?.name}</div>
      <div>age:{userInfo?.age}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(() => count + 1)}>+1</button>
    </>
  )
}

export default UseEffectExample