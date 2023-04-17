import "./App.css";

import { Route, Routes } from "react-router-dom";
import About from "./components/body/about/About";
import Home from "./components/body/home/Home";
import NoPageFound from "./components/NoPageFound";
import Body from "./components/body/Body";
import Projects from "./components/body/project/Projects";
import Contact from "./components/body/contact/Contact";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Body />}>
					<Route index element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
				<Route path="*" element={<NoPageFound />} />
			</Routes>
		</div>
	);
}

export default App;
