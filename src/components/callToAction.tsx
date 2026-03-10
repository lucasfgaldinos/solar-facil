import { Button } from "./button";
import { Section } from "./section";
import { Title } from "./title";

type CallToActionProps = React.ComponentProps<"div"> & {
  title: string;
  description: string;
};

export function CallToAction({
  title,
  description,
  ...props
}: CallToActionProps) {
  return (
    <div {...props}>
      <Section bgColor="blue">
        <Title>{title}</Title>

        <p className="text-text text-center md:text-lg my-8">{description}</p>

        <div className="mx-auto flex justify-center">
          <Button>Solicitar Orçamento</Button>
        </div>
      </Section>
    </div>
  );
}
