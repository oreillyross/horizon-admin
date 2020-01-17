import React from "react";
import { useFormik } from "formik";
import { Form, Button } from "semantic-ui-react";

const validate = values => {
  const errors = {};
  if (values.sourceName === "") {
    errors.sourceName = "Source Name cannot be empty";
  }
  const expression = /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);
  if (!values.sourceUrl.match(regex)) {
    errors.sourceUrl = "The url is not valid";
  }
  return errors;
};

export default function SourceForm({ handleClose }) {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      sourceName: "",
      sourceUrl: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validate
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Field>
        <label htmlFor="sourceName">Source Name</label>
        <input
          id="sourceName"
          name="sourceName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.sourceName}
          placeholder="Source Name"
        />
        {formik.touched.sourceName && formik.errors.sourceName ? (
          <div>{formik.errors.sourceName}</div>
        ) : null}
      </Form.Field>
      <Form.Field>
        <label htmlFor="sourceUrl">Source Url</label>
        <input
          id="sourceUrl"
          name="sourceUrl"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.sourceUrl}
          placeholder="Source Url"
        />
        {formik.touched.sourceUrl && formik.errors.sourceUrl ? (
          <div>{formik.errors.sourceUrl}</div>
        ) : null}
      </Form.Field>
      <Button color="linkedin" type="submit">
        Submit
      </Button>
      <Button color="grey" onClick={handleClose}>
        Cancel
      </Button>
    </Form>
  );
}
