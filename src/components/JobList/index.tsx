"use client"

import PostNewJob from "../PostNewJob";

function JobList() {
    const profileInfo = {
        role: "recruiter"
    }
    return ( <div>
        <div className="mx-auto  max-w-7xl">
            <div className="flex items-baseline dark:border-white justify-between border-b border-gray-200 pb-6 pt-24">
                <h1 className="text-4xl dark:text-white font-bold tracking-tight text-gray-900">
                    {profileInfo?.role === "candidate" ? "Explore All Jobs" : "Jobs Dashboard"}
                </h1>
                <div className="flex items-center">
                    {profileInfo?.role === "candidate" ? "Filter" : ( <PostNewJob /> )}
                </div>
            </div>
        </div>
    </div> );
}

export default JobList;