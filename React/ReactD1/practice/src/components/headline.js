import React from 'react';
import axios from 'axios';
import "../styles/main.css";


const apiKey = 'ac2058d3e8274d7cbc36eac53cb0dadc';
const baseUrl = 'https://newsapi.org/v2'
const urlHeadline = baseUrl + "top-headlines?" + "country=us&" + "apiKey=" + apiKey;

class Headline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headline: [],
        };
    }


    componentDidMount() {
        const self = this;
        axios
            .get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ac2058d3e8274d7cbc36eac53cb0dadc`)
            .then(function(response) {
            self.setState({ headline: response.data.articles });
            console.log(response);
            })
            .catch(function(error){
            console.log(error)
            });
        };
    
    render() {
        return (
            <div>
                    { this.state.headline.map((value, index) => {
                        if (index < 1) {
                            return (
                                <div>
                                    <img src={value.urlToImage} className="card-img-top" />
                                    <div className="card-body">
                                        <h4 className="card-title">{value.title}</h4>
                                        <p className="card-text">
                                        {value.description}
                                        </p>
                                        <p className="card-text">
                                        <small className="text-muted">{value.publishedAt}</small>
                                        </p>
                                    </div>
                                </div>
                            )
                        }

                    })}
            </div>
        )
    }
}


export default Headline
