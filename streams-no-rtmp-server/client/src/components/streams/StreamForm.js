import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    //onSubmit is a callback function passed by the parent component
    //utilizing this form
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      //the sole purpose of redux form is to automate
      //sending data back and forth between forms and the store.
      //it does not know how to render a component which is why
      //you have to pass a reference to a component to it.

      //this.props contains properties that are automically
      //available for use with a redux form.

      //we call the form's handle submit function with a reference
      //to our callback function. redux form will automatically
      //take care of things for us, such as preventing the page
      //from refreshing on a submit
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate: validate
})(StreamForm);
