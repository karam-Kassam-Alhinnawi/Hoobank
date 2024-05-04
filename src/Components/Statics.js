const stats = [
    {
      id: "stats-1",
      title: "User Active",
      value: "3800+",
    },
    {
      id: "stats-2",
      title: "Trusted by Company",
      value: "230+",
    },
    {
      id: "stats-3",
      title: "Transaction",
      value: "$230M+",
    },
  ];

function Statics(){
   return(
    <div className="text-white flex justify-between mb-24 lg:items-center lg:flex-row lg:px-12 sm:flex-row sm:flex-wrap sm:items-center sm:px-12 xs:px-6 xs:items-start xs:flex-col">
      {stats.map((stat) => 
        <div className="static text-[40px] font-semibold xs:mt-2" key={stat.id}>{stat.value} <span className="mr-2 text-gradient text-[20px]">{stat.title}</span></div>
      )}
    </div>
   )
}
export default Statics;