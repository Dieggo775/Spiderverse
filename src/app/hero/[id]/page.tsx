interface IProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Hero({ params }: IProps) {
  const { id } = await params;
  return <h1>Spider selecionado: {id}</h1>;
}
