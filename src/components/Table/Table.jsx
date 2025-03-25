import React from 'react'
import { useState } from 'react'

const table = () => {
    const languages = [
        {
            name: "HTML",
            content: "HTML is the standard markup language for creating Web pages. It defines the structure of web content."
        },
        {
            name: "CSS",
            content: "CSS is a style sheet language used for describing the presentation of a document written in HTML."
        },
        {
            name: "Javascript",
            content: "JavaScript is a programming language that enables interactive web pages and is an essential part of web applications."
        },
        {
            name: "Node.js",
            content: "Node.js is a runtime environment that allows executing JavaScript code outside of a web browser, commonly used for backend development."
        },
        {
            name: "Express",
            content: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web applications."
        },
        {
            name: "ReactJS",
            content: "React is a JavaScript library for building user interfaces, particularly single-page applications where UI updates are frequent."
        }
    ]
    const [currentLang, setCurrentLang] = useState('')

    return (
        <div className=''>
            <div className=" px-8 flex flex-wrap gap-6">
                {languages.map((language, index) => (
                    <div key={index}
                        onClick={() => setCurrentLang(languages[index])} className={` ${currentLang.name === language.name ? 'bg-amber-400 text-black' : 'bg-blue-600 text-white'} cursor-pointer rounded-md  p-2`}>{language.name}</div>
                ))}
            </div>
            <div className="border border-stone-300 rounded-lg w-[65%] p-4  m-8">
                {currentLang ? <><h2 className='font-semibold pb-2 text-xl'>{currentLang.name}</h2> <p>{currentLang.content}</p> </> : <h2>Nessun Elemento selezionato</h2>}
            </div>

        </div>
    )
}

export default table
