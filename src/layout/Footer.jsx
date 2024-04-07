import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className="flex mt-10 w-full items-center justify-center bg-transparent text-center">
      <div className="bg-gray-950 text-white flex h-full w-full p-6 flex-col items-center justify-center gap-8 md:flex-row lg:justify-between lg:gap-0">
        <div className="flex h-full w-full items-center justify-center space-x-2">
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
        <div className="flex w-full cursor-default flex-col items-center justify-center gap-1 border-x-stone-600 px-4 lg:border-x">
          <p>
            All rights belong to
            <span className="font-bold text-red-500"> Central store </span>
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center space-y-3">
          <button>
            Phone Number :09111111111
          </button>
          <button>
            Email: sajjad.jamal53@gmail.com
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;