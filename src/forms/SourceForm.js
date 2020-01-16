import React from "react";
import { useFormik } from "formik";
import { Form, Label, Button } from "semantic-ui-react";

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
    }
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label htmlFor="sourceName">Source Name</Label>
      <input
        id="sourceName"
        name="sourceName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.sourceName}
      />
      <Label htmlFor="sourceUrl">Source Url</Label>
      <input
        id="sourceUrl"
        name="sourceUrl"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.sourceUrl}
      />
      <Button type="submit">Submit</Button>
      <Button onClick={handleClose}>Cancel</Button>
    </Form>
  );
}
