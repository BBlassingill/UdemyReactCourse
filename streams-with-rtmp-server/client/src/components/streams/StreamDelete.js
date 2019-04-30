import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";
import history from "../../history";

class StreamDelete extends React.Component {
  renderActionButtons() {
    const id = this.props.match.params.id;
    return (
      //This React.Fragment does not render anything. Once rendered into
      //HTML, it will be invisible in the DOM.
      //This is used to return multiple elements without having to wrap
      //them in a parent element. In this case, we did it to help with
      //styling.
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete the stream with title: ${
      this.props.stream.title
    }`;
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActionButtons()}
        onDismiss={() => history.push("./")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
