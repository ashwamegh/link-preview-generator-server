# Link Preview Generator Server

## Docker Image of the server:

Available at Docker Hub at: https://hub.docker.com/repository/docker/ashwamegh/lpdg-server

Tags: `latest`

Demo of creating a server endpoint to get the preview meta data information for the URLs.

> This project is bootstrapped by `express-generator`

## Dependecies

- `link-preview-generator`

## API

- Method: POST
- Request Body: JSON

### Request

- Endpoint: `/parse/link`
- Body:

```json
{
	"url": "https://www.facebook.com"
}
```

### Response

```json
{
	"title": "Facebook – log in or sign up",
	"description": "Log in to Facebook to start sharing and connecting with your friends, family and people you know.",
	"domain": "facebook.com",
	"img": "https://www.facebook.com/images/fb_logo/app-facebook-circle-bp.png",
	"favicon": "https://www.facebook.com/favicon.ico"
}
```
