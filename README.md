# Creating and Inserting DOM Nodes

## Learning Goals

1. Create DOM elements programmatically
2. Add elements in the DOM
3. Change properties on DOM nodes
4. Remove elements from the DOM

## Introduction

In this lab, you will be inserting, altering, and removing DOM nodes. You will
be doing the following:

1. Ask the DOM to find an HTML element or elements in the rendered page
2. Remove or insert the selected element(s) and / or
3. Adjust a property of the selected element(s)

You've come to understand the DOM and have powerful tools for selecting the
right elements. You now want to understand creating new nodes, deleting nodes,
and updating nodes' properties.

### Create DOM Elements Programmatically

#### `document.createElement()`

Creating an element in JavaScript is an easy process. Simply call
`document.createElement('tagName')`, where `tagName` is the name of any valid HTML
tag (e.g., `'p'`, `'div'`, `'span'`, etc.).

Open `index.html` file in your browser and open up the browser's console. In the
console, enter

``` javascript
var element = document.createElement('div')
```

The element doesn't show up on the page. Why not?

### Add Elements in the DOM

To get an element to appear in the DOM, we have to `append` it to an existing
DOM node. To go back to our tree metaphor, we have to glue our new leaf onto a
branch that's already there. We can start as high up on the tree as
`document.body`, or we can find a more specific element using any of the
methods we've learned for traversing the DOM.

#### `appendChild()`

Let's append `element` to `body` to start:

``` javascript
document.body.appendChild(element)
```

We can continue to update `element`, since we have a reference to it:

``` javascript
var ul = document.createElement('ul')

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}

element.appendChild(ul)
```

### Change Properties on DOM Nodes

We can change properties on DOM nodes to change their appearance.

``` javascript
element.innerHTML = 'Hello, DOM!'
element.style.backgroundColor = '#27647B';
```

You've changed what's on the screen!

Feel free to set as many properties as you'd like — this is a good chance to
look around and explore different properties of DOM elements.

Let's adjust the display:

``` javascript
element.style.textAlign = 'center';
ul.style.textAlign = 'left'
```

That's better.

### Remove Elements from the DOM

We know how to add things. What if we want to remove an element from a page?

#### `removeChild()`

Let's really use the power of `querySelector` and method chaining.
The `removeChild()` method requires us to find a parent and tell it to remove
its already-found child:

``` javascript
ul.removeChild(ul.querySelector('li:nth-child(2)'))
```

The second element is gone!

What if we want to remove the whole unordered list (`ul`)?

#### `element.remove()`

We can just call `remove()` on the element itself:

``` javascript
ul.remove()
```

And it's gone!

## Conclusion

You now know how to create, append and remove elements in the DOM with
JavaScript. With this knowledge, you can become a master DOM manipulator in no time. 

## Resources

- [document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- [removeChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
- [element.remove()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)
