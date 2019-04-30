import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import _ from "lodash";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.stream.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h3>Edit a stream</h3>
          <StreamForm
            //Passing initialValues down into to the form
            //will automatically pre-populate info for any
            //fields that have names matching the keys of the data
            //passed in.
            //this.props.stream returns an object: {title: "", description:""}
            //title and description will automatically populate the form
            //because of the matching Field names.
            initialValues={_.pick(this.props.stream, "title", "description")}
            onSubmit={this.onSubmit}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
