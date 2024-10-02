import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { AboutMe } from "../components/AboutMe";
import { ExperienceSection } from "../components/Experience";
import { Experience } from "../types/types";

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

    const work: Experience[] = [
        {
            location: "Tractor Zoom",
            position: "Software Engineer",
            startMonth: "June 2024",
            endMonth: "Present",
            description: [],
        },
        {
            location: "Hy-Vee, Inc.",
            position: "Data Science Intern",
            startMonth: "June 2023",
            endMonth: "August 2023",
            description: [
                "Use Python and SQL to explore and transform data",
                "Create code for the gathering, merging, and aggregating of data",
                "Utilize Artificial Intelligence and other Natural Language Processing techniques to predict item labels",
                "Wrote unit tests for a large classication prediction model",
            ],
        },
        {
            location: "Federal Reserve Bank of Chicago",
            position: "Software Engineering Intern",
            startMonth: "June 2022",
            endMonth: "August 2022",
            description: [
                "Developed, tested, and deployed code for application that processes payments for 10,000+ organizations",
                "Collaborated with Scrum team using Agile methodologies",
                "Improved security and performance public-facing webpages",
                "Modified web applications using the Angular framework",
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

export const Head: HeadFC = () => <title>Home Page</title>;
