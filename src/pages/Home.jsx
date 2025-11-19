import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Grid, Activity, Layers, Box } from 'lucide-react';

const Home = () => {
    const topics = [
        {
            title: 'Matrices',
            description: 'Explore the world of matrices, from basic operations to eigenvalues and diagonalization.',
            icon: Grid,
            href: '/matrices',
            color: 'bg-blue-500',
        },
        {
            title: 'Differential Calculus',
            description: 'Master partial derivatives, Taylor series, and optimization of multivariable functions.',
            icon: Activity,
            href: '/differential-calculus',
            color: 'bg-emerald-500',
        },
        {
            title: 'Integral Calculus',
            description: 'Dive into double and triple integrals, and learn about Beta and Gamma functions.',
            icon: Layers,
            href: '/integral-calculus',
            color: 'bg-purple-500',
        },
        {
            title: 'Vector Calculus',
            description: 'Understand vector fields, gradients, divergence, curl, and integral theorems.',
            icon: Box,
            href: '/vector-calculus',
            color: 'bg-orange-500',
        },
    ];

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                    Master Engineering Mathematics
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-slate-500 mb-8">
                    Interactive explanations, visual examples, and clear concepts to help you ace your exams.
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        to="/matrices"
                        className="btn-primary"
                    >
                        Start Learning
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>

            {/* Topics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
                {topics.map((topic) => (
                    <Link
                        key={topic.title}
                        to={topic.href}
                        className="group relative bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                        <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
                            <topic.icon className={`h-32 w-32 ${topic.color.replace('bg-', 'text-')}`} />
                        </div>

                        <div className="relative z-10">
                            <div className={`inline-flex p-3 rounded-xl ${topic.color} bg-opacity-10 mb-6`}>
                                <topic.icon className={`h-8 w-8 ${topic.color.replace('bg-', 'text-')}`} />
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                                {topic.title}
                            </h2>

                            <p className="text-slate-600 mb-6 text-lg">
                                {topic.description}
                            </p>

                            <span className="inline-flex items-center text-primary-600 font-semibold group-hover:translate-x-1 transition-transform">
                                Explore Topic
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
