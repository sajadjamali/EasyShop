import spinner from '/assets/gif/Spinner.gif';

const Spinner = () => {
    return (
        <div className='w-4/12 mx-auto'>
            <img src={spinner} className="m-auto" alt="not found" />
            <p className="font-bold text-xl text-center text-white">please wait...<span className="text-red-500">❤</span></p>
        </div>
    )
}

export default Spinner;