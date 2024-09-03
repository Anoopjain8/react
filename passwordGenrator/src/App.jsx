import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numallow, setNumallow] = useState(false)
  const [charallow, setCharallow] = useState(false)
  const [password, setPassword] = useState("")

  const passRef = useRef(null)

  const passwordGenrator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMabcdefghijklmNOPQRSTUVWXYZnopqrstuvwxyz"
    if (numallow) str += "01234567890123456789012345678901234567890123456789"
    if (charallow) str += "@#$&_"

    for (let i = 0; i < length; i++) {
      let char = Math.random() * str.length
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numallow, charallow, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => { passwordGenrator() }, [length, numallow, charallow, passwordGenrator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-black bg-gray-400  '>
        <h1 className='text-black text-center my-3'>Password Genrator</h1>
        <div className='flex shadw rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passRef}
          />
          <button onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-slate-10 gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={24}
              value={length}
              className='cursor-pointer '
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numallow}
              id="numberInput"
              onChange={() => {
                setNumallow((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charallow}
              id="characterInput"
              onChange={() => {
                setCharallow((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
