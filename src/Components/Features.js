import Button from "./Button";
import star from "../assets/Star.svg";
import shield from "../assets/Shield.svg";
import send from "../assets/Send.svg";

const features = [
    {
      id: "feature-1",
      icon: star,
      title: "Rewards",
      content:
        "The best credit cards offer some tantalizing combinations of promotions and prizes",
    },
    {
      id: "feature-2",
      icon: shield,
      title: "100% Secured",
      content:
        "We take proactive steps make sure your information and transactions are secure.",
    },
    {
      id: "feature-3",
      icon: send,
      title: "Balance Transfer",
      content:
        "A balance transfer credit card can save you a lot of money in interest charges.",
    },
];

function Features(){
  return(
     <div className="features mb-24 text-white lg:px-12 xs:px-4 flex items-center justify-between lg:flex-row xs:flex-col" id="features">
      <div className="left-features-section flex flex-col items-start xs:mb-6">
       <h2 className="text-[54px] font-semibold leading-[66px]">
       You do the business, <br />
       we'll handle the money.
       </h2>
       <p className="text-lg max-w-[500px] text-dimWhite my-8">
       With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
       </p>
       <Button>Get Started</Button>
      </div>
      <div className="right-features-section flex flex-col items-start">
          {features.map((feature) => 
             <div className="feature-card p-4 rounded-[20px] flex items-center gap-4 lg:w-[620px] lg:h-[115px] sm:w-[620px] xs:w-[340px] my-3">
                <img className="rounded-full bg-gray-gradient p-4" src={feature.icon} alt="" />
                <div className="feature-text">
                    <p className="text-lg font-semibold">{feature.title}</p>
                    <p className="text-[16px] text-dimWhite">{feature.content}</p>
                </div>
             </div>
          )}
      </div>
     </div>
  )
}
export default Features;