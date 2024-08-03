# Twubric

Twubric is a Next.js application that allows users to view and manage Twitter followers based on a custom scoring system called Twubric.

## Features

- Display followers in a grid layout
- Sort followers based on different Twubric criteria
- Filter followers by join date
- Remove followers from the list

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Fetch API for data retrieval

## Getting Started

To run the Twubric application locally, follow these steps:

1. Clone the repository: `bash
git clone https://github.com/your-username/twubric.git
cd twubric `

2. Install dependencies: `bash npm install`

3. Run the development server: `bash npm run dev`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `app/page.js`: Main component containing the application logic
- `components/`: Folder containing reusable components
- `FollowerGrid.js`: Component for displaying the grid of followers
- `SortToolbar.js`: Component for sorting options
- `DateFilter.js`: Component for date range filtering
- `tailwind.config.js`: Tailwind CSS configuration
- `app/layout.js`: Root layout component

## Customization

You can customize the application by modifying the components in the `components/` folder and updating the main logic in `app/page.js`.

## Deployment

The easiest way to deploy your Twubric app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about the technologies used in this project, refer to the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
