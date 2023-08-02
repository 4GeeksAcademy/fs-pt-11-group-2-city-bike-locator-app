import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
<nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
			<div className="container" style={{ height: "40px" }}>
			<ul class="nav nav-pills nav-pills nav-pills-container" id="pills-tab" role="tablist">
				<Link to="/">
					<li class="navbar-brand" href="#">
						<img src="https://www.creativefabrica.com/wp-content/uploads/2021/10/19/E-bike-electric-bike-cycle-logo-design-Graphics-19003307-1-580x387.jpg" alt="Logo" width="40" height="30" class="d-inline-block align-text-top"></img>
					</li>
				</Link>
					<li class="nav-item text-dark" role="presentation">
						<button class="nav-link active nav-link-white" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link nav-link-white" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Live Map</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link nav-link-white" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Profile</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link nav-link-white" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link nav-link-white" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Sign In</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link nav-link-white" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Sign Up</button>
					</li>
					</ul>
							<div class="tab-content" id="pills-tabContent">
							<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0"></div>
							<div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0"></div>
							<div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0"></div>
				</div>
			</div>
		</nav>
	);
};