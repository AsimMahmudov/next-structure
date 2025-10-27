import Button from "@/components/ui/button/Button";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { TELEGRAM_LINK } from "@/constants/admin";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";

const Header = () => {
	return (
		<header className="bg-[#000000] sticky top-0 left-0 w-full border-transparent z-50 border border-b-[#424242] py-3">
			<div className="container flex justify-between items-center">
				<Link href={"/"}>
					<TitleComponent className="text-white md:text-[24px] text-[22px] ">
						Asim<span className="text-[blue-500] ">Dev</span>
					</TitleComponent>
				</Link>

				<Link href={TELEGRAM_LINK} target={"_blank"} className="w-full max-w-[150px]  ">
					<Button className="gap-2 bg-blue-600 hover:bg-blue-500">
						Связаться <FaTelegramPlane size={18} />
					</Button>
				</Link>
			</div>
		</header>
	);
};

export default Header;
