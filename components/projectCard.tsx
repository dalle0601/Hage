import React from 'react';

interface IProjectCard {
    title: string;
    description: string;
    image: string;
    link: string;
    [x: string]: any;
}
const ProjectCard = ({ title, description, image, link, ...restProps }: IProjectCard) => {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-md overflow-hidden shadow-md">
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="px-6 py-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
            <div className="px-6 py-4">
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    View Project
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
