import Button from "./Button";

function CTA(){
    return(
        <div className="cta lg:w-[1350px] xs:w-[350px] text-center xs:h-[400px]
         lg:flex-row xs:flex-col lg:h-72 rounded-2xl bg-discount-gradient flex justify-around items-center mx-auto mb-10">
           
            <div className="cta-info">
            <h2 className="text-white text-[48px] font-bold">Let’s try our service now!</h2>
            <p className="text-dimWhite max-w-[400px] text-lg">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <Button>Get Started</Button>

        </div>
    )
}
export default CTA;