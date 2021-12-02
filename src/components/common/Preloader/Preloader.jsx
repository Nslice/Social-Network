import preloaderSvg from "../../../assets/images/preloader.svg";



const Preloader = ({visible}) => {
    return (
        <span>
           {visible ? <img src={preloaderSvg} alt="no preloader svg"/> : null}
        </span>
    )
}



export default Preloader;


