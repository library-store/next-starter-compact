export default function AuthLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  console.log(props.params);
  return <div>{props.children}</div>;
}
