## STIM - Johan Wennerström

    Hej!
    Här är mitt kodprov. Använder unsplash api för att få ned slumpade bilder och crudcrud 
    för att lagra valda bilder med beskrivning. Bilders beskrivning kan uppdateras och bilder kan tas bort.

## Add .env to root with crudcrud id and unsplash access key

```sh
VITE_CC_ID=XXXXXXXXXXXXXX
VITE_UNSPLASH_KEY=XXXXXXXXXXXX
```

Uses:

- React
- Chakra ui
- SWR
- Vite

## Installation

```sh
npm install
```

## Dev

```sh
npm run dev
```

## Build

```sh
npm run build
```

## Serve

```sh
npm run serve
```

## Docker build (docker only runs production build. Not dev. Still requires to be built after adding .env file to root)

```sh
docker build -t usr/name .
```

## Docker run

```sh
docker run -p 3000:3000 usr/name
```
