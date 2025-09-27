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
        <div className='flex w-full flex-col gap-8'>
            <p className='text-2xl font-bold'><span className='primarycolor'>#</span>skills</p>
            <div className={`columns-5 md:gap-4 not-md:flex flex-col`} dir="">
                {Object.keys(skills).map((e) => (
                    <div key={e} className="break-inside-avoid border border-gray-400 mb-4" dir="ltr">
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
    )
}

export default Skills