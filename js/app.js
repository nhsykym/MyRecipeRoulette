const AppHeader = () => {
  return (
    <div className="headerWrapper">
      <h1>レシピルーレット</h1>
      <p>ランダムにレシピを表示するよ</p>
    </div>
  );
}

const Result = (props) => {
  return (
    <div className="result">
      {props.item==='' ? '' :<h2>今日は{props.item}を作りましょう</h2>}
    </div>

  );
}

const AppBody = (props) => {
  return (
    <div className="bodyWrapper">
      <div className="btn" onClick={props.onClick}>?</div>
      <Result item={props.item}/>
    </div>
  );
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: ["カレー", "にくじゃが", "チャーハン", "ハヤシライス", "ラーメン"],
      item: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const i = Math.floor(Math.random() * this.state.recipes.length);
    const item = this.state.recipes[i];
    this.setState({
      item: item,
    });
  }

  render() {
    return (
      <div>
        <AppHeader />
        <AppBody item={this.state.item} onClick={this.handleClick}/>
      </div>
    );
  }  
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
)