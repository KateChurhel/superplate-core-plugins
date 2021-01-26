import React from "react";
import { Box, useTheme } from "@chakra-ui/react";

import { Button } from "@components";

export const Main: React.FC = () => {
    const theme = useTheme();
    return (
        <Box bg="main.100" color="white" textAlign="center" py={10}>
            <h1 <% if(!(e2etest === "none")) { %>  data-test="main-heading" <% } %> style={{ fontSize: theme.fontSizes["5xl"] }}>electio</h1>
            <p style={{ fontSize: theme.fontSizes["lg"] }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </p>
            <Button colorScheme="blue" variant="solid" size="md">
                <a
                    <% if(!(e2etest === "none")) { %>  data-test="docs-btn-anchor" <% } %>
                    href="https://pankod.github.io/electio/"
                    target="_blank"
                >
                    Docs
                </a>
            </Button>
        </Box>
    );
};
