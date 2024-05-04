import AirBnb from "../assets/Airbnb_Logo_Bélo.svg";
import Binance from "../assets/Binance (2).png";
import Coinbase from "../assets/Coinbase.png";
import Dropbox from "../assets/DropBox.png";

const clients = [
    {
      id: "client-1",
      logo: AirBnb,
    },
    {
      id: "client-2",
      logo: Binance,
    },
    {
      id: "client-3",
      logo: Coinbase,
    },
    {
      id: "client-4",
      logo: Dropbox,
    },
  ];


function Companies(){
    return(
        <div className="client-companies flex justify-around items-center lg:flex-row xs:flex-col xs:mt-12">
        {clients.map((client) => 
        <img src={client.logo} key={client.id} alt="" className="grayscale hover:grayscale-0 transition-all duration-500 w-48 cursor-pointer" />
        )}
        </div>
    )
}

export default Companies