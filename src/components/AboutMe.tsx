import React from "react";

export const AboutMe = () => {
    const bio = `
        I am currently a Software Engineer at Tractor Zoom, a technology startup with a goal to improve the experience
        for those buying and selling agricultual equipment. In my free time you can catch me working on any of these
        projects:
    `;
    const currentProjects = [
        { label: "A music guessing party game", link: "https://github.com/adamdlear/playlist-roulette" }];

    return (
        <div className="flex flex-col">
            <p className="text-base leading-relaxed text-gray-700">{bio}</p>
            <ul>
                {currentProjects.map((value, index) => (
                    <li key={index} className="list-disc list-inside mt-2">
                        <a
                            href={value.link}
                            className="text-blue-600 hover:text-blue-800 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {value.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
