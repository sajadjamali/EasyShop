import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className="bg-gray-900 mt-auto text-white flex p-6 flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:justify-around">
      <div className="flex items-center justify-center space-x-2">
        <button className="hover:scale-110">
          <InstagramIcon className='text-pink-600' fontSize='large' />
        </button>
        <button className=" hover:scale-110">
          <TwitterIcon className='text-blue-600' fontSize='large' />
        </button>
        <button className="hover:scale-110">
          <YouTubeIcon className='text-red-600' fontSize='large' />
        </button>
        <button className="hover:scale-110">
          <TelegramIcon className='text-blue-600' fontSize='large' />
        </button>
      </div>
      <div className="flex cursor-default flex-col items-center justify-center gap-1 border-x-stone-600 px-4 lg:border-x">
        <p>
          All rights belong to
          <span className="font-bold text-red-500"> Central store </span>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-3">
        <button>
          <span className='text-cyan-400'>Phone Number :</span>09111111111
        </button>
        <button>
          <span className='text-cyan-400'>Email:</span> sajjad.jamal53@gmail.com
        </button>
      </div>
    </div>
  );
};

export default Footer;