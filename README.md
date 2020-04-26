# Link Preview Generator Server

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
	"url": "https://www.facebook.com/1613119002302424/posts/2610947252519589/"
}
```

### Response

```json
{
  "title": "Shushil Agnihotri",
  "description": "wasss",
  "domain": "facebook.com",
  "img": "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/93932287_2764867483640728_2775834816489193472_n.jpg?_nc_cat=100&_nc_sid=de0e5b&_nc_ohc=8LtLU33hni0AX9OLO88_nc_ht=scontent-lht6-1.xx&oh=668aebd370e6f853bf5e264e3a4e4c30&oe=5ECA71D6"
}
```

