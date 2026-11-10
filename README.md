# Node API Foundation

A clean and lightweight Node.js and Express API foundation with environment configuration, health monitoring, JSON support, and basic error handling.

## Features

- Node.js and Express
- Environment-based port configuration
- JSON request support with a 100 KB body limit
- Root API endpoint
- Health check endpoint
- 404 handling
- Safe handling for malformed and oversized JSON bodies
- Validated port configuration
- Simple local API testing with `res.http`

## Endpoints

### Root

```http
GET /
```

### Health Check

```http
GET /api/v1/health
```

## Run Locally

```bash
npm install
npm run dev
```

## Production

```bash
npm start
```

## Default Port

```text
1198
```

Set `PORT` in the environment to use a different port. It must be an integer from 1 to 65535. JSON request bodies are limited to 100 KB. Malformed JSON returns `400`, oversized bodies return `413`, and unexpected server errors return a generic `500` response.

## Author

**Ashish Ranjan**

# Links

- Portfolio: https://www.ashishranjan.net
- GitHub: https://github.com/a2rp
- CodePen: https://codepen.io/ash1198
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/
- YouTube: https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1
- Email: mailto:ash.ranjan09@gmail.com

# Support

- Support: https://a2rp-donation-page.netlify.app/
- Buy Me A Coffee: https://buymeacoffee.com/a2rp
- Patreon: https://patreon.com/a2rp

## License

MIT License
