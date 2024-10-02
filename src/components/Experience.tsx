import React from "react";
import { Experience } from "../types/types";

export const ExperienceSection = ({ experience }: { experience: Experience }) => {
    return (
        <div className="p-4 rounded border-t flex flex-col gap-2">
            <div className="flex justify-between">
                <p className="text-xl">{experience.location}</p>
                <p className="text-sm">
                    {experience.startMonth} - {experience.endMonth}
                </p>
            </div>
            {experience.position && <p className="">{experience.position}</p>}
            <ul className="text-gray-700 list-disc list-inside mt-2">
                {experience.description.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    );
};
