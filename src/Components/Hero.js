import heroDiscount from "../assets/Discount.svg"
import heroImg from "../assets/robot.png"

export default function Hero(){
    return(
        <div className="hero lg:h-[100vh] w-full px-12
         flex lg:justify-between items-center lg:flex-row 
         xs:justify-center xs:flex-col xs:h-[100vh]">
            
           <div className="left-hero-section flex-col relative">
            <div className="hero-discount rounded-lg lg:w-[408px] sm:w-[408px] xs:w-[320px] lg:h-[50px] sm:h-[50px] xs:h-[70px] mb-2 flex items-center">
                <img src={heroDiscount} alt="" className="w-8 h-8 mr-2"/>
               <p className="text-dimWhite text-[18px]">discount 20% Discount For 1 Month Account</p>
            </div>
            <div className="hero-text xs:">
                <h1 className="text-white lg:text-[72px] sm:text-[72px] xs:text-[34px] font-bold">
                    The Next <br/> <span className="text-gradient lg:text-[72px] sm:text-[72px] xs:text-[42px]">Generation</span> <br /> Payment Method.
                </h1>
                <p className="text-dimWhite lg:max-w-[430px] xs:max-w-[100%] text-[18px] mt-6">Our team of experts use a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
            </div>
           </div>
       
          <div className="right-hero-section relative">
            <div className="blue__gradient lg:w-[669px] sm:w-[769px] xs:w-[300px]  lg:h-[669px] sm:h-[669px] xs:h-[300px] z-[1] absolute"></div>
            <img src={heroImg} className="lg:w-[669px] sm:w-[769px] xs:w-[300px] lg:mt-0 xs:mt-10 z-[2] relative -right-12" alt="" />
          </div>

        </div>
    )
}