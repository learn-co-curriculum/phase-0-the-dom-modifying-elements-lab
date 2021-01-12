# Creating and Inserting DOM Nodes

## Learning Goals

* Create DOM elements programmatically
* Add elements to the DOM
* Update elements using `innerHTML`
* Change properties on DOM nodes
* Remove elements from the DOM

## Introduction

Now that you have an understanding of the DOM and powerful tools for selecting
the right elements, it's time to learn how to:

1. create new nodes
2. delete nodes
3. update nodes' properties

If you haven't already, fork and clone this lab into your local environment.
Navigate into its directory in the terminal, then run `code .` to open the files
in Visual Studio Code. Finally, run `npm install` to install the lab's
dependencies.

## Create DOM Elements Programmatically

### `document.createElement()`

Creating an element in JavaScript is an easy process. You simply call
`document.createElement('tagName')`, where `tagName` is the name of any valid HTML
tag (`'p'`, `'div'`, `'span'`, etc.).

Open the `index.html` file in your browser and open up the browser's console. In
the console, enter:

``` javascript
const element = document.createElement('div');
```

then take a look at the Elements tab. The element doesn't show up on the page.
Why not?

## Add Elements to the DOM

To get an element to appear in the DOM, we have to `append` it to an existing
DOM node. To go back to our tree metaphor, we have to glue our new leaf onto a
branch that's already there. We can start as high up on the tree as
`document.body`, or we can find a more specific element using any of the
methods we've learned for traversing the DOM.

### `appendChild()`

Let's append `element` to `body` to start:

``` javascript
document.body.appendChild(element);
```

Now if you look at the Elements tab, you'll see our new (empty) `<div>` nested
inside the `body` element. Let's give it some content:

``` javascript
const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);
```

Note that, each time we create a new element, we create a variable and save a
reference to it. That makes it quite easy to make additional updates and to add
it to the DOM using `appendChild`.

Refresh the browser; you should now see the unordered list rendered on the page,
and see the new elements in the "Elements" tab.

## Add Elements to the DOM via `innerHTML`

Creating elements and then appending them into the DOM is a multi-step process.
It's also the ***safest and most reliable way*** to add content to the DOM. Most
repeated code can be removed by using variables, functions and loops. It's The
Right Way.

That said, however, there's another process that will also work, using
`Element.innerHTML`. Inside our loop above, we create an `li` element and set
its `innerHTML` property to a simple number (expressed as a string) that represents the current iteration through the loop. Once we append the `li` to the `ul` and the `ul` to
the document `body`, we see our unordered list in the browser window. This is a
perfectly acceptable way to use `innerHTML`. Imagine, however, that we want to
add content that's more complicated.

Assume our HTML includes a `div` with an `id` of "header." We can grab that
element and set its `innerHTML` attribute to any HTML we like:

```js
const header = document.getElementById("div#header");
header.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";
```

Here we are using JavaScript to create the following HTML in the DOM:

```html
<div id="header">
  <h1>Poodles!</h1>
  <h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3>
  <p><em>By: Byron Q. Poodle, Esq., BA.</em></p>
</div>
```

***HOWEVER***, this process is **not** recommended for a couple of reasons.
First, even though programmatically creating and appending elements requires
more steps and more code, it results in code that's easier to read, easier to
debug, and easier to maintain.

Second, if you put user-derived data into the DOM using `innerHTML`, someone
could do something nasty. Consider the following code:

```js
content = someInputField.value;
someNode.innerHTML = `Hi, ${content}!`;
```

We might have intended for `someInputField` to contain something like a person's
name that we're going to echo back out to the screen.

But what if the person typing in `someInputField` submits something like this:

```js
<a href='someURL' onclick='doSomethingNastyLikeStealCookies'>Click here to claim your prize!</a>
```

While you're not familiar with events (yet!), it should be clear that
`doSomethingNastyLikeStealCookies` when clicking on a link that promises a prize
is probably not what users expected or what we want. While it **can** be guarded
against, `innerHTML` can accidentally lead to problems in sites. Be careful with
it!

## Change Properties on DOM Nodes

We can change the appearance of a DOM node using its `style` attribute:

``` javascript
element.style.backgroundColor = '#27647B';
```

You've changed what's on the screen!

Feel free to set as many properties as you'd like &mdash; this is a good chance
to look around and explore different properties of DOM elements.

Let's adjust the display:

``` javascript
element.style.textAlign = 'center';
ul.style.textAlign = 'left';
```

That's better.

Perhaps the most common way to change how things appear in the DOM is by
changing an element's `class` attribute. As you know from CSS, we often change
the way a bit of rendered HTML appears by adding or removing a class.

For example, we could create an `alert` class that turns the text red (using the CSS `color` attribute) and makes
it big (using the CSS `font-size` attribute). We can then use
JavaScript to first grab the element and then add that class by updating its
`className` property. This has the same effect as setting the `class` property
in the HTML. The `className` property expects a `String` with one or more class
names, separated by spaces:

```javascript
element.className = "dog";
element.className = "pet-listing dog";
```

Another way to accomplish the same thing is by using the [`Element.classList`
property][classList]. This property has `.add()` and `.remove()` methods that
can be used as follows:

```javascript
element.classList.remove("this-is-fine");
element.classList.add("the-room-is-on-fire");
```

An important thing to bear in mind is that we only want to use JavaScript to
change the appearance of an element when we need to make a change dynamically,
i.e., in response to user actions. This goes back to a fundamental programming
concept about separating concerns between technologies:

* HTML defines the structure of the website (not appearance or functionality)
* JavaScript defines functionality of the website (not structure or styling)
* CSS defines the visualization and style of the website (not structure or
  functionality)

Defining the base CSS should still happen in the CSS files that are loaded into
the DOM when the page is opened.

## Remove Elements from the DOM

We know how to add elements and change their attributes. What if we want to
remove an element from a page?

### `removeChild()`

We use `removeChild()`, as you might guess, to remove a particular child of an element:

```js
someElement.removeChild(someChildElement);
```

Let's take a look at a more complex example:

``` javascript
const ul = document.getElementsbyTagName('ul')[0];
ul.removeChild(ul.querySelector('li:nth-child(2)'));
```

Here you can see the power of `querySelector()`: we can use it to find the second
`li` element of `ul`. We then pass that element as the argument to our
`removeChild` method, which removes the element from our `ul`.

What if we want to remove the whole unordered list (`ul`)?

### `element.remove()`

We can just call `remove()` on the element itself:

``` javascript
ul.remove();
```

And it's gone!

## Instructions

From this point forward, many of the labs will work a little differently from
ones you've done before. Specifically, the tests will mock the process of 1)
running JavaScript code in the browser and 2) seeing the results of that code
represented in the DOM. Take a look at `test/indexTest.js` to see the tests'
descriptions of the changes your code should be making to the DOM elements.

Note that you do not need to create functions for this lab. Just create the line
or lines of JavaScript necessary to pass each test. As usual, you will write your
code in the `index.js` file.

## Resources

* [document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
* [appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
* [removeChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
* [element.remove()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)
* [classList Property][classList]

[classList]: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
