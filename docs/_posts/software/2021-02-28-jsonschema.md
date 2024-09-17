---
layout: post
title: "jsonschema"
date: 2021-02-21
author: "@vsoch"
annotate_criteria: https://rseng.github.io/software/repository/github/Julian/jsonschema/annotate-criteria/index.html
annotate_taxonomy: https://rseng.github.io/software/repository/github/Julian/jsonschema/annotate-taxonomy/index.html
categories:
- Software
---

For our RSEPedia showcase this week, let's celebrate a library that has been empowering our json and yaml 
associated with Python projects for years to be parsed and verified as correct... [jsonschema](https://github.com/Julian/jsonschema)!

<br>

![{{ site.baseurl }}/assets/img/posts/showcase/jsonschema.png]({{ site.baseurl }}/assets/img/posts/showcase/jsonschema.png)

<br>

If you are already familiar with this software, we encourage you to contribute to the [research software encyclopedia](https://rseng.github.io/rse/tutorials/annotation/) and annotate the respository:

<ul>
<li><a href="{{ page.annotate_criteria }}" target="_blank">Annotate the software criteria</a></li>
<li><a href="{{ page.annotate_taxonomy }}" target="_blank">Annotate the software taxonomy</a></li>
</ul>

otherwise, keep reading!

<!--more--> 

 - [What is jsonschema?](#what-is)
 - [How do I cite it?](#cite)
 - [How do I get started?](#getting-started)
 - [How do I contribute to the software survey](#contribute)
 - [Where can I learn more?](#learn-more)

<a id="what-is">
## What is jsonschema?

Python projects often have data files. These data files might be actual data for an analysis,
or moreso something like a configuration file to define a service or standard. For either of
these use cases, the formatting is important, meaning correct or required fields are provided, the type and structure of those fields are correct,
and the overall structure of the data is what the program expects. How can we ensure or check that a data file
looks okay before we hand it off to our program? This is a job for jsonschema! And did you know that it has over 133K reported users?
What it basically does is provide a Python implementation of the general [json-schema.org](https://json-schema.org/)
which defines itself as:

> JSON Schema is a vocabulary that allows you to annotate and validate JSON documents.

And that's really exactly what it does. It will allow you to define how you want your
json to be structured, and then validate it. And by the way - yaml also loads as json, so you
can use jsonschema to validate yaml too. Let's walk through a slightly modified example that
is provided in the jsonschema README.

### A Quick Example

We start with a schema. It's going to say that we want an object (dictionary)
to describe a dinosaur with properties "name", "age", and "color":

```python
schema = {
    "type" : "object",
    "properties" : {
        "name" : {"type" : "string"},
        "age" : {"type" : "number"},
        "color" : {"type" : "string"},
    },
}
```

Now we want to validate some new instance of a dinosaur to see if it's valid.
Let's first create a valid dinosaur:

```python
dinosaur = {"name": "Pusheenadino", "age": 53, "color": "green"}
```

Now let's see if our dinosaur validates. If no exception is raised, the instance is valid.

```python
from jsonschema import validate
validate(instance=dinosaur, schema=schema)
```

Now let's add an error (oops, our data file that we loaded has defined a string
instead of a number for age!) and see if it validates:

```python
dinosaur = {"name": "Pusheenadino", "age": "53", "color": "green"}
validate(instance=dinosaur, schema=schema)
```
```
ValidationError: '53' is not of type 'number'

Failed validating 'type' in schema['properties']['age']:
    {'type': 'number'}

On instance['age']:
    '53'
```

And that's basically it. The trick with this library is getting familiar
with how to write more complex schemas. I like to use the [examples](http://json-schema.org/learn/miscellaneous-examples.html)
provided by json-schema.org, or look at examples in the wild (here is a set that I helped design for [buildtest](https://github.com/buildtesters/buildtest/tree/devel/buildtest/schemas)).


<a id="cite">
## How do I cite it?

```bibtex
 @software{julian_berman_2021_5539942,
  author       = {Julian Berman and
                  Chase Sterling and
                  Romain Taprest and
                  Harald Nezbeda and
                  wilson chen and
                  Opemipo and
                  DavidKorczynski and
                  Glenn Maynard and
                  Ben Smithers and
                  Martin Zugnoni and
                  Colin Dunklau and
                  Hillel Arnold and
                  Daniel Nephin and
                  Bouke Haarsma and
                  John Anderson and
                  Lennart and
                  ApamNapat and
                  Alexander Bayandin and
                  Gabriel Le Breton and
                  joepvandijken and
                  Nicolás Aimetti and
                  apiraino and
                  johnthagen and
                  Michael Droettboom and
                  Omar Ryhan and
                  Vlad Stefan Munteanu and
                  Adam Dobrawy and
                  Jacob D. Moorman and
                  Zac Hatfield-Dodds},
  title        = {Julian/jsonschema: v4.0.0},
  month        = sep,
  year         = 2021,
  publisher    = {Zenodo},
  version      = {v4.0.0},
  doi          = {10.5281/zenodo.5539942},
  url          = {https://doi.org/10.5281/zenodo.5539942}
}
```
 
You can also support the author on 
[Patreon](https://patreon.com/JulianWasTaken) or [Tidelift](https://tidelift.com/funding/github/pypi/jsonschema).


<a id="getting-started">
## How do I get started?
 
You might want to check out:

 - [The GitHub Repository](https://github.com/Julian/jsonschema)
 - [Documentation](https://python-jsonschema.readthedocs.io/en/stable/) 
 - [json-schema.org](http://json-schema.org/)
 - [json-schema.org examples](http://json-schema.org/learn/miscellaneous-examples.html)

<a id="contribute">
## How do I contribute to the software survey?

<ul>
  <li><a href="{{ page.annotate_criteria }}" target="_blank">Annotate the software criteria</a></li>
  <li><a href="{{ page.annotate_taxonomy }}" target="_blank">Annotate the software taxonomy</a></li>
</ul>

or read more about annotation [here]({{ site.baseurl }}/tutorials/annotate-your-software). You can clone the software repository to do
bulk annotation, or annotation any repository in the <a href="https://rseng.github.io/software/" target="_blank">software database</a>,
We want annotation to be fun, straight-forward, and easy, so we will be showcasing one repository to annotate per week.
If you'd like to request annotation of a particular repository (or addition to the software database)
please don't hesitate to [open an issue](https://github.com/rseng/software/issues) or even a pull request.

<a id="learn-more">
## Where can I learn more?

You might find these other resources useful:

 - [The Research Software Database](https://github.com/rseng/software) on GitHub
 - [RSEpedia Documentation](https://rseng.github.io/rse)
 - [Google Docs Manuscript](https://docs.google.com/document/d/1wDb0udH9OrFWrMBsAVb8RrUMCKKRHoyEep7yveJ1d0k/edit) you are invited to contribute to.
 - [Annotation Documentation for RSEpedia](https://rseng.github.io/rse/tutorials/annotation/)
 - [Annotation Tutorial in RSEng docs](https://rseng.github.io/rse/tutorials/annotation/)

For any resource, you are encouraged to give feedback and contribute!

