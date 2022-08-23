import React from "react";
import Cardbox from "./components/card";

class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://otakudesu-api.herokuapp.com/api/home")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.home.on_going,
          DataisLoaded: true,
        });
        console.log(json.home.on_going);
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="grid md:grid-cols-4 grid-cols-2 mt-10 mb-20">
        {items.map((item) => (
          <Cardbox
            key={item.id}
            name={item.title}
            link={item.link}
            btn="Nonton"
            image={<img src={item.thumb} alt="" />}
          />
        ))}
      </div>
    );
  }
}

export default App;
