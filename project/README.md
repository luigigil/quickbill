# Quickbill

## Folder Structure

```
/src
|-- /api
|   |-- /controllers    # Controllers for handling API requests
|   |-- /routes         # Route definitions for APIs
|   |-- /middlewares    # Express middlewares (e.g., authentication)
|   `-- /validators     # Request data validation logic
|
|-- /events
|   |-- /listeners      # Event listeners (e.g., for queues)
|   |-- /handlers       # Handlers for processing events
|   `-- /models         # Event data models or types
|
|-- /services           # Business logic services
|-- /models             # Data models for database interactions
|-- /utils              # Utility functions and shared code
|-- /config             # Configuration files and environment variable management
|-- index.ts            # Main application entry point
```

