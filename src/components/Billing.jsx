import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="Services" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h3 className={styles.heading2}>
      Mobile app development <br className="sm:block hidden" /> 
      </h3>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Branding your's own EV charging services is valuable for a range of organizations, from private companies to governments and public utilities. Our team makes white-labelling easy and affordable for any organization. Connect with our team for more options and to understand the demand in the market. 
      </p><br></br>
      <h2 className={styles.heading2}>
      Business portal<br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
     Always recommending custom CSMS to connect and control all your EV infrastructure from one central hub. Manage revenue, users, energy output, and so much more to get the real time experience. Our software is open, interoperable, and hardware-agnostic. Select an EV charger manufacturer and our team will help to get the business running. 
      </p><br></br>
      <h2 className={styles.heading2}>
      Integrations
<br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our platform is just the beginning and road to green technologies. Expand your EV and green tech experience with deep integrations across the board.



Contact our sales team and feel the difference. Free consultation. and the analysis

  </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;