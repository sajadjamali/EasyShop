import { useState, useRef } from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { toast } from 'react-toastify';
import SendIcon from '@mui/icons-material/Send';
import { labels } from '../Constants';

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

let toggle = false;

const HoverRating = () => {
  const ref = useRef(false);
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  if (toggle === false) {
    toggle = true;
    setTimeout(show, 5000);
  }

  function show() {
    if (ref.current == false) {
      ref.current = true;
      const ratingModal = document.getElementById("rating");
      ratingModal.style.display = "grid";
      ratingModal.style.position = "absolute";
      const scrollYPosition = window.scrollY;
      ratingModal.style.top = `${scrollYPosition + 100}px`;
      ratingModal.style.left = "50%";
      ratingModal.style.transform = "translate(-50%, -50%)";
    }
  }

  const handleRating = () => {
    document.getElementById("rating").style.display = "none";
    setTimeout(() => { toast.dismiss(); toast.info("Thank you for your opinion❤❤") }, 10);
  }

  return (
    <div id="rating" className="hidden text-center w-11/12 z-20 bg-stone-800 justify-center border-2 border-emerald-500 text-white sm:w-6/12 lg:w-4/12 xl:w-3/12 py-4 rounded-lg">
      <p>What do you think about the <span className="text-rose-600">Easy Shop</span> ?</p>
      <div className="flex justify-center items-center mt-3 space-x-4 sm:text-xl">
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ fontSize: "1em" }} />}
        />
        {
          value !== null &&
          (
            <div>{labels[hover !== -1 ? hover : value]}</div>
          )
        }
      </div>
      <button onClick={handleRating} className="w-10/12 hover:scale-105 m-auto group bg-rose-600 hover:bg-blue-600 text-lg text-white font-bold py-1 mt-5 rounded-lg">
        send
        <SendIcon className='ms-3 text-blue-600 group-hover:text-rose-600' />
      </button>
    </div>
  );
}

export default HoverRating;