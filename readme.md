# Image reader

## Overview

A simple Node.js OCR REST API, utilising [Tesseract.js](https://github.com/naptha/tesseract.js).

## Setting up

Clone the repository, install node dependencies and start the express server:

```
git clone https://github.com/GRudinsky/image-reader.git
cd image-reader
npm install
npm start
```

## Usage

Open your favourite REST client and make the request with the below details, replacing the `imageUrl` and `language` with your preferred ones in the body:

```
{
  method: "POST",
  url:"http://localhost:8000/api/read-image",
  headers: ["Content-Type: application/json"],
  body: {"imageUrl":"https://i.stack.imgur.com/IvV2y.png","language":"eng"},
 }
```

Or make the below sample cURL request from your terminal:

```
curl --request POST \
  --url 'http://localhost:8000/api/read-image' \
  --header 'Content-Type: application/json' \
  --data '{"imageUrl":"https://i.stack.imgur.com/IvV2y.png","language":"eng"}'
```

Sample response data object structure:

```
{
  "imageText": "It was the best of\ntimes, it was the worst\nof times, it was the age\nof wisdom, it was the\nage of foolishness...\n"
}
```
