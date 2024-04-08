import spinner from '/assets/gif/Spinner.gif';

const Spinner = () => {
    return (
        <div className='w-6/12 sm:w-4/12 md:w-2/12 mt-5 mx-auto'>
            <img src={spinner} className="m-auto" alt="not found" />
            <p className="font-bold sm:text-lg text-center text-white">please wait...<span className="text-red-500">❤</span></p>
        </div>
    )
}

export default Spinner;