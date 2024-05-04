import quotes from "../assets/quotes.svg"
import people01 from "../assets/people01.png";
import people02 from "../assets/people02.png";
import people03 from "../assets/people03.png";


  const feedback = [
    {
      id: "feedback-1",
      content:
        "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Herman Jensen",
      title: "Founder & Leader",
      img: people01,
    },
    {
      id: "feedback-2",
      content:
        "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: "Steve Mark",
      title: "Founder & Leader",
      img: people02,
    },
    {
      id: "feedback-3",
      content:
        "It is usually people in the money business, finance, and international trade that are really rich.",
      name: "Kenn Gallagher",
      title: "Founder & Leader",
      img: people03,
    },
  ];

function Clients(){
    return(
      <div className="clients text-white px-12" id="clients">
        <div className="top-client-section flex items-center lg:flex-row xs:flex-col">
         <h2 className="text-[54px] font-semibold leading-[66px] lg:max-w-[500px] xs:max-w-[320px]">What people are saying about us</h2>
         <p className="text-dimWhite text-lg max-w-[500px] xs:mt-5 xs:-ml-2">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>

        <div className="client-boxes flex items-center lg:flex-row xs:flex-col mt-40 my-3 px-12">
         {feedback.map((client) => 
         <div className="client lg:w-[370px] xs:w-[340px] h-96 rounded-2xl p-4 lg:mr-12 flex flex-col justify-between items-start" key={client.id}>
            <img src={quotes} alt="" />
            <p className="max-w-[240px] text-xl mt-12">{client.content}</p>
            <div className="client-info flex mt-6">
              <img className="w-12 h-12" src={client.img} alt="" />
              <div className="flex flex-col ml-5">
              <p className="text-lg font-bold">{client.name}</p>
              <p className="text-dimWhite">{client.title}</p>
              </div>
            </div>
         </div>
        )}

        </div>

         
      </div>
    )
}

export default Clients;