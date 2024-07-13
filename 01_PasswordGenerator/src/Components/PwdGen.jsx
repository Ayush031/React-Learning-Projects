import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {
    const [length, setLength] = useState(8);
    const [NumAlw, setNumAlw] = useState(false);
    const [CharAlw, setCharAlw] = useState(false);
    const [Pwd, setPwd] = useState("")
    //useRef Hook
    const pwdRef = useRef(null)

    const pwdGenrator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"
        if (NumAlw) str += "0123456789"
        if (CharAlw) str += "!@#$%^&*"
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPwd(pass)
    }, [length, NumAlw, CharAlw, setPwd])

    const copyPwdToClip = useCallback(() => {
        pwdRef.current?.select()
        // pwdRef.current?.setSelectionRange(0,3)// to select a specific chars
        window.navigator.clipboard.writeText(Pwd)
    }, [Pwd])

    useEffect(() => {
        pwdGenrator()
    }, [length, NumAlw, CharAlw, pwdGenrator])

    return (
        <>
            <div className="bg-black h-screen w-full text-white pt-10">
                <div className="w-full max-w-md shadow-md mx-auto rounded-lg p-5 text-orange-500 bg-gray-700">
                    <h1 className='text-white text-center mb-5' >PWD Generator</h1>
                    <div className="flex shadow-md overflow-hidden rounded-lg mb-4">
                        <input type="text"
                            value={Pwd}
                            className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={pwdRef} />
                        <button onClick={copyPwdToClip} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
                    </div>
                    <div className='flex gap-x-10' >
                        <div className="flex items-center gap-x-1">
                            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {
                                setLength(e.target.value)
                            }} />
                            <label>Length: {length}</label>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <input type="checkbox" id='chars' onChange={() => {
                                setCharAlw((prev) => !prev)
                            }} />
                            <label htmlFor="chars">Char</label>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <input type="checkbox" id="nums" onChange={() => {
                                setNumAlw((prev) => !prev)
                            }} />
                            <label htmlFor="nums">Num</label>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default App
