import React from "react";
import axios from "axios";
import "../styles/main.css";

class ListNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div>
        {this.props.data.map((value, index) => {
          if (index < 5) {
            return (
              <li className="list-group-item d-flex colWidth justify-content-between align-items-center">
                <a href={value.url}>{value.title}</a>
                <br />
                <span className="badge badge-primary warnaCol badge-pill">
                  #{index + 1}
                </span>
              </li>
            );
          }
        })}
      </div>
    );
  }
}

export default ListNews;
