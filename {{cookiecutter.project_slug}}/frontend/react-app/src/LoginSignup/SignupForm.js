import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@mui/material";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
	firstName: Yup.string().required("Required"),
	lastName: Yup.string().required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string().required("Required"),
});

export const SignupForm = () => (
	<Formik
		initialValues={{
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		}}
		validationSchema={SignupSchema}
		onSubmit={(values) => {
			console.log(values);
		}}
	>
		{({ errors, touched }) => (
			<Form>
				<Field name="firstName">
					{({ field }) => (
						<TextField
							{...field}
							label="First Name"
							variant="outlined"
							error={touched.firstName && Boolean(errors.firstName)}
							helperText={touched.firstName && errors.firstName}
						/>
					)}
				</Field>
				<br />
				<Field name="lastName">
					{({ field }) => (
						<TextField
							{...field}
							label="Last Name"
							variant="outlined"
							error={touched.lastName && Boolean(errors.lastName)}
							helperText={touched.lastName && errors.lastName}
						/>
					)}
				</Field>
				<br />
				<Field name="email">
					{({ field }) => (
						<TextField
							{...field}
							label="Email"
							variant="outlined"
							error={touched.email && Boolean(errors.email)}
							helperText={touched.email && errors.email}
						/>
					)}
				</Field>
				<br />
				<Field name="password">
					{({ field }) => (
						<TextField
							{...field}
							label="Password"
							type="password"
							variant="outlined"
							error={touched.password && Boolean(errors.password)}
							helperText={touched.password && errors.password}
						/>
					)}
				</Field>
				<br />
				<Button type="submit" variant="contained" color="primary">
					Submit
				</Button>
			</Form>
		)}
	</Formik>
);
