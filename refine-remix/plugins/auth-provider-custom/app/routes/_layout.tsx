import { Outlet } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
<%_ if (answers["ui-framework"] === 'antd') { _%>
     import { ThemedLayout } from "@refinedev/antd";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'mui') { _%>
     import { ThemedLayout } from "@refinedev/mui";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'mantine') { _%>
     import { ThemedLayout } from "@refinedev/mantine";
 <%_ } _%>
 <%_ if (answers["ui-framework"] === 'chakra') { _%>
     import { ThemedLayout } from "@refinedev/chakra-ui";
 <%_ } _%>
 import { RefineKbar } from "@refinedev/kbar";

import { Header } from "@components/header";
import { authProvider } from "~/authProvider";

export default function BaseLayout() {
    return (
        <>
             <%_ if (answers["ui-framework"] === 'no') { _%>
                <Outlet />
                <RefineKbar />
            <%_ } else { _%>
                <ThemedLayout Header={Header}>
                    <Outlet />
                </ThemedLayout>
                <RefineKbar />
            <%_ } _%>
        </>
    );
}

/**
 * We're checking if the current session is authenticated.
 * If not, we're redirecting the user to the login page.
 * This is applied for all routes that are nested under this layout (_protected).
 */
export async function loader({ request }: LoaderArgs) {
    const { authenticated, redirectTo } = await authProvider.check(request);

    if (!authenticated) {
        throw redirect(redirectTo ?? "/login");
    }

    return {};
}