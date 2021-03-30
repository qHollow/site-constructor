import image from "./assets/image.png";
import {TextBlock, ColumnsBlock, TitleBlock, ImageBlock} from "./classes/blocks"

const text = `
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quidem libero odit iure expedita? Id mollitia quos assumenda facere ipsa quasi quam in odio officia. Omnis atque sequi ipsum similique.
`;

export const model = [
	new TitleBlock('lorem', {
		tag: "h2",
		styles: {
			background: "linear-gradient(to right, #ff0099, #493240)",
			color: "green",
			padding: "1.5rem",
			"text-align": "center",
		}}),
	new TextBlock( text,  {
		styles: {
			background: "linear-gradient(to left, #f2994a, #f2c94c)",
			padding: "1rem",
			"font-weight": "bold",
		}}),
	new ColumnsBlock(["Приложение на чистом JavaScript, без использования библиотек",
	"Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс",
	"JavaScript - это просто, интересно. Научись создавать любые UI своими руками"], {
		styles: {
			background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
			padding: "2rem",
			color: "#fff",
			"font-weight": "bold",
		},
	}),
	new ImageBlock(image, {
		styles: {
			padding: "2rem 0",
			display: "flex",
			"justify-content": "center",
		},
		imageStyles: {
			width: "500px",
			height: 'auto',
		},
		alt: "Это картинка",
	})
];
