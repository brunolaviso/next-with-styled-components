import { GetServerSideProps } from 'next';
import { Title } from '../styles/pages/Home'

interface IProducts {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: IProducts[];
}

export default function Home({ recommendedProducts }: HomeProps) {
  return (
      <section>
        <Title>Products</Title>
        <ul>
          {recommendedProducts.map(product => {
            return (
              <li key={product.id}>
                {product.title}
              </li>
            )
          })}
        </ul>
      </section>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('http://localhost:3333/recommended');
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }
  }
}