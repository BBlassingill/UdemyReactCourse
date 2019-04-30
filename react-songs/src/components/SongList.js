import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
	renderList() {
		return this.props.songs.map(song => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button
							className="ui button primary"
							onClick={() => this.props.selectSong(song)}
						>
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		});
	}

	render() {
		return <div className="ui divided list">{this.renderList()}</div>;
	}
}

//function that saves data on the store to the local component's props so it has access to it
//gets called anytime a change to the store occurs
const mapStateToProps = state => {
	return { songs: state.songs };
};

// connect: first argument is the function who's returning object will be saved on the
//			component's props.
//			second argument takes a key/value object that passes action creators to the props
export default connect(
	mapStateToProps,
	{
		//list of action creators that need to be called inside a component
		selectSong: selectSong
	}
)(SongList);
