import { Component } from "react";

class table extends Component{
render(props){
    return(
        <table border="1px">
            <tbody>
            <tr>
                <td>
                <img src= "https://picsum.photos/65" />
                <input type="checkbox"></input> <label>HTML</label>
                </td>
            </tr>
            <tr>
                <td>
                <img src= "https://picsum.photos/66" />
                <input type="checkbox"></input> <label>PHP</label>
                </td>
            </tr>
            <tr>
                <td>
                <img src= "https://picsum.photos/67" />
                <input type="checkbox"></input> <label>CSS</label>
                </td>
            </tr>
            <tr>
                <td>
                    {this.props.color}
                </td>
            </tr>
            </tbody>
        </table>

    );
}
}
export default table;