import React, { FC } from "react"
import { Route, Routes } from "react-router-dom"

import Header from "../components/Header/Header"
import MainPage from "./MainPage"
import AnimePage from "./AnimePage"

const Root: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Header />}>
				<Route index element={<MainPage />} />
				<Route path="/anime/:id" element={<AnimePage />} />
			</Route>
		</Routes>
	)
}

export default Root
