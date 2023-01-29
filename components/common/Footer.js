import SocialIcon from "@/components/icons/Social";
//EDIT ME PLEASE
const copyrightLabel = `©${new Date().getFullYear()} Hybrida. All rights reserved.`;
const socialLink = [
    /* {
        name: "Facebook",
        href: "#",
        icon: "facebook",
    },*/
    {
        name: "Instagram",
        href: "https://www.instagram.com/hybrida.uach/",
        icon: "instagram",
    } /*
    {
        name: "TikTok",
        href: "#",
        icon: "tiktok",
    },
    {
        name: "Twitter",
        href: "#",
        icon: "twitter",
    },*/,
    {
        name: "Discord",
        href: "https://discord.gg/6g7rZTsaCP",
        icon: "discord",
    },
];

const Footer = () => {
    return (
        <footer className="z-[100] mt-auto ">
            <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    {socialLink.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-white hover:text-pink-300"
                        >
                            <div className="iconcontainer h-6 w-6 cursor-pointer text-white">
                                <SocialIcon type={item.icon} />
                            </div>
                        </a>
                    ))}
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-base text-gray-400">
                        {copyrightLabel}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
