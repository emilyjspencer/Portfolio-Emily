import React from "react";
import { GoodreadsBookshelf } from "react-goodreads-shelf";

export default function Book() {
	return (
		<GoodreadsBookshelf userId="USER_ID_HERE" apiKey="API_KEY_HERE" />
	);
}