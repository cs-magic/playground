import _ from "lodash"

import { ButtonLink } from "@cs-magic/react/components/button-link"
import { FlexContainer } from "@cs-magic/react/components/flex-container"

const Entry = ({ name }: { name: string }) => {
  return (
    <ButtonLink
      href={`/${name}`}
      className="bg-white text-purple-600 hover:bg-purple-100 transition-colors w-full text-sm sm:text-base py-2 px-3"
    >
      {_(name).startCase().toUpperCase()}
    </ButtonLink>
  )
}

export default function Page() {
  return (
    <div className="bg-white bg-opacity-10 p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-sm w-full max-w-md">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">
        Neurora Playground
      </h1>
      <FlexContainer className="gap-2 sm:gap-3 flex-col sm:flex-row">
        <Entry name={"business-card"} />
        <Entry name={"hire"} />
        <Entry name={"repos"} />
        <Entry name={"thoughts"} />
      </FlexContainer>
    </div>
  )
}
