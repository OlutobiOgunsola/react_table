# Me-Cash Frontend Engineer Assessment

## Configurable React Table Component

### Olutobi Ogunsola

This codebase contains the logic and code for the Configurable React Table Component in fulfillment of the Me-Cash Frontend Engineer Assessment

## Running the Application

> [!IMPORTANT]
> You must have `NodeJS` and `npm` installed on your machine to run this program.

Follow the steps below to run the program

-   Clone or download the codebase.
    -   `git clone https://github.com/OlutobiOgunsola/react_table`.
-   Run `npm install` to download all dependencies and install packages.
-   Run `npm start` to build and launch the package.
-   Visit `http://localhost:3000` on your machine to view the application.

## Using the Table Component

> [!IMPORTANT]
> The table component is designed to be flexible and reusable across multiple programs with slight changes in configuration

### How to use

-   Import the table component into the program
-   Insert the table where you want it to be in the program

### Props and Default Behavior

> [!NOTE]
> The table component defaults to using [10, 50, 100] rows per page if the number of rows per page is not specified in the properties. Also the table will automatically generate headers when given an array of JSON objects if no `columns` prop is not passed to it.

> [!IMPORTANT]
> The table accepts a flat array of flat JSON objects containing only `string` or `number` values. Nested objects or arrays will NOT be rendered in the table and would be replaced as `N/A`

Accepted Properties:

-   `data` - An `array` of JSON objects that will be rendered in the table.
-   `columns` - An `array` of strings corresponding to the columns that will be rendered in the table. If provided, the table will only render the columns specified in this array and ignore all other properties contained in the JSON objects passed to it.
-   `tableName` - A `string` containing the name of the table. It will be displayed in the top left of the table when rendered.
-   `config` - An `object` containing the specified configuration for the table. This object contains:
    -   `style` - An `object` containing the `width`, `height`, `margin` and `bandColor` specifications for the table
        -   `bandColor` specifies the color for the alternate rows of the table. If not specified, it defaults to `#DEE9FF` > `width` and `height` accept string values suffixed with `px` e.g. `100px`. If not specified, the table defaults to fill the width and height of its container.
        -   `margin` accepts a string value e.g. `100px 200px`. If not specified, it defaults to `0 auto`
    -   `rowsPerPageOptions` - An `array` containing the rows per page options to be available in the table. Defaults to 10, 50, 100 rows `[10,50,100]` if not specified.
