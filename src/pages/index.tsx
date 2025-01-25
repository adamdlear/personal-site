import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { AboutMe } from "../components/AboutMe";
import { ExperienceSection } from "../components/Experience";
import { Experience } from "../types/types";
import { workExperience } from "./values";

const IndexPage: React.FC<PageProps> = () => {
    const education: Experience[] = [
        {
            location: "Drake University",
            position: null,
            startMonth: "August 2024",
            endMonth: "May 2024",
            description: [
                "Majors: Computer Science & Artificial Intelligence",
                "GPA: 3.88",
                "Favorite Courses: Software Engineering, Algorithm Analysis, Programming Languages",
            ],
        },
    ];

    return (
        <main className="px-4 py-16 sm:px-6 md:px-8 min-h-screen flex justify-center">
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <section>
                    <AboutMe />
                </section>
                <section className="flex flex-col gap-3">
                    <h1 className="text-2xl font-semibold">Education</h1>
                    {education.map((value, index) => (
                        <div key={index}>
                            <ExperienceSection experience={value} />
                        </div>
                    ))}
                </section>
                <section className="flex flex-col gap-3">
                    <h1 className="text-2xl font-semibold">Work Experience</h1>
                    {work.map((value, index) => (
                        <div key={index}>
                            <ExperienceSection experience={value} />
                        </div>
                    ))}
                </section>
            </div>
        </main>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Personal Portfolio</title>;
