The annotated source code for the examples can be viewed
online at: http://doc.gameclosure.com/index.html#examples

## Install the Examples

To install the examples on your local machine and play them
through the basil web interface, at the command-line run:

~~~
$ basil install examples
~~~

## Build the Annotated Source

Building the example documentation locally requires that you
install [Docco](http://jashkenas.github.com/docco/) and [Pygments](http://pygments.org):

~~~
$ sudo npm install -g docco
$ sudo easy_install Pygments
~~~

Screen-shots should be placed in the `doc` directory in the
root path of an example. In the example file, the image
reference is relative to the example project root:

~~~
//<img src="./doc/screenshot.png" alt="my screenshot" class="screenshot">
~~~
