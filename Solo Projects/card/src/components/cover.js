import React from "react";
import image from "../images/cover.jpg";


export default function cover() {

    return (
        <>
            <div className="image_container">
                <img src={image} alt="cover_photo" />
            </div>
            <h2>Mohammed Ababneh</h2>
            <p>Full-Stack Web Developer</p>
            <p>Mohammed.user</p>
            <div className="btn-icons">
                <button>Email</button>
                <button>Linkedin</button>
            </div>

        </>
    )

}