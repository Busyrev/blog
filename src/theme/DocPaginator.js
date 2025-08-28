import React from "react";
import { useLocation } from '@docusaurus/router';
import { useColorMode } from "@docusaurus/theme-common";
import { Backlink } from "@busyrev/docusaurus-plugin-backlinks/components";

export default function DocPaginatorWrapper(props) {
	const { colorMode } = useColorMode();
    const location = useLocation();

	return (<>
        <br />
        Backlinks: <br />
        <Backlink documentPath={location.pathname} />
	</>);
}