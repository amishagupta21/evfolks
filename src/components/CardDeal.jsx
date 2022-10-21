import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      SOLUTION CONSULTANT <br className="sm:block hidden" /> an expert understanding of a business’ products and services

      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Solution Consultants promote, explain and integrate technical products on behalf of the businesses that they work for. You could be using your sales skills to close a lucrative business deal or testing brand-new technology solutions that could transform your industry.

      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;