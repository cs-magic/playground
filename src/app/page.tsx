import { ButtonLink } from "@cs-magic/react/components/button-link";
import { FlexContainer } from "@cs-magic/react/components/flex-container";

export default function Page() {
  return (
      <div className="bg-white bg-opacity-10 p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-sm w-full max-w-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">Neurora Playground</h1>
        <FlexContainer className="gap-2 sm:gap-3 flex-col sm:flex-row">
          <ButtonLink href="/business-card" className="bg-white text-purple-600 hover:bg-purple-100 transition-colors w-full text-sm sm:text-base py-2 px-3">
            Business Card
          </ButtonLink>
          <ButtonLink href="/hire" className="bg-white text-blue-600 hover:bg-blue-100 transition-colors w-full text-sm sm:text-base py-2 px-3">
            Hire
          </ButtonLink>
          <ButtonLink href="/repos" className="bg-white text-green-600 hover:bg-green-100 transition-colors w-full text-sm sm:text-base py-2 px-3">
            Repos
          </ButtonLink>
        </FlexContainer>
      </div>

  );
}
