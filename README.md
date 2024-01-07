<h3 align="center">
 Symphony Ui
</h3>

<p align="center">
  A set of completely unstyled, fully accessible UI components, designed to integrate
  beautifully with Tailwind CSS.
</p>

---

## Documentation

For full documentation, visit [**storyBook**](http://195.248.242.187:8086/).

### Installing the latest version

You can install the latest version by using:

- `npm i symphony-ui`
 or
- `yarn add symphony-ui`

### config
- in tailwind.config.ts:
```javascript
/** @type  {import('tailwindcss').Config} */

export  default  {

	content: ["./index.html",  "./src/**/*.{js,ts,jsx,tsx}"],

	theme:  {

		extend:  {

			colors:  {

				"primary-color":  "#0CBC84",

				"secondary-color":  "#253343",

				"placeholder-color":  "#92A7C1",

				"input-color":  "#F5F7FA",

			},

		},

	},

	plugins: [],

};
```
- in App.ts:
```javascript
import 'symphony-ui/Themes/index.scss';
```

### use
```javascript
	import { Button } from 'symphony-ui'
	
	const MyComonent = () => {
		return 
		(
		<>
			<Button  />
			<Button theme={'Custom'} />
		</>
			
			
		)
	}
```

## Packages

| Name                                                                                                                 |                                                              Version                                                              |                                                              Downloads                                                               |
| :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: |
| [`symphony-ui/react`]()             |       [1.0.7]()       |       1

## Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discuss  Symphony Ui on GitHub]()


## Contributing

If you're interested in contributing to  Symphony Ui, please read our [contributing docs]() **before submitting a pull request**.