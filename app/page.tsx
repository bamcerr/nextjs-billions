import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


async function getBillionairesList(): Promise<IBillionons[]> {
  return await (await fetch('https://billions-api.nomadcoders.workers.dev/')).json()
}

interface IBillionons {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[]
}

export default async function Home() {
  const data = await getBillionairesList();

  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <h1 className={styles.title}>Billionaires</h1>
        <div className={styles.container}>
          {data?.map(item => (
             <Link key={item.id} href={`/person/${item.id}`}>
              <article className={styles.item}>
                <div className={styles.img_box}>
                  <Image 
                    src={item.squareImage} 
                    alt={item.name} 
                    fill
                    sizes={'20vw'}
                    className={styles.img}
                    priority
                  />
                </div>
              
                <div className={styles.item_bottom}>
                  <h4>{item.name}</h4>
                  <p>${item.netWorth.toFixed(0)} | {item.industries.join(' ')}</p>
                </div>
              </article>
            </Link>
          ))}
          
        </div>
      </section>
    </main>
  );
}

