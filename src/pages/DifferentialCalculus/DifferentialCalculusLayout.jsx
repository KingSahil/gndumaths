import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Activity, GitBranch, TrendingUp } from 'lucide-react';

const DifferentialCalculusLayout = () => {
    const location = useLocation();

    const topics = [
        { name: 'Partial Derivatives', href: '/differential-calculus', icon: Activity },
        { name: 'Total Derivatives', href: '/differential-calculus/total', icon: GitBranch },
        { name: 'Taylor\'s & Maxima/Minima', href: '/differential-calculus/taylor', icon: TrendingUp },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sticky top-24">
                    <h2 className="text-lg font-bold text-slate-900 mb-4 px-2">Differential Calculus</h2>
                    <nav className="space-y-1">
                        {topics.map((item) => {
                            const isActive = location.pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive
                                            ? 'bg-emerald-50 text-emerald-700'
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                        }`}
                                >
                                    <item.icon
                                        className={`flex-shrink-0 -ml-1 mr-3 h-5 w-5 ${isActive ? 'text-emerald-500' : 'text-slate-400'
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

export default DifferentialCalculusLayout;
