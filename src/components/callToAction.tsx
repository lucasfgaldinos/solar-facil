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
      <Section bgColor="green">
        <Title>{title}</Title>

        <p className="text-text-secondary text-center font-medium mt-3 mb-6">
          {description}
        </p>

        <div className="mx-auto flex justify-center">
          <Button>Solicitar Orçamento</Button>
        </div>
      </Section>
    </div>
  );
}
