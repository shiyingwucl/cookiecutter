import { Button, IconButton } from "@mui/material";
import "./App.css";
import { Dehaze as DehazeIcon } from "@mui/icons-material";
import { useState } from "react";
import { LoginModal } from "./LoginSignup/LoginModal";
import { SideMenu } from "./Menus/SideMenu";
import { Footer } from "./Menus/Footer";

function App() {
	const [openModal, setOpenModal] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const handleOpenMenu = () => {
		setOpenMenu(true);
	};

	const handleCloseMenu = () => {
		setOpenMenu(false);
	};

	return (
		<div className="App">
			<header className="App-header">
				<IconButton
					className="btn btn--menu"
					variant="outlined"
					onClick={handleOpenMenu}
				>
					<DehazeIcon color="primary" />
				</IconButton>
				{/* optional side menu */}
				<SideMenu openMenu={openMenu} handleCloseMenu={handleCloseMenu} />
				<p>Optional titlebar text here</p>
				<div>
					<Button
						className="btn btn--login"
						variant="text"
						onClick={handleOpenModal}
					>
						Login
					</Button>
					<LoginModal open={openModal} handleClose={handleCloseModal} />
				</div>
			</header>

			<main></main>
			<Footer />
		</div>
	);
}

export default App;
