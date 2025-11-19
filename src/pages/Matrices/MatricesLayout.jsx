import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { BookOpen, Hash, GitMerge, Activity } from 'lucide-react';

const MatricesLayout = () => {
    const location = useLocation();

    const topics = [
        { name: 'Introduction & Complex Matrices', href: '/matrices', icon: BookOpen },
        { name: 'Rank, Inverse & Normal Form', href: '/matrices/rank', icon: Hash },
        { name: 'System of Equations', href: '/matrices/system', icon: GitMerge },
        { name: 'Eigen Values & Vectors', href: '/matrices/eigen', icon: Activity },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sticky top-24">
                    <h2 className="text-lg font-bold text-slate-900 mb-4 px-2">Matrices</h2>
                    <nav className="space-y-1">
                        {topics.map((item) => {
                            const isActive = location.pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive
                                            ? 'bg-primary-50 text-primary-700'
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                        }`}
                                >
                                    <item.icon
                                        className={`flex-shrink-0 -ml-1 mr-3 h-5 w-5 ${isActive ? 'text-primary-500' : 'text-slate-400'
                                            }`}
                                    />
                                    <span className="truncate">{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MatricesLayout;
