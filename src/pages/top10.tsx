import { GetStaticProps } from "next";
import { Title } from "../styles/pages/Home";

interface IProducts {
    id: string;
    title: string;
  }
  
  interface Top10Props {
    products: IProducts[];
  }

export default function Top10({ products }: Top10Props) {
    return (

        <section>
        <Title>Top10</Title>
        <ul>
          {products.map(product => {
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

export const getStaticProps: GetStaticProps<Top10Props> = async (context) => {
    const response = await fetch('http://localhost:3333/products');
    const products = await response.json();

    return {
        props: {
            products,
        },
        revalidate: 5,
    }
}