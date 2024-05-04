import bill from '../assets/bill.png'
import google from '../assets/google.svg'
import apple from '../assets/apple.svg'

function Billing(){
   return(
    <div className="billing flex justify-around items-center lg:flex-row xs:flex-col-reverse px-12 mb-12" id='product'>
      <div className="left-billing-section relative">
        <div className="blue__gradient z-[1] w-[520px] lg:block xs:hidden -left-[400px] bottom-11 h-[100vh] absolute"></div>
        <img className='lg:w-[650px] relative z-[2]' src={bill} alt="" />
      </div>
      <div className="right-billing-section">
        <h2 className='text-white text-[52px] lg:max-w-[520px] sm:w-[620px] xs:w-[330px] font-semibold'>
        Easily control your 
        billing & invoicing.
        </h2>
        <p className="text-dimWhite text-lg max-w-[400px] mt-5">We consider the payment methods you'll offer your customers when you start your business. This is an important part of managing your business cash flow and meeting your customer's needs.</p>
       <div className="billing-apps flex gap-5 mt-6 xs:mb-8 cursor-pointer">
       <img src={apple} alt="" />
      <img src={google} alt="" />
       </div>
      </div>
    </div>

   )
}
export default Billing