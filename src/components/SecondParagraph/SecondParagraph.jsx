import React from "react";
import "./secondpara-styles.css";
import Image from "./../../assets/bridge.png";

function SecondParagraph() {
	return (
		<div className="second-paragraph">
			<img className="s-image" src={Image} alt="broken" />
			<div className="s-text">
				<h2>Second Paragraph</h2>
				<p>
					Sausage Man is a battle royale game, stylized to the
					likenings of PUBG and Fortnite. The only difference? Well,
					rather than embodying humans, this time you're in control of
					a sausage.
				</p>
				<p>
					Control systems in Sausage Man are complex. Not unlike any
					other kind of battle royale style game. Thankfully, they're
					also well-adapted to touchscreens. Towards your left, you'll
					find a movement crosspad and access to your stock of items.
					Whist on your right, you'll find buttons designed to help
					you crouch, jump, pick up cars, open doors, point, recharge
					and of course shoot.
				</p>
				<p>
					What makes Sausage Man a flagship project under Xd’s
					long-termfocused strategy?
				</p>
			</div>
		</div>
	);
}

export default SecondParagraph;
