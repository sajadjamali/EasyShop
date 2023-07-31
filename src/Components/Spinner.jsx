import spinner from '../assets/gif/Spinner.gif'

const Spinner = () => {
    return (
        <>
        <img src={spinner} className="m-auto" alt="not found" />
        <p className="font-bold text-xl text-center text-white">please wait...<span className="text-red-500">❤</span></p>
        </>
    )
}

export default Spinner;