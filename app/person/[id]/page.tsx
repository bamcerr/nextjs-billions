import Image from "next/image";
import styles from "./page.module.css";

interface IPerson {
  id:              string;
  state:           string;
  city:            string;
  name:            string;
  country:         string;
  position:        number;
  industries:      string[];
  financialAssets: IFinancialAsset[];
  thumbnail:       string;
  squareImage:     string;
  bio:             string[];
  about:           string[];
  netWorth:        number;
}

interface IFinancialAsset {
  exchange:             string;
  ticker:               string;
  companyName:          string;
  numberOfShares:       number;
  sharePrice:           number;
  currencyCode:         string;
  exchangeRate:         number;
  interactive:          boolean;
  currentPrice:         number;
  exerciseOptionPrice?: number;
}

async function getBillionairesItem({id}:{id:string}):Promise<IPerson> {
  return await (await fetch(`https://billions-api.nomadcoders.workers.dev/person/${id}`)).json()
}


export default async function Person({ params: { id } }:{ params: {id: string}}) {
  const data = await getBillionairesItem({id});

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <h1 className={styles.title} >{data.name}</h1>
        <Image src={data.squareImage} alt={data.name} width={200} height={200} />
        <p>
          NetWorth: ${data.netWorth}<br />
          Country: {data.state} {data.city} {data.country}<br />
          Industries: {data.industries.join(' ')}<br />
        </p>
        <p>
          {data.about?.join('\n')}
        </p>
        <p>
          {data.bio?.join(' ')}
        </p>

        <br />
        <hr className={styles.divider} />
        <br />
        
        <h4>Financial Assets:</h4>
        <br />
        <ul className={styles.list}>
          {data.financialAssets?.map(item => (
            <li>
              Ticker: {item.ticker} <br />
              Shares: {item.numberOfShares} <br />
              SharePrice: {item.sharePrice} <br />
            </li>
          ))}
        </ul>
        
      
      </article>
    </main>
  )
}
