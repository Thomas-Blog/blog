import { createClient } from "contentful";
import Image from "next/image";
import styles from "../src/styles/galerie.module.css";
import Link from "next/link";

export default function galerie({ rezepte }: any) {
  return (
    <>
      <h1>Galerie</h1>
      <section className={styles.section}>
        {rezepte.map((rezept: any) => (
          <div key={rezept.sys.id} className={styles.img}>
            <Link href={"/rezepte/" + rezept.fields.slug}>
              <a>
                <Image src={"https:" + rezept.fields.bild.fields.file.url} alt={"Bild zum Rezept:" + rezept.fields.titel} width={360} height={450} />
                <h3 className={styles.description}>{rezept.fields.titel}</h3>
              </a>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}

export async function getStaticProps(): Promise<any> {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  const rezepte = await client.getEntries({ content_type: "rezept" });

  return {
    props: {
      rezepte: rezepte.items,
    },
    revalidate: 60,
  };
}
