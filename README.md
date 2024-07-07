# LinkDevTask

### Overview
This Angular application serves as a portal for users to browse news categorized by various topics. It includes a homepage with key sections such as a banner, highlights, "Things we do", and latest news. The application fetches data from specified API endpoints and allows filtering news by category.


### Project Structure
The project is organized as follows:
```
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── hero/
│   │   │   ├── latest-news/
│   │   │   ├── navbar/
│   │   │   ├── things-we-do/
│   │   │   ├── footer/
│   │   │
│   │   ├── interfaces/   (banner.ts - category.ts - news.ts)
│   │   ├── services/     (banner service , news service)
│   │   ├── assets/       (img, styles, fonts)
│   │   └── app.module.ts (Angular module)
│   ├── environments/     (Environment configuration)
│   ├── styles.scss       (Global styles using Sass)
│   └── index.html        (Main HTML file)
└── angular.json          (Angular project configuration)
```

### Setup and Installation
1. Clone the repository from [repository URL].
2. Install dependencies using `npm install`.
3. Run the application locally using `ng serve`.

### API Integration
- **Banner**: Fetches data from [Banner API](assets/json/banner.json).
- **Latest News**: Utilizes [News API]([https://api.npoint.io/d275425a434e02acf2f7/news_listing](https://api.npoint.io/d275425a434e02acf2f7)) and [News Categories API]([https://api.npoint.io/91298d970c27e9a06518](https://api.npoint.io/91298d970c27e9a06518)) for news listing and categorization.

### Functionality and Components

#### Homepage Component Structure
- **Banner**: Displays rotating highlights with category, title, brief, image, and optional video.
- **Things we do**: Lists activities with titles, images, and "Read more" links.
- **Latest News**: Shows news items with images, titles (linked to details), categories, publish dates, and social sharing options.

#### Filtering
- **News Categories**: Allows users to filter news by category using a category menu and show more or less news and sorted it according to their publish date.

#### Features
- **Responsive Design**: Mobile-first approach ensures compatibility across devices.
- **State Management**: Uses Angular services to manage data retrieval and component interaction.
- **Optimization**: Implements best practices for performance, including lazy loading and efficient data fetching.

### Development Notes
- **Component Reusability**: Utilizes Angular components and services for modularity and reusability.
- **Styling**: Implements styles using Sass for maintainability and scalability.

### Testing and Validation
- **Compatibility**: Tested on latest versions of Chrome, Firefox, Safari, and Edge, and IE 11.

### Conclusion
This Angular application provides a scalable, responsive solution for presenting news content with intuitive navigation and efficient data handling. For further details or issues, refer to the repository or contact.
