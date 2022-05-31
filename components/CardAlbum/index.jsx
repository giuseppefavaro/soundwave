import styles from "./styles.module.scss";

import Link from "next/link";

export default function CardAlbum({ allData, inputSearchValue }) {
  return (


    // {isAlbum &&              
    // (allData.filter(
    //   album => {
    //     return album.iam === "album"
    //   }
    // ))}




    <div className={styles.all}>
      {allData &&
        allData
          ?.filter(
            (el) =>
              el?.title
                .toLowerCase()
                .trim()
                .includes(inputSearchValue.toLowerCase().trim()) ||
              el?.genres
                .toString()
                .toLowerCase()
                .trim()
                .includes(inputSearchValue.toLowerCase().trim())  
          )

          .map((el) => (
            <div className={styles.CardAlbum} key={el.id}>

              <Link href={`album/${el.id}`} key={el.id}>
                <a>
                  <div className={styles.img_container}>
                    <img></img>
                  </div>
                  <div className={styles.info_container}>
                    <h2>{el?.title}</h2>
                    <p className={styles.year}>{el?.year}</p>
                  </div>
                </a>
              </Link>
            </div>
          ))}
    </div>
  );
}
