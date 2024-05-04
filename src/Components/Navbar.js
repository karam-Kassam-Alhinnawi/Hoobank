const navLinks = [
    {
      id: "#home",
      title: "Home",
    },
    {
      id: "#features",
      title: "Features",
    },
    {
      id: "#product",
      title: "Product",
    },
    {
      id: "#clients",
      title: "Clients",
    },
];

function NavBar({logo}){
   return(
    <nav className="flex justify-between items-center px-12 py-6 mb-4 transition-all text-white">
     <a href="#"><img src={logo} alt="" className="w-32 lg:block sm:block xs:hidden" /></a>
     <ul className="flex">
        {navLinks.map((nav) =>
         <a href={nav.id}><li className="text-[18px] lg:mx-4 xs:mx-1 font-poppins cursor-pointer hover:text-gray-300 ">{nav.title}</li></a>
         )}
     </ul>
     </nav>
   )
}

export default NavBar