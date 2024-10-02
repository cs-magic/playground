import {Code, LucideIcon, PenTool} from "lucide-react";
import React from "react";

interface Job {
    title: string;
    icon: LucideIcon;
    requirements: string[];
    tasks: string[]
}

export const jobs: Job[] = [
    {
        title: "Full Stack Engineer · 全栈研发工程师",
        icon: Code,
        requirements: [
            // "Develop AI-powered tools / 开发AI驱动工具",
            // "Optimize user experience / 优化用户体验",
            // "Collaborate on innovative projects / 协作创新项目",
            // "能基于 Claude / ChatGPT 等调优 prompt",
            "熟练应用 NextJS / Tailwind / Monorepo 等快速交付",
            "熟练理解设计原理、逆向工程等，拥有 SDK 封装能力",
            "产品丰富、代码洁癖者优先",
        ],
        tasks:[
            "能基于 NextJS / Tailwind 等快速交付客户项目",
            "能基于 TypeScript Monorepo 优化与迭代项目架构",
            "能基于 Claude / ChatGPT 等调优项目 prompt",
            "拥有一定的逆向工程、SDK 抽象与封装能力",
        ]
    },
    {
        title: "UIUX Designer · 用户交互设计师",
        icon: PenTool,
        requirements: [
            "熟练使用 Figma 等搭建品牌系统 / 产品原型",
            "熟练使用 MJ / SD 等创造惊艳的 UI / UX",
            "产品出色、审美卓越者优先"
        ],
        tasks:[

        ]
    },
];
export const JobComp = ({job}: { job: Job }) => {
    return (
        <div className="bg-white text-purple-600 p-2 rounded-lg mb-2 flex flex-col gap-2">
            <h2 className="font-bold flex items-center border-b">
                <job.icon size={16} className="mr-2"/>
                {job.title}
            </h2>

            {/*<h3 className={"font-medium"}>Requirements · 技能要求</h3>*/}

            <ul className="text-xs list-disc list-inside">
                {job.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                ))}
            </ul>
        </div>
    );
};