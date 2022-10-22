import './Card.css';

function Card(props) {
    return (
        <>
            {props.age && <h1>Age: {props.age}</h1>}
            <div className='contact-card'>
                {props.pic && <img src={props.pic} alt='catpicture' />}
                <div>
                    {props.name}
                </div>
            </div>
        </>
    );
}


// function Card({ pic, name }) {
//     return (
//         <>
//             <div className='contact-card'>
//                 <img src={pic} alt='catpicture' />
//                 <div>
//                     {name}
//                 </div>
//             </div>
//         </>
//     );
// }


// Destructuring Props

const person = {
    img: "./images/D.jpg",
    name: "mohammed",
    age: "25",
    phone: "0796019970"
}

const { name, age, phone: n } = person
console.log(n);

export default Card;
