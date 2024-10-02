import { ButtonLink } from "@cs-magic/react/components/button-link";
import { FlexContainer } from "@cs-magic/react/components/flex-container";

export default function Page() {
  return (
    <FlexContainer>
      <ButtonLink href={"/business-card"}>Business Card</ButtonLink>
      <ButtonLink href={"/hire"}>Hire</ButtonLink>
    </FlexContainer>
  );
}
