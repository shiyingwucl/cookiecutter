import React from "react";
import { Button, Modal, Typography } from "@mui/material";
import { LoginForm } from "./LoginForm";
import "./forms.css";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";

export const LoginModal = ({ open, handleClose }) => {
	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-login"
				aria-describedby="modal-sign-up-or-log-in"
			>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						boxShadow: 24,
						outline: "none",
					}}
				>
					<div className="modal--login">
						<Button
							onClick={handleClose}
							className="btn__modal--close"
							startIcon={<CloseIcon />}
							size="small"
						>
							Close
						</Button>
						<div className="form__container">
							<Typography variant="h4" align="center" color="primary">
								Login
							</Typography>
							<LoginForm />

							<Button size="small" variant="text" sx={{ marginTop: 2 }}>
								<small> Click here to Sign Up</small>
							</Button>
						</div>
					</div>
				</Box>
			</Modal>
		</>
	);
};
