export const Footer = () => {
	const companyName = "UCL";

	// can include external links like for LinkedIn or GitHub
	return (
		<footer className="footer__main">
			<p className="footer__copyright footer--text">
				Copyright © {new Date().getFullYear()} {companyName}
			</p>
		</footer>
	);
};
