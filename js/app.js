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
    const url = 'https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?applicationId=1072861491823725264&categoryType=medium'
    const request = new XMLHttpRequest()
    let categories = [];
    let res = 'bbb';
    request.open('GET', url, true)
    request.onload = function() {
      let data = JSON.parse(this.response)
      
      if (request.status >= 200 && request.status < 400) {
        const categories = data.result.medium.slice();
        const i = Math.floor(Math.random() * categories.length);
        const item = categories[i];
        
        // this.setState({
        //   item: item,
        // });
      } else {
        console.log('error')
      }
    }
    request.send()

    // console.log(request.responseText);
    
    
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