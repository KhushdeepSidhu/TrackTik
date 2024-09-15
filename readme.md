This project is a React-based web application designed to display and manage a list of sites. It includes features like searching, filtering, and pagination with asynchronous data fetching from an API. The application is built with TypeScript and React Query to handle data management, and Material UI is used for styling.

Features

- Search: Search by multiple fields like title, contact name, state, and country.
- Sort: Sort sites by creation or update date.
- Filters: Apply date filters (from and to date) to refine results.
- Pagination: Navigate through pages of site data.
- Loading Indicators: UI feedback during API requests.
- Local Storage: Persist the state (search, filters, sorting) between sessions.
- Lazy loading

Technologies

- React: UI library for building user interfaces.
- TypeScript: Superset of JavaScript for static type checking.
- React Query: For managing server state and caching.
- Material UI: Component library for modern UI design.
- Jest: JavaScript testing framework.
- React Testing Library: For testing React components.

To install and run the project locally, follow these steps:

1. Clone the repository:

   git clone https://github.com/KhushdeepSidhu/TrackTik.git

2. Navigate to the project directory:

   cd project-directory

3. Install the dependencies:

   npm install

4. Run the development server:

   npm run dev-server

5. The application will run at http://localhost:8080

To run the test suite, use the following command:

    npm test

Note - The Filter dialog is just a placeholder, there are fom and to date pickers to select the range of dates to get
the sites created between those dates. I tried the following query but that does not seem to work -

      https://tracktik-challenge.staffr.com/sites?createdAt_gte=06-06-2023

Need some more info if we can query like this or in which format we have to send the createdAt_gte.

Performance Optimizations

- Memoization: The SiteList component uses useCallback to memoize functions like setPage, handleSearchByDropdown, and others to prevent unnecessary re-renders.
- React Query: Caching is handled by React Query, which minimizes API calls when data is available.
- Debouncing: Search inputs are debounced to prevent frequent API calls during typing.
- Lazy Loading of components
