import React from 'react'

let skills = {
    "Other": ["HTML", "CSS"],
    "Tools": ["VSCode", "Linux", "Figma", "Gnome", "Ubuntu", "Git", "Fedora", "GodotEngine", "Arduino", "Vite"],
    "Databases": ["Mongodb"],
    "Frameworks": ["React", "Flask", "Express.js", "Next.js", "Arduino-framework", "Espressif-framework", "TailwindCSS", "TensorFlow"],
    "Languages": ["Python", "JavaScript", "C", "Java", "GDScript", "Embedded-C"],
};


const Skills = () => {
    return (
        <div className='flex w-full flex-col'>
            <div className='flex w-full text-2xl flex-col'>
                <div className='flex w-full text-2xl items-center h-fit'>
                    <p><span className='primarycolor'>#</span>skills</p>
                    <div className='mx-2 w-1/2 h-0.5 bg-[#C778DB]'></div>
                </div>
                <div className='flex w-full align-middle py-10'>
                    <div className='flex w-full relative not-md:hidden'>
                        <div className='w-1/4 border-2 border-[#C778DD] h-1/3 bottom-0 absolute'>
                            <div className='w-full border-2  border-[#C778DD] h-full absolute top-1/3 left-1/3'></div>
                        </div>
                        <div className="grid grid-cols-6 h-1/3 w-1/3 absolute bottom-1/10 right-0 z-20">
                            {Array.from({ length: 30 }).map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-[#ABB2BF] rounded-full"></div>
                            ))}
                        </div>
                        <div className="grid grid-cols-6 h-1/3 w-1/3 absolute top-1/5 left-0 z-20">
                            {Array.from({ length: 30 }).map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-[#ABB2BF] rounded-full"></div>
                            ))}
                        </div>
                        <div className='w-1/6 h-1/6 absolute top-0 right-1/6 border-1 border-gray-400'></div>
                        <div className='w-2/6 h-2/6 absolute bottom-2/4 right-1/3 border-1 border-gray-400'></div>
                    </div>


                    <div className="columns-3 gap-4 w-full not-md:w-fit not-md:flex not-md:flex-col">
                        {Object.keys(skills).map((e) => (
                            <div key={e} className="break-inside-avoid border border-gray-400 mb-4 not-md:w-fit" dir="ltr">
                                <h3 className="font-bold border-b border-gray-400 p-2">{e}</h3>
                                <p className="flex flex-wrap p-2">
                                    {skills[e].map((v) => (
                                        <span key={v} className="mr-2">{v}</span>
                                    ))}
                                </p>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div >
    )
}

export default Skills