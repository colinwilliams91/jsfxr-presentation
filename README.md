![image](https://github.com/colinwilliams91/jsfxr-presentation/assets/92059005/2420a9c1-f057-4550-bc05-3d5a1463259d)

## JSFXR GUI:
This is the [Interface for sound parameters](https://sfxr.me/)

## Use and Setup:
Maintainer [chr15m](https://github.com/chr15m) [JavaScript Library Repo](https://github.com/chr15m/jsfxr#use)

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


### Resources:
- [Webaudio API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Modulation and Effects Filters w/ Webaudio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API#defining_audio_effects_filters)

### Footnotes: 
<sup>1</sup> - These Scripts will allow for our app to use the `sfxr` namespace without requiring it (without these we get an error about riffwave and sfxr PRESUMABLY from where they are used in /node_modules)
