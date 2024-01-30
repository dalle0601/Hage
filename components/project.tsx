import React from 'react';
import ProjectCard from './projectCard';

interface IProject {
    title: string;
    description: string;
    image: string;
    link: string;
}

const Project = () => {
    const projects: IProject[] = [
        {
            title: 'Project 1',
            description: 'Description for Project 1',
            image: 'https://placekitten.com/300/200',
            link: 'https://example.com/project1',
        },
        {
            title: 'Project 2',
            description: 'Description for Project 2',
            image: 'https://placekitten.com/300/200',
            link: 'https://example.com/project1',
        },
        {
            title: 'Project 3',
            description: 'Description for Project 3',
            image: 'https://placekitten.com/300/200',
            link: 'https://example.com/project1',
        },
        {
            title: 'Project 4',
            description: 'Description for Project 4',
            image: 'https://placekitten.com/300/200',
            link: 'https://example.com/project1',
        },
        {
            title: 'Project 5',
            description: 'Description for Project 5',
            image: 'https://placekitten.com/300/200',
            link: 'https://example.com/project1',
        },
        {
            title: 'Project 5',
            description: 'Description for Project 5',
            image: 'https://placekitten.com/300/200',
            link: 'https://example.com/project1',
        },
        {
            title: 'Project 5',
            description: 'Description for Project 5',
            image: 'https://placekitten.com/300/200',
            link: 'https://example.com/project1',
        },
        {
            title: 'Project 5',
            description: 'Description for Project 5',
            image: 'https://placekitten.com/300/200',
            link: 'https://example.com/project1',
        },
        {
            title: 'Project 5',
            description: 'Description for Project 5',
            image: 'https://placekitten.com/300/200',
            link: 'https://example.com/project1',
        },
        {
            title: 'Project 5',
            description: 'Description for Project 5',
            image: 'https://placekitten.com/300/200',
            link: 'https://example.com/project1',
        },
        {
            title: 'Project 5',
            description: 'Description for Project 5',
            image: 'https://placekitten.com/300/200',
            link: 'https://example.com/project1',
        },
        {
            title: 'Project 5',
            description: 'Description for Project 5',
            image: 'https://placekitten.com/300/200',
            link: 'https://example.com/project1',
        },
        {
            title: 'Project 5',
            description: 'Description for Project 5',
            image: 'https://placekitten.com/300/200',
            link: 'https://example.com/project1',
        },
        {
            title: 'Project 5',
            description: 'Description for Project 5',
            image: 'https://placekitten.com/300/200',
            link: 'https://example.com/project1',
        },
        {
            title: 'Project 5',
            description: 'Description for Project 5',
            image: 'https://placekitten.com/300/200',
            link: 'https://example.com/project1',
        },
        {
            title: 'Project 5',
            description: 'Description for Project 5',
            image: 'https://placekitten.com/300/200',
            link: 'https://example.com/project1',
        },
        // Add more project objects as needed
    ];

    return (
        <div className="flex overflow-x-auto min-w-full pt-10">
            <div className="flex space-x-4">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Project;
