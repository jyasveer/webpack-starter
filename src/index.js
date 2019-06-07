import 'bootstrap';
import {
    Header
} from './app/header';
import { Footer } from './app/footer';
import './style.css';
import './styles/main.scss';


let header = new Header();
let firstHeading = header.getFirstHeading();
console.log(firstHeading);

let footer = new Footer();
let footerText = footer.getFooterText();
console.log(footerText);
