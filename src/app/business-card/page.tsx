"use client";

import  MarkAvatarJPG from "@assets/branding/mark/mark-avatar.jpg";
import  MarkWechatQrcodeSVG from "@assets/branding/mark/mark-wechat-qrcode.svg";
import  MarkWxmpSVG from "@assets/branding/mark/mark-wxmp.svg";
import NeuroraSVG  from "@assets/branding/neurora/neurora-banner-current-trans.svg";
import { element2image } from "@cs-magic/common-frontend/element2image";
import { FlexContainer } from "@cs-magic/react/components/flex-container";
import { AspectRatio } from "@cs-magic/shadcn/ui/aspect-ratio";
import { Button } from "@cs-magic/shadcn/ui/button";
import { Cpu, Globe, Terminal } from "lucide-react";
import Image from "next/image";
import React from "react";

const BusinessCardId = "business-card";

const BusinessCardCore = () => {
  return (
    <div className={"w-[620px]"} id={BusinessCardId}>
      <AspectRatio ratio={2}>
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8 rounded-lg shadow-2xl w-full h-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="space-y-4 flex-grow">
              <div className="flex items-center space-x-4">
                <Image
                  width={320}
                  height={320}
                  src={MarkAvatarJPG}
                  alt="Mark's profile"
                  className="rounded-full w-24 h-24 border-2 border-blue-400"
                />
                <div>
                  <h1 className="text-4xl font-bold tracking-tight">
                    南川 Mark
                  </h1>
                  <div className="flex items-center mt-2">
                    {/*<Zap className="w-5 h-5 text-yellow-400" />*/}
                    <NeuroraSVG width={32} />

                    <p className="text-xl font-semibold">
                      飞脑科技创始人 & CEO
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-2 mt-4">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-green-400" />
                  <p>A Builder，正在打造多款 AI 产品</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <p> A Thinker，热衷于记录与思考人生</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <p>专注于赋能超级个体</p>
                </div>
              </div>
            </div>

            <div className={"flex flex-col gap-1"}>
              <div className="flex flex-col items-center justify-between h-full gap-1">
                <div className="bg-white p-1 rounded ">
                  <MarkWechatQrcodeSVG width={72} color={"#6B227A"} />
                </div>
                <p className="text-sm text-right">Personal</p>
              </div>

              <div className="flex flex-col items-center justify-between h-full gap-1">
                <div className="bg-white p-1 rounded ">
                  <MarkWxmpSVG width={72} color={"#172670"} />
                </div>
                <p className="text-sm text-right"> Official</p>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-blue-700">
            <p className="text-sm text-blue-300">
              This is an Indie Hacker passionate about building COOL things. 🚀
              🚀 🚀
            </p>
          </div>
        </div>
      </AspectRatio>
    </div>
  );
};

const BusinessCard = () => {
  return (
    <FlexContainer>
      <FlexContainer orientation={"vertical"} className={"w-fit"}>
        <Button
          className={"w-full"}
          onClick={() => {
            void element2image(
              document.querySelector(`#${BusinessCardId}`)!,
              {},
            );
          }}
        >
          Download
        </Button>

        <BusinessCardCore />
      </FlexContainer>
    </FlexContainer>
  );
};

export default BusinessCard;
