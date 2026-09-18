type Props = {
  children: React.ReactNode;
};

export function Title({ children }: Props): React.ReactElement {
  return <h1 className="text-5xl">{children}</h1>;
}
