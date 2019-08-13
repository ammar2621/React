import React from "react";
import HeaderArt from "../components/headerArticle";
import Footer from "../components/footers";
import "../styles/main.css";
import ListNews from "../components/listArticle";
import Headline from "../components/headline";
import axios from "axios";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "tech",
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const self = this;
    axios
      .get(
        "https://newsapi.org/v2/everything?q=" +
          this.state.keyword +
          "&from=2019-07-13&sortBy=publishedAt&apiKey=80d2f4e2bada4997960b2001f5d77815"
      )
      .then(function(response) {
        self.setState({ data: response.data.articles });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ keyword: event.target.value }, () => {
      this.componentDidMount();
    });
  }

  render() {
    return (
      <div>
        <HeaderArt search={this.handleChange} />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div class="overflow-auto">
                <ul className="list-group">
                  <li className="list-group-item warnaCol">
                    <div className="d-flex w-100 justify-content-between">
                      Berita Terkini
                      <small>Lihat Semua</small>
                    </div>
                  </li>
                  <ListNews data={this.state.data} />
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <Headline />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Article;
