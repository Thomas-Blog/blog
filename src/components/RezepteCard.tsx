import styles from "../styles/contentcard.module.css";
import Link from "next/link";
import Image from "next/dist/client/image";

export default function RezepteCard({ post }: any) {
  let { titel, slug, nahrungstyp, portionen, schwierigkeit, vorbereitungszeit, bild } = post.fields;

  return (
    <li className={styles.li}>
      <Link href={"/rezepte/" + slug}>
        <a>
          <article className={styles.rezept}>
            <div className={styles.img}>
              <Image src={"https:" + bild.fields.file.url} width={120} height={150} alt="Ein Bild des Gerichts" />
            </div>
            <section>
              <h3 className={styles.titel}>{titel}</h3>
              <p className={styles.recipeInfo}>
                Ein <span>{nahrungstyp != undefined && nahrungstyp + "es"}</span> Rezept mit einer geschätzten Vorbereitungszeit von{" "}
                <span>{vorbereitungszeit}</span> und der Schwierigkeit <span>{schwierigkeit}</span>.
              </p>
            </section>
          </article>
        </a>
      </Link>
    </li>
  );
}
