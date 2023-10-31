import Image from "next/image";

import styles from "@/styles/food/foodlist.module.css";

const TextContent = ({ name, category }) => {
  return (
    <div className={styles["text-content"]}>
      <span className={styles.title}>{name}</span>
      <span className={styles.subtitle}>{category}</span>
    </div>
  );
};

const ImgButton = ({ imgName, handleBtn }) => (
  <button onClick={handleBtn}>
    <Image
      className={styles.img}
      src={`/img/icons/${imgName}.png`}
      width={15}
      height={15}
      alt=""
    />
  </button>
);

const ButtonRow = ({ openModal }) => (
  <div className={styles["btn-row"]}>
    <ImgButton imgName={"like"} />
    <ImgButton imgName={"edit"} handleBtn={openModal}></ImgButton>
    <ImgButton imgName={"trash"} />
  </div>
);

const FoodItem = ({ openModal }) => (
  <div className={styles.container}>
    <Image
      className={styles.img}
      src="/img/food/pinto.jpg"
      width={200}
      height={130}
      alt="Picture of the author"
    />
    <div className={styles.details}>
      <TextContent name={"Salad Caprese Pasta Spaghetti"} category={"Food"} />
      <ButtonRow openModal={openModal} />
    </div>
  </div>
);

export default function ListFood({ openModal }) {
  return (
    <div className={styles["food-content"]}>
      {Array.from({ length: 20 }, (_, i) => (
        <FoodItem key={i} openModal={openModal} />
      ))}
    </div>
  );
}
