import "normalize.css";
import "./index.scss";

import createMenu from '../../components/menu/menu';
var menu = createMenu(['Главная','Блог','Портфолио','Контакты'], 'menu');
var header = document.querySelector("header");
header.appendChild(menu);

console.log('in index.js');
console.log($);
console.log(jQuery);