import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";

const InstagramLink = `https://www.instagram.com/karam_kassam_alhinnawi/`

const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Content",
          link: "https://www.hoobank.com/content/",
        },
        {
          name: "How it Works",
          link: "https://www.hoobank.com/how-it-works/",
        },
        {
          name: "Create",
          link: "https://www.hoobank.com/create/",
        },
        {
          name: "Explore",
          link: "https://www.hoobank.com/explore/",
        },
        {
          name: "Terms & Services",
          link: "https://www.hoobank.com/terms-and-services/",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          name: "Help Center",
        },
        {
          name: "Partners",
        },
        {
          name: "Suggestions",
        },
        {
          name: "Blog",
        },
        {
          name: "Newsletters",
        },
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
        },
        {
          name: "Become a Partner",
        },
      ],
    },
  ];
  
 const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: InstagramLink,
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/profile.php?id=100069551584000",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/in/karam-kassam-alhinnawi-6a2928286/",
    },
  ];
  

function Footer({logo}){
    return(
        <>
        <div className="footer mt-20 px-24 mb-20 flex lg:flex-row xs:flex-col justify-between">
          <div className="left-footer">
          <img className="w-[206px] h-20" src={logo} alt="" />
          <p className="text-dimWhite text-lg mt-5">A new way to make payments <br /> easy, reliable and secure.</p>
          </div>
          <div className="right-footer flex lg:flex-row xs:flex-col">
            {footerLinks.map((link) => 
            <div className="footer-name lg:px-24 xs:px-0 xs:mt-10 text-white text-lg font-medium">
              {link.title}
              <div className="links-main flex flex-col text-dimWhite font-[400] mt-2 ">
                {link.links.map((link) => 
                    <p className="mb-2 transition-all duration-500 hover:text-secondary cursor-pointer">
                        {link.name}
                    </p>
               )}
              </div>
            </div>
        )}
          </div>
        </div>
        <div className="footer-links mt-20 px-24 mb-10">
            <hr className="opacity-[30%]"/>
            <div className="footer-link flex justify-between">
                <h2 className="text-white text-lg mt-5">&copy; Developed By <a className="underline transition-all duration-500 hover:text-secondary" href={InstagramLink}>Karam Alhinnawi</a></h2>
            <div className="social-links lg:flex xs:hidden gap-5 mt-5">
            {socialMedia.map((social) => 
             <a href={social.link} key={social.id}><img src={social.icon} alt="" className="cursor-pointer" /></a>
            )}
            </div> 
            </div>
        </div>
        </>
        
    )
}
export default Footer;