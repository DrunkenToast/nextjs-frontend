# Next.js frontend for the Arduino project

| <img src="https://user-images.githubusercontent.com/20017197/184555325-b650d6f5-a63b-4bad-8ac8-7411ec581d44.png" width="200px" alt="Main app screen"> |  <img src="https://user-images.githubusercontent.com/20017197/184555334-e5592eb6-436f-404c-9f1c-a64c14f32222.png" width="200px" alt="Details of readings"> | <img src="https://user-images.githubusercontent.com/20017197/184555532-19033e44-9d75-4c14-88b6-d9d526846457.png" width="200px" alt="Toast notifications">
|:--:|:--:|:--:|

## Setup

Configure your `.env.local` as follows (`.env.example`):
```
NEXT_PUBLIC_API_HOST=<Client side host address of API>
SS_API_HOST=<Server side host address of API, can be $NEXT_PUBLIC_API_HOST if the same>
```

## Development server

To start the development server:

```bash
yarn dev
```

