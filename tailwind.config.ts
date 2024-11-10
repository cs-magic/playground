import tailwindConfig from "../../tailwind.config";

(tailwindConfig.content as string[]).push(
    "../../node_modules/@cs-magic/common/dist/**/*",
    "../../node_modules/@cs-magic/common-frontend/dist/**/*",
    "../../node_modules/@cs-magic/shadcn/dist/**/*",
    "../../node_modules/@cs-magic/react/dist/**/*",
    "./src/**/*.{ts,tsx}");

export default tailwindConfig;
