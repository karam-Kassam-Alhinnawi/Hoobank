import Button from "./Button";
import CardDealImg from "../assets/card.png"


function CardDeal(){
   return(
    <div className="CardDeal features mb-24 text-white lg:px-12 xs:px-4 flex items-center justify-between lg:flex-row xs:flex-col mt-32">
        <div className="left-cardDeal-section flex flex-col items-start xs:mb-6">
           <h2 className="text-[54px] lg:max-w-[720px] sm:w-[720px] xs:w-[330px] font-semibold leading-[66px]">Find a better card deal <br /> in few easy steps</h2>
           <p className="text-dimWhite text-lg max-w-[400px] mt-5 mb-5">We've been researching and comparing credit cards for over 15 years. You can easily compare more than 270 Australian credit cards using our free tools. When you find one that suits, we'll take you securely to the bank's website.</p>
           <Button>Get Started</Button>
        </div>
        <div className="right-cardDeal-section">
            <img className="w-[650px]" src={CardDealImg} alt="" />
        </div>
    </div>
   )
}
export default CardDeal;