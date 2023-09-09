# jsfxr-presentation
Quick walkthrough for benefits of synthesizing sound inside codebase

## JSFXR GUI:
This is the [Interface for sound parameters](https://sfxr.me/)

## Use and Setup:
Maintainer @chr15m [chr15m](https://github.com/chr15m) [JavaScript Library Repo](https://github.com/chr15m/jsfxr#use)

1. **This app uses CRA**
```ts
npx create-react-app my-app
cd my-app
```
2. **Install JSFXR**
```ts
npm i jsfxr
```
3. **Include the scripts in your page to directly use the `sfxr` namespace without requiring it**<sup>1</sup>.

`./public/index.html`
```ts
<script src="https://sfxr.me/riffwave.js"></script>
<script src="https://sfxr.me/sfxr.js"></script>
```




### Footnotes: 
<sup>1</sup> - These Scripts will allow for our app to use the `sfxr` namespace without requiring it (without these we get an error about riffwave and sfxr PRESUMABLY from where they are used in /node_modules)
