import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center bg-dark border-bottom border-body text-light" data-bs-theme="dark">
	<h6>This project is part of the final project created for {" "}
			<a href="http://www.4geeksacademy.com">4Geeks Academy</a> using the programming languages learned throught the course.</h6>
	<p>
		Made with <i className="fa fa-heart text-danger" /> by{" "} 
		<a href="https://github.com/Xomano">Adriano Schneider </a> 
		 & {" "} 
		<a href="https://github.com/SalomonFranco">Salomon Franco.</a>
	</p>
</footer>
);