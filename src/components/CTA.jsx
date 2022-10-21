import { Mango } from ".";
import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>CONTACT US</h2>
      <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
      <p>Let us tailor a service package that meets your needs. Tell us a little about your business, and we will get back to you with some ideas as soon as possible.</p>

<p>Address :: 5 Montpelier St Unit 430/1, Brampton, ON L6Y 6H4</p>
<p>Contact Number :: 705 46 56663</p>

Hours::
Monday - Friday

09:00 a.m. – 05:00 p.m.




<p>Saturday-Sunday

Closed</p>


 



      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Mango/>
    </div>
  </section>
);

export default CTA;