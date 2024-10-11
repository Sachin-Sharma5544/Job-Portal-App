import React from "react";
import { Card, CardWrapper } from "@repo/ui";
import { useParams } from "react-router-dom";

export const JobsCard = (): JSX.Element => {
    const { job } = useParams();
    const jobs = [
        {
            title: "Account Manager",
            company: "BizSolutions Inc.",
            location: "Mumbai, Maharashtra, India",
            description:
                "Manage client relationships and handle customer accounts.",
        },
        {
            title: "Aircraft Mechanic",
            company: "AeroTech",
            location: "Bengaluru, Karnataka, India",
            description: "Maintain and repair aircraft systems and components.",
        },
        {
            title: "AI Engineer",
            company: "AI Systems",
            location: "Hyderabad, Telangana, India",
            description:
                "Develop and implement AI algorithms and models for various applications.",
        },
        {
            title: "Assistant Professor",
            company: "Delhi University",
            location: "New Delhi, Delhi, India",
            description:
                "Teach undergraduate courses and conduct academic research.",
        },
        {
            title: "Architectural Designer",
            company: "CityScape Architects",
            location: "Pune, Maharashtra, India",
            description: "Design building plans and architectural models.",
        },
        {
            title: "Account Strategist",
            company: "MarketingWorks",
            location: "Chennai, Tamil Nadu, India",
            description:
                "Develop and manage marketing strategies for key client accounts.",
        },
        {
            title: "Automation Tester",
            company: "Tech Solutions",
            location: "Gurgaon, Haryana, India",
            description:
                "Design and execute automated tests to ensure software quality.",
        },
        {
            title: "Agronomist",
            company: "AgroTech",
            location: "Ahmedabad, Gujarat, India",
            description:
                "Study soil management and crop production techniques.",
        },
        {
            title: "Art Therapist",
            company: "Healing Arts Clinic",
            location: "Bengaluru, Karnataka, India",
            description:
                "Provide therapy to patients using creative art techniques.",
        },
        {
            title: "Asset Manager",
            company: "WealthWise Group",
            location: "Mumbai, Maharashtra, India",
            description:
                "Manage and oversee investment portfolios and assets for clients.",
        },
        {
            title: "Audio Engineer",
            company: "SoundPro Studios",
            location: "Chennai, Tamil Nadu, India",
            description:
                "Record, mix, and produce audio tracks for various media.",
        },
        {
            title: "Advertising Coordinator",
            company: "Media Ventures",
            location: "Hyderabad, Telangana, India",
            description:
                "Coordinate advertising campaigns and manage media placements.",
        },
        {
            title: "Agile Coach",
            company: "Agile Solutions",
            location: "Pune, Maharashtra, India",
            description:
                "Help teams implement agile methodologies to improve performance.",
        },
        {
            title: "Assistant Director",
            company: "Nonprofit Organization",
            location: "New Delhi, Delhi, India",
            description:
                "Assist in managing organizational operations and programs.",
        },
        {
            title: "Automation Technician",
            company: "Industrial Systems",
            location: "Bengaluru, Karnataka, India",
            description:
                "Install and maintain automated machinery in production facilities.",
        },
        {
            title: "Area Sales Manager",
            company: "RetailCo",
            location: "Kolkata, West Bengal, India",
            description: "Oversee sales operations in a designated region.",
        },
        {
            title: "Agricultural Technician",
            company: "Farming Innovations",
            location: "Nagpur, Maharashtra, India",
            description:
                "Assist with research and development in agricultural production.",
        },
        {
            title: "Analytics Consultant",
            company: "Data Insights",
            location: "Mumbai, Maharashtra, India",
            description:
                "Provide data-driven insights and strategies for business improvement.",
        },
        {
            title: "Architectural Engineer",
            company: "Skyline Engineering",
            location: "Delhi, India",
            description:
                "Design building systems including structural, electrical, and HVAC.",
        },
        {
            title: "Art Gallery Curator",
            company: "Fine Art Museum",
            location: "Jaipur, Rajasthan, India",
            description:
                "Manage art collections and organize gallery exhibits.",
        },
        {
            title: "Account Supervisor",
            company: "AdWorld Marketing",
            location: "Mumbai, Maharashtra, India",
            description:
                "Lead client account teams and oversee advertising campaigns.",
        },
        {
            title: "Assistant Store Manager",
            company: "Retail Depot",
            location: "Bengaluru, Karnataka, India",
            description:
                "Support the store manager in daily operations and staff management.",
        },
        {
            title: "Aircraft Inspector",
            company: "AirWorks",
            location: "Pune, Maharashtra, India",
            description:
                "Inspect aircraft for safety compliance and mechanical issues.",
        },
        {
            title: "Assistant Editor",
            company: "Publishing House",
            location: "Chennai, Tamil Nadu, India",
            description:
                "Support the editorial team in editing and reviewing manuscripts.",
        },
        {
            title: "Activity Coordinator",
            company: "Senior Living Community",
            location: "Mumbai, Maharashtra, India",
            description:
                "Plan and organize recreational activities for residents.",
        },
        {
            title: "AI Product Manager",
            company: "NextGen AI",
            location: "Hyderabad, Telangana, India",
            description:
                "Lead product development for artificial intelligence solutions.",
        },
        {
            title: "Application Security Engineer",
            company: "CyberTech",
            location: "Bengaluru, Karnataka, India",
            description:
                "Ensure the security of applications through testing and code review.",
        },
        {
            title: "Accounts Payable Specialist",
            company: "Finance Corp",
            location: "Mumbai, Maharashtra, India",
            description:
                "Manage vendor payments and track outgoing company expenses.",
        },
        {
            title: "Agriculture Research Scientist",
            company: "AgriTech Research",
            location: "Ahmedabad, Gujarat, India",
            description:
                "Conduct research on improving crop yields and farming practices.",
        },
        {
            title: "Assistant Coach",
            company: "Youth Sports Academy",
            location: "Pune, Maharashtra, India",
            description:
                "Assist the head coach in training and managing sports teams.",
        },
        {
            title: "Art Production Manager",
            company: "Creative Studios",
            location: "Delhi, India",
            description: "Oversee production schedules and artistic output.",
        },
        {
            title: "AI Solutions Architect",
            company: "Tech AI Solutions",
            location: "Bengaluru, Karnataka, India",
            description:
                "Design and oversee the implementation of AI-based systems.",
        },
        {
            title: "Automation Consultant",
            company: "Process Automators",
            location: "Mumbai, Maharashtra, India",
            description:
                "Consult on process automation strategies for various industries.",
        },
        {
            title: "Agricultural Specialist",
            company: "Green Farms Co.",
            location: "Chennai, Tamil Nadu, India",
            description:
                "Provide expertise on agricultural practices and sustainability.",
        },
        {
            title: "Assistant Operations Manager",
            company: "Logistics India",
            location: "Kolkata, West Bengal, India",
            description:
                "Assist in managing daily operations of the logistics department.",
        },
        {
            title: "Account Development Representative",
            company: "B2B Sales",
            location: "Hyderabad, Telangana, India",
            description:
                "Generate leads and nurture potential client relationships.",
        },
        {
            title: "AI Systems Administrator",
            company: "DataGen AI",
            location: "Bengaluru, Karnataka, India",
            description:
                "Administer and maintain AI systems for business intelligence.",
        },
        {
            title: "Asset Management Analyst",
            company: "CapitalWise",
            location: "Mumbai, Maharashtra, India",
            description:
                "Analyze and report on asset performance for investment portfolios.",
        },
        {
            title: "Art Teacher",
            company: "School of Arts",
            location: "Delhi, India",
            description: "Teach art and design to students of all ages.",
        },
        {
            title: "Assistant Brand Manager",
            company: "Fast-Moving Consumer Goods Co.",
            location: "Bengaluru, Karnataka, India",
            description: "Assist in managing and executing brand strategies.",
        },
        {
            title: "Agricultural Operations Manager",
            company: "AgriFarm India",
            location: "Jaipur, Rajasthan, India",
            description:
                "Oversee daily agricultural operations and production.",
        },
        {
            title: "Assistant Event Coordinator",
            company: "Event Masters",
            location: "Chennai, Tamil Nadu, India",
            description:
                "Help plan and execute events, ensuring smooth operations.",
        },
        {
            title: "Architectural Technologist",
            company: "Building Designs Pvt Ltd",
            location: "Mumbai, Maharashtra, India",
            description:
                "Prepare architectural plans and manage building specifications.",
        },
        {
            title: "Account Executive",
            company: "SalesPro",
            location: "Bengaluru, Karnataka, India",
            description: "Manage key accounts and drive sales growth.",
        },
        {
            title: "Audio-Visual Technician",
            company: "TechMedia Systems",
            location: "Mumbai, Maharashtra, India",
            description:
                "Set up and maintain AV equipment for events and meetings.",
        },
        {
            title: "AI Research Scientist",
            company: "Advanced AI Labs",
            location: "Pune, Maharashtra, India",
            description:
                "Conduct cutting-edge research in artificial intelligence technologies.",
        },
    ];

    return (
        <div>
            <div>
                <div className=" pt-20 pb-5">
                    <h1 className="text-3xl font-bold">
                        Top
                        {/* {job ? job[0].toUpperCase() + job.slice(1) : ""}{" "} */}
                        {` ${job} `}
                        companies hiring now
                    </h1>
                </div>
                <div className="">
                    <p className="pb-5">Showing {jobs.length} jobs</p>
                </div>
            </div>

            <CardWrapper>
                {jobs.map((jobItem) => (
                    <Card
                        classes="my-4 max-h-40 sm:max-w-[490px] md:max-w-[440px] lg:max-w-[485px] shadow-slate-900 sm:w-[490px] md:w-[440px] lg:w-[520px] 2xl:max-w-[520px]"
                        key={jobItem.title}
                    >
                        <>
                            <h2 className="text-xl font-semibold">
                                {jobItem.title}
                            </h2>
                            <div className="flex justify-start gap-4 pb-2 pt-2 text-neutral-500">
                                <div>Exp: 3-5 years</div>
                                <div>Sal: Not Disclosed</div>
                                <div>Location: Mumbai</div>
                            </div>
                            <div className="text-neutral-500">
                                {jobItem.description}{" "}
                            </div>
                        </>
                    </Card>
                ))}
            </CardWrapper>
            <div className="h-[20px]" />
        </div>
    );
};
