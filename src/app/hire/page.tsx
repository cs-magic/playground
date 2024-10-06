"use client";

import { NeuroraBannerSVG } from "@assets/branding/neurora/neurora-banner-svg.ts";
import { element2image } from "@cs-magic/common-frontend/element2image";
import { FlexContainer } from "@cs-magic/react/components/flex-container";
import { cn } from "@cs-magic/shadcn/lib/utils";
import { Button } from "@cs-magic/shadcn/ui/button";
import { Building, GraduationCap, Rocket } from "lucide-react";
import localFont from "next/font/local";
import React from "react";
import { JobComp, jobs } from "./job";

const POSTER_ID = "poster";

const font = localFont({
  src: "../../../../../assets/fonts/SourceHanSerifCN-Bold.otf",
});

const InternshipPoster = () => {
  return (
    <div
      id={POSTER_ID}
      className={cn(
        // "bg-background text-foreground",
        "bg-gradient-to-r from-purple-600 to-blue-500 text-white",
        "p-4 w-[360px] overflow-hidden ",
        font.className,
      )}
    >
      <NeuroraBannerSVG />

      <div className="flex flex-col gap-4 justify-between items-start">
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-2xl font-bold mb-2 text-center tracking-widest">
            飞脑科技实习招募
          </h1>
          <p className="text-sm mb-2 text-right italic">
            The Only One Product <br /> You Should Ship For Your Future <br />
            走向超级个体
          </p>

          <div>## Intro</div>
          {/*<h2>创始人简介</h2>*/}
          <div className={"text-xs flex flex-col gap-2"}>
            <p>嗨，我是飞脑科技创始人南川，很高兴您能看到这封招募信！</p>

            <p>
              我是一名有着十年独立开发经验的 90
              后创业者，我曾服务过来自硅谷北京上海长沙等多家初创公司，覆盖大模型、VR、电商等多个行业，技能栈包括系统、算法、前后端、逆向等。
            </p>

            <p>
              我怀着强大的使命与愿景成立我们的新公司「飞脑科技」，我的联创以及核心合作伙伴均来自清北，拥有强大的社群资源与行业
              Know How。
            </p>

            <p>
              我们获得了海升/东升/清智/启迪等多家孵化器的入驻资格，我们有信心能通过我们自研的生产力工具与整合能力率先服务好大模型时代的超级个体，继而普惠到更多人，加快实现人类最终机械飞升、数字永生的未来。
            </p>

            {/*    /!*&CEO&CTO、AI 社群 CS 魔法社主理人、金融+计算机交叉背景，独立开发者，曾自研量化交易策略并商业化、自学过大模型 SLAM 视觉算法/手机系统/前后端/逆向工程、骑行过川藏线/珠峰大本营、中国大学生自强之星，前百川全栈工程师，现五道口创业者，连续获得奇绩三次面试机会，获得 PNP、东升大厦、清智孵化器、启迪孵化器支持，目前 focus 在大模型+RPA 赛道，目标是打造一系列技术驱动、用户友好的产品赋能超级个体，最大化思想者的价值*!/*/}
          </div>

          <div>## Values</div>

          <div className="flex items-center">
            <GraduationCap size={16} className="mr-2" />
            <span className="text-xs">
              Steep Learning Curve · 我们挑战困难的问题
            </span>
          </div>

          <div className="flex items-center">
            <Rocket size={16} className="mr-2" />
            <span className="text-xs">
              Cutting-Edge Technology · 我们使用前沿的技术
            </span>
          </div>

          <div className="flex items-center">
            <Building size={16} className="mr-2" />
            <span className="text-xs">
              Easy Work Experience · 我们提倡自由的办公环境
            </span>
          </div>
        </div>

        <div>## Jobs</div>

        <div className="w-full">
          {jobs.map((job, index) => (
            <JobComp job={job} key={index} />
          ))}
        </div>
      </div>

      <div className="mt-2 text-center text-xs flex flex-col gap-2">
        <p>报酬：200 元/日 + 期权，具体面谈</p>

        <p>地点：北京海淀东升大厦（与众多奇绩校友共同开放办公）</p>

        <p>简历：mark@cs-magic.com，备注：飞脑科技</p>

        {/*<div className={'caret-accent'}>嗨，你好~ 我是飞脑科技创始人南川，很高兴您能看到这封招募信*/}

        {/*</div>*/}

        <hr />

        <p className={"italic"}>
          PS: We REALLY don't care about where you come from, and will try our
          best to help you grow faster.
        </p>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <FlexContainer>
      <FlexContainer orientation={"vertical"} className={"w-fit"}>
        <Button
          className={"w-full"}
          onClick={() => {
            void element2image(document.querySelector(`#${POSTER_ID}`)!, {});
          }}
        >
          Download
        </Button>

        <InternshipPoster />
      </FlexContainer>
    </FlexContainer>
  );
}
