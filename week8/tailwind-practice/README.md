# Tailwind Notes

## Difference in using FLEX between using CSS and Tailwind:

```
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display:'flex',justifyContent: 'center'}}>
      <div style={{backgroundColor:"red"}}>Hello</div>
      <div style={{backgroundColor:"blue"}}>Hello</div>
      <div style={{backgroundColor:"green"}}>Hello</div>
      </div>
      <br></br>
      {/* using Tailwind below */}
      <div className='flex justify-between'>
      <div className='bg-red-400'>Hello</div>
      <div className='bg-green-400'>Hello</div>
      <div className='bg-blue-400'>Hello</div>
      </div>
    </>
  )
}

export default App


```

## CSS Grid Introduction
CSS Grid is designed to simplify laying out webpages using CSS. This is a dramatic improvement over what we've used in the past.

### CSS Grids:
1. designed to accomodate complex layouts
2. are language agnostic (work with right-to-left)
3. can be nested

There are three basic steps for creating a CSS Grid layout:
- Establish a grid container
- Set up columns and rows
- Place page elements on the grid


### The Grid container
Just like with flexbox, a grid is created by changing the display property of a parent element. This element becomes the grid container and defines the context for grid formatting.

To create a grid container change the display property to grid:

```
.grid-container {
   display: grid
}

```

#### Grid Terms
The primary parts of a grid are:
- Grid lines
- grid cell and grid areas
- grid tracks (rows or columns)

![alt text]([image.png](http://web.simmons.edu/~grovesd/comm244/notes/week11/grid-terms.png))



**Grid line**
The horizontal and vertical dividing lines of the grid are called grid lines.
**Grid cell**
The smallest unit of a grid is a grid cell, which is bordered by four adjacent grid lines with no grid lines running through it.
**Grid area**
A grid area is a rectangular area made up of one or more adjacent grid cells.
**Grid track**
The space between two adjacent grid lines is a grid track, which is a generic name for a grid column or a grid row. Grid columns are said to go along the block axis, which is vertical (as block elements are stacked) for languages written horizontally. Grid rows follow the inline (horizontal) axis.


##### Using Grid with Tailwind
```
 {/* using grid with Tailwind */}
      <div className="grid grid-cols-6">
      <div className='bg-red-400 col-span-3'>Hello</div>
      <div className='bg-green-400'>Hello</div>
      <div className='bg-blue-400'>Hello</div>
      <div className='bg-red-400'>Hello</div>
      <div className='bg-green-400'>Hello</div>
      <div className='bg-blue-400'>Hello</div>
      <div className='bg-red-400'>Hello</div>
      <div className='bg-green-400'>Hello</div>
      <div className='bg-blue-400'>Hello</div>
      <div className='bg-red-400'>Hello</div>
      <div className='bg-green-400'>Hello</div>
      <div className='bg-blue-400'>Hello</div>
      <div className='bg-red-400'>Hello</div>
      </div>
```

# Responsiveness
[Breakpoints](https://www.google.com/url?sa=i&url=https%3A%2F%2Fmrtnschndlr.medium.com%2Fthings-to-rethink-with-tailwind-css-part-1-breakpoints-b2809e2bbb2&psig=AOvVaw0-f1QLXrZbRkQVHRf0W_Zc&ust=1714957621380000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDXv5Cp9YUDFQAAAAAdAAAAABAD)


## VERY VERY IMPORTANT

Don’t use sm: to target mobile devices

```
<!-- This will only center text on screens 640px and wider, not on small screens -->
<div class="sm:text-center"></div>
```


Use unprefixed utilities to target mobile, and override them at larger breakpoints.
```
<!-- This will center text on mobile, and left align it on screens 640px and wider -->
<div class="text-center sm:text-left"></div>
```
For this reason, it’s often a good idea to implement the mobile layout for a design first, then layer on any changes that make sense for sm screens, followed by md screens, etc.





Example: 
{/* demo of responsiveness */}
      <div className='sm:bg-pink-700 md:bg-blue-500'>Hello</div>




























Reources:
[CSS Grid information](http://web.simmons.edu/~grovesd/comm244/notes/week11/grid-basics.php)