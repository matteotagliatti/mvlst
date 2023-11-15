interface TitleProps {
  title: string;
  subtitle: string;
}

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <section className="mb-8">
      <h1 className="font-medium text-lg">{title}</h1>
      <h2 className="font-normal text-secondary text-sm">{subtitle}</h2>
    </section>
  );
}
