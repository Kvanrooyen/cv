import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";

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

    const formatDate = (dateString) => {
        if (!dateString) {
            return "Present";
        }
        const options = { year: 'numeric', month: 'long' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <main>
            <div className="container mx-auto lg:w-2/4 p-4 lg:p-8">
                {experienceData && experienceData.map((experience, index) => (
                    <div key={index} className="mb-8">
                        <h2 className='text-2xl lg:text-4xl mb-2'>{experience.title}</h2>
                        <h3 className='text-lg lg:text-xl mb-2'>{experience.company}</h3>
                        <p className='text-gray-500 text-sm mb-2'>{formatDate(experience.startDate)} - {formatDate(experience.endDate)}</p>

                        {/* Render the job description using BlockContent */}
                        {experience.description && (
                            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
                                <BlockContent blocks={experience.description} />
                            </div>
                        )}

                        {index < experienceData.length - 1 && (
                            <hr className="my-6 border-t-2 border-gray-600" />
                        )}
                    </div>
                ))}
            </div>
        </main>
    )
}