import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Aos = () => {
    useEffect(() => {
        AOS.init({
            duration: 700
        })
    }, [])

    return <></>;
}

export default Aos;