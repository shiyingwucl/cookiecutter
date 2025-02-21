import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, TextField } from "@mui/material";

const initialValues = {
	email: "",
	password: "",
};

const onSubmit = (values) => {
	console.log(values);
};

export const LoginForm = () => {
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit}>
			{(formik) => (
				<Form>
					<Field
						name="email"
						as={TextField}
						label="Email"
						type="email"
						fullWidth
						margin="normal"
					/>
					<Field
						name="password"
						as={TextField}
						label="Password"
						type="password"
						fullWidth
						margin="normal"
					/>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						disabled={!formik.isValid || formik.isSubmitting}
						sx={{ marginTop: 2 }}
					>
						Login
					</Button>
				</Form>
			)}
		</Formik>
	);
};
