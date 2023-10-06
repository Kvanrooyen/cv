import React, { useState, useEffect } from "react";
import sanityClient from "../client";

export default function Experience() {
    const [experienceData, setExperience] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "experience"]{
                    title,
                    company,
                    startDate,
                    endDate,
                    description
                }`
            )
            .then((data) => setExperience(data))
            .catch(console.error);
    }, []);
    return (
        <main className='min-h-screen pt-4'>
            <section className='container mx-auto'>
                <h1 className='text-2xl lg:text-6xl mb-4'>Experience</h1>
                {experienceData && experienceData.map(experience => (
                    <div key={experience.title}>
                        <h2>{experience.title}</h2>
                        <h3>{experience.company}</h3>
                        <h3>{experience.startDate + " - " + experience.endDate}</h3>
                        <p className='px-4 lg:px-6 py-4 lg:py-8 prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto'>
                            {experience.description}
                        </p>
                    </div>
                ))}
            </section>
        </main>
    )
}