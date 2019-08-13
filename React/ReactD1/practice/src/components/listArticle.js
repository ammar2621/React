import React from 'react';
import axios from 'axios';
import "../styles/main.css";


const apiKey = 'ac2058d3e8274d7cbc36eac53cb0dadc';
const baseUrl = 'https://newsapi.org/v2'
const urlHeadline = baseUrl + "top-headlines?" + "country=us&" + "apiKey=" + apiKey;

class AppAjax extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listNews: [],
        };
    }


    componentDidMount() {
        const self = this;
        axios
            .get(`https://newsapi.org/v2/everything?q=tech&from=2019-07-13&sortBy=publishedAt&apiKey=ac2058d3e8274d7cbc36eac53cb0dadc`)
            .then(function(response) {
            self.setState({ listNews: response.data.articles });
            console.log(response);
            })
            .catch(function(error){
            console.log(error)
            });
        };
    
    render() {
        return (
            <div>
                    { this.state.listNews.map((value, index) => {
                        if (index < 5) {
                            return (
                                <li className="list-group-item d-flex colWidth justify-content-between align-items-center">
                                <a href={value.url}>{value.title}</a>
                                <br/>
                                <span className="badge badge-primary warnaCol badge-pill">
                                #{index + 1}
                                </span>
                                </li>
                            )
                        }

                    })}
            </div>
        )
    }
}


export default AppAjax
