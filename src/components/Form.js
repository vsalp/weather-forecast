import React from "react";

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="Şehir"></input>
        <input type="text" name="country" placeholder="Ülke"></input>
        <button>Hava Durumunu Göster</button>

    </form>
);



export default Form;