import { html } from "hono/html";

type Props = {
    children: any;
    pageTitle: string; // Title for the <title> tag
    pageHeading: string; // Heading for the <h1> tag
};

export const Layout = ({ children, pageTitle, pageHeading }: Props) => html`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${pageTitle}</title> <!-- Inserting the page title -->
    </head>
    <body>
        <h1>${pageHeading}</h1> <!-- Inserting the page heading -->
        ${children} <!-- Rendering the rest of the content -->
    </body>
</html>
`;
