import {
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./menu-styles.css";

export const SideMenu = ({ openMenu, handleCloseMenu }) => {
	// import and use the desired icons from MUI, as like ChevronLeftIcon
	const menuListItems = [
		{ text: "Text1", icon: "Icon1" },
		{ text: "Text2", icon: "Icon2" },
	];
	return (
		<Drawer anchor="left" open={openMenu} onClose={handleCloseMenu}>
			<IconButton onClick={handleCloseMenu}>
				<ChevronLeftIcon />
			</IconButton>
			<Divider />

			<p className="side-menu__title">Some sidebar content goes here...</p>

			<List>
				{menuListItems.map((menuItem) => (
					<ListItem key={menuItem}>
						<ListItemIcon>{menuItem.icon}</ListItemIcon>
						<ListItemText primary={menuItem.text} />
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};
