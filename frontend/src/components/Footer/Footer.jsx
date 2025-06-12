import assets from "../../assets/assets";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 px-8 border-t border-gray-300">
      <div className="w-5xl m-auto py-8">
        <div className="flex gap-8">
          <div>
            <img src={assets.fullLogo} alt="" className="w-40" />
            <p>&copy; 2020 - 2025, Kandl Broking Ltd.</p>
            <p>All rights reserved.</p>
            <div className="mt-4">
              <div className="flex gap-4 ">
                <XIcon className="hover:text-green-400" />
                <FacebookIcon className="hover:text-green-400" />
                <InstagramIcon className="hover:text-green-400" />
                <LinkedInIcon className="hover:text-green-400" />
              </div>
              <hr className="text-gray-300 my-3" />
              <div className="flex gap-4">
                <YouTubeIcon className="hover:text-green-400" />
                <WhatsAppIcon className="hover:text-green-400" />
                <TelegramIcon className="hover:text-green-400" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <h4 className="font-bold mb-4">Account</h4>
              <ul className="text-gray-500">
                <li className="mb-2">Open demat account</li>
                <li className="mb-2">Minor demat account</li>
                <li className="mb-2">NRI demat account</li>
                <li className="mb-2">Commodity</li>
                <li className="mb-2">Dematerialisation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="text-gray-500">
                <li className="mb-2">Contact us</li>
                <li className="mb-2">Support portal</li>
                <li className="mb-2">How to file a complaint?</li>
                <li className="mb-2">Status of your complaints</li>
                <li className="mb-2">Bulletin</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="text-gray-500">
                <li className="mb-2">About</li>
                <li className="mb-2">Philosophy</li>
                <li className="mb-2">Press & media</li>
                <li className="mb-2">Careers</li>
                <li className="mb-2">Open source</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick links</h4>
              <ul className="text-gray-500">
                <li className="mb-2">Upcoming IPOs</li>
                <li className="mb-2">Brokerage charges</li>
                <li className="mb-2">Market holidays</li>
                <li className="mb-2">Economic calendar</li>
                <li className="mb-2">Calculators</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-[12px] text-gray-500 w-5xl m-auto pt-6 pb-6">
          <p className="mb-4">
            Kandl Broking Ltd. is a registered member of SISX, CAX, and KTX,
            offering zero-brokerage trading services across equity and
            commodities. Depository and custodian services are provided through
            our integrated platform under registration with the Board of
            Exchange & Broking Institutions (BEBI), bearing Registration Nos.
            INZ00001234 and IN-DP-431-2019. Commodity trading is facilitated via
            Kandl Commodities Pvt. Ltd. under MTX Code 46025 and NST Code 50001.
            Our corporate office is located at #11/13, 4th Cross, Rupee Colony,
            Opp. Nova Public School, P.P Nagar 10th Phase, Bengalurex – 560122,
            Karnatia, Indira. For any complaints pertaining to securities
            broking please write to
            <span className="text-green-400"> complaints@Kandl.com</span>, for
            DP related to
            <span className="text-green-400"> dp@Kandl.com. </span>
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by BEBI | IYF
          </p>
          <p className="mb-4">
            Clients are advised to read the Risk Awareness Document as outlined
            by BEBI and the International Yield Federation (IYF) before trading.
            To file grievances, register on the BEBI GRIP portal
            (https://grip.bebi.org.in) with essential details including your
            name, TIN, address, mobile number, and email ID. The GRIP platform
            enables transparent communication and faster resolution of
            complaints, ensuring a secure and regulated trading experience.
          </p>
          <p className="text-green-400">
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
