import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBluOg3kNwgu3WzHBHcBmi3UVj1h1ajP0c';


// Create a new Component which produces some HTML

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = { videos: [] };
		YTSearch ({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
		});
	}
	render(){
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

// Render it on the DOM

ReactDOM.render(<App />, document.querySelector('.container'));