import "react-bootstrap";
import imgSrc from '../../../../assets/footer/se-logo-black.svg'


export default function Logo() {
    return (
        <div>
            <img src={imgSrc} alt="Here should be a photo"/>
            <br/>
            <p>Ukraine</p>
        </div>
    )
}