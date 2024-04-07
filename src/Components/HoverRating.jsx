import { useState, useRef } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
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
    const myTimeout = setTimeout(show, 5000);
  }

  function show() {
    if (ref.current == false) {
      ref.current = true;
      const ratingModal = document.getElementById("rating");
      ratingModal.style.display = "grid";
      ratingModal.style.position = "absolute";
      ratingModal.style.top = "100px";
      ratingModal.style.left = "50%";
      ratingModal.style.transform = "translate(-50%, -50%)";
    }
  }

  const handleRating = () => {
    document.getElementById("rating").style.display = "none";
    setTimeout(toast.info("Thank you for your opinion❤❤"), 10);
  }

  return (
    <div id="rating" className="hidden bg-stone-800 justify-center ring-4 text-white sm:w-6/12 py-4 mx-3 rounded-lg">
      <p>What do you think about the <span className="text-rose-600 font-bold">Easy Shop</span> ?</p>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Rating
          sx={{ fontSize: "2.3em" }}
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
        {value !== null && (
          <Box sx={{ ml: 2, fontSize: "1.2em", width: '70%' }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
      <button onClick={handleRating} className="w-64 hover:scale-105 m-auto bg-rose-600 text-lg text-white font-bold py-1 mt-5 rounded-lg">
        send
        <SendIcon className='ms-3 text-blue-700' />
      </button>
    </div>
  );
}

export default HoverRating;