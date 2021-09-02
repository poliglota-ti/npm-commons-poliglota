
# NPM Commons Poliglota



This is a NPM package for commons assets used in frontend app's of Poliglota.



## Quick start



### Installing



Using npm:



```bash

$ npm install npm-commons-poliglota

```



### Use in Vue app's



If you use `vue-cli` only need add this lines in `main.js` file.



`import 'npm-commons-poliglota/dist/css/main.css'`

`import 'npm-commons-poliglota/dist/js/main.js'`



### Development



if you need to add new files or libraries, please follow the steps below:



- In `src` folder existing two files, `index.js` and `scss/custom.scss`.

- Add in this files the references to new files or libraries.

- Optionally, you can modify `webpack.config.js` to add new rules for compiling assets.

- And finally, run `npm run build` to compile assets for production in `dist` folder.

- Or run `npm run build-dev` to compile assets for development in `dist` folder.



## Vue + Bootstrap

If you need add Tooltip or Popover component of bootstrap, you can see the next steps:

### Vue / Options API

In the component where you are going to use the tooltip or popover:

```javascript
export  default {
	name:  "Home",
	data(){
		return {
			popoverList:  [],
			tooltipList:  []
		}
	},
	methods:{
		popoverActive(){
			this.popoverList  =  [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
			this.popoverList.map( popover =>  new  window.bootstrap.Popover(popover)  )
		},
		tooltipActive(){
			this.tooltipList  =  [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
			this.tooltipList.map( tooltip =>  new  window.bootstrap.Tooltip(tooltip)  )
		}
	},
	mounted  () {
		this.popoverActive()
		this.tooltipActive()
	}
}
```

### Vue / Composition API

In the component where you are going to use the tooltip or popover:

```javascript
import {ref, onMounted} from  'vue'
export  default {
	setup() {
		const popoverList =  ref([])
		const tooltipList =  ref([])
		const  popoverActive  =  ()  => {
			popoverList.value  =  [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
			popoverList.value.map( popover =>  new  window.bootstrap.Popover(popover)  )
		}
		const  tooltipActive  =  ()  => {
			tooltipList.value  =  [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
			tooltipList.value.map( tooltip =>  new  window.bootstrap.Tooltip(tooltip)  )
		}
		onMounted(  ()  => {
			popoverActive()
			tooltipActive()
		})
		return{
			popoverList,
			tooltipList,
			popoverActive,
			tooltipActive
		}
	}
}
```