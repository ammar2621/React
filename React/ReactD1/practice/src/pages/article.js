import React from "react";
import HeaderArt from "../components/headerArticle";
import Footer from "../components/footers";
import "../styles/main.css";
import ListNews from "../components/listArticle";
import Headline from "../components/headline";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../components/store";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "tech",
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ keyword: event.target.value }, () => {
      axios
        .get(
          "https://newsapi.org/v2/everything?q=" +
            this.state.keyword +
            "&from=2019-08-14&sortBy=publishedAt&apiKey=bd87053c3c904bb68859378455e6e579"
        )
        .then(response => {
          this.setState({ data: response.data.articles });
          console.log(response);
          // console.log(this.state.data);
        })
        .catch(error => {
          console.log(error);
        });
    });
  }

  componentDidMount() {
    const self = this;
    axios
      .get(
        "https://newsapi.org/v2/everything?q=" +
          this.props.value +
          "&from=2019-08-14&sortBy=publishedAt&apiKey=bd87053c3c904bb68859378455e6e579"
      )
      .then(function(response) {
        self.setState({ data: response.data.articles });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidUpdate = prevProps => {
    if (prevProps.value !== this.props.value) {
      axios
        .get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.value +
            "&from=2019-08-14&sortBy=publishedAt&apiKey=bd87053c3c904bb68859378455e6e579"
        )
        .then(response => {
          this.setState({ data: response.data.articles });
          console.log(response);
          // console.log(this.state.data);
        })
        .catch(error => {
          console.log("terdapat eror ini :", error);
        });
    }
  };

  render() {
    if (this.props.isLogin === false) {
      return <Redirect to={{ pathname: "/login" }} />;
    } else {
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
                  <Headline data={this.state.data} />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
}

export default connect(
  "nama, email, isLogin",
  actions
)(Article);
