import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "author"]{
            name,
            bio,
            github,
            email
        }`
            )
            .then((data) => setAuthor(data[0]))
            .catch(console.error);
    }, []);

    const formatGitHubLink = (githubLink) => {
        // Remove "https://" from the beginning of the link
        return githubLink.replace(/^https:\/\//, "");
    };

    return (
        <main className='min-h-screen pt-4'>
            <div>
                <section className='container mx-auto lg:w-2/4'>
                    {author && (
                        <>
                            <div className='text-3xl lg:text-5xl mb-3 text-center'>{author.name}</div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-center">
                                {author.github && (
                                    <div>
                                        <i className="fab fa-github text-2xl text-gray-700 mr-2"></i>
                                        <a
                                            href={author.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline "
                                        >
                                            {formatGitHubLink(author.github)}
                                        </a>
                                    </div>
                                )}

                                {/* Email Link */}
                                {author.email && (
                                    <div>
                                        <i className="far fa-envelope text-2xl text-gray-700 mr-2"></i>
                                        <a
                                            href={`mailto:${author.email}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            {author.email}
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className='px-4 lg:px-6 py-4 lg:py-8 prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto'>
                                {/* Render the bio using BlockContent */}
                                <BlockContent blocks={author.bio} />
                            </div>
                        </>
                    )}
                </section>
            </div>
        </main>
    )
}
