---
layout: post
title: "retriever"
date: 2021-01-10
author: "@vsoch"
annotate_criteria: https://rseng.github.io/software/repository/github/weecology/retriever/annotate-criteria/index.html
annotate_taxonomy: https://rseng.github.io/software/repository/github/weecology/retriever/annotate-taxonomy/index.html
categories:
- Software
---


Can you imagine a database of datasets paired with a tool to automatically download, preprocess, and
import into a desired format for your usage? For this week's RSEPedia Software Survey, we introduce you to
[weecology/retriever](https://github.com/weecology/retriever), a tool to do just that.

<br>

![{{ site.baseurl }}/assets/img/posts/showcase/retriever.png]({{ site.baseurl }}/assets/img/posts/showcase/retriever.png)

<br>

Are you already familiar with this software? We encourage you to contribute to the [research software encyclopedia](https://rseng.github.io/rse/tutorials/annotation/) and annotate the respository:

<ul>
<li><a href="{{ page.annotate_criteria }}" target="_blank">Annotate the software criteria</a></li>
<li><a href="{{ page.annotate_taxonomy }}" target="_blank">Annotate the software taxonomy</a></li>
</ul>

otherwise, keep reading!

<!--more--> 

 - [What is data retriever?](#what-is)
 - [How do I cite it?](#cite)
 - [How do I get started?](#getting-started)
 - [How do I contribute to the software survey](#contribute)
 - [Where can I learn more?](#learn-more)

<a id="what-is">
## What is data retriever?

If you've ever been a student or researcher, you know that data is gold. The quality and size
of the dataset can make or break your analysis, or as they like to say "Trash in, trash out!"
This is why we should be so excited about a tool like data retriever. In only a few commands with 
the retriever client, you can install a dataset, meaning that you download it along with rich
metadata, clean and standardize it, and then import into your final destination of choice.
That could mean a full blown relational database, or a flat file like csv or json.


For example, first we might install retriever:

```bash
pip install retriever
```

And then use the `install` command to select a dataset. 

```bash
usage: retriever install [-h] [--compile] [--debug]
                         {mysql,postgres,sqlite,msaccess,csv,json,xml} ...

positional arguments:
  {mysql,postgres,sqlite,msaccess,csv,json,xml}
                        engine-specific help
    mysql               MySQL
    postgres            PostgreSQL
    sqlite              SQLite
    msaccess            Microsoft Access
    csv                 CSV
    json                JSON
    xml                 XML

optional arguments:
  -h, --help            show this help message and exit
  --compile             force re-compile of script before downloading
  --debug               run in debug mode
```

Do you see how many options for databases you can use? When data is typically shared online
(if it is shared at all) you usually have to find it, download some single or set of files,
and then clean and preprocess it into the final destination of your choice. This tool
will do all that for you, saving you time and energy, and ensuring that the dataset used is 
consistent between users. And hold your hat, there are [over 200 datasets available](https://retriever.readthedocs.io/en/latest/datasets_list.html)
in this manner, including everything from demographics, to agriculture, and geography.

<a id="cite">
## How do I cite it?

You can use the following Zenodo citation for the software. What is so great about this citation is we can
see how many folks worked together to make the software!

```
@software{ben_morris_2017_1038272,
  author       = {Ben Morris and
                  Ethan White and
                  Henry Senyondo and
                  Akash Goel and
                  Shivam Negi and
                  Elita Baldridge and
                  Andrew Zhang and
                  Dan McGlinn and
                  Akshay and
                  David J. Harris and
                  Kate Thibault and
                  Deborah Gertrude Digges and
                  Pankaj and
                  Paul Wolf and
                  Kapil kumar and
                  Amritanshu jain and
                  Sarah Reehl and
                  Kunal Pal and
                  Kevin Amipara and
                  Erica Christensen and
                  Yanghao Li and
                  Xiao Xiao and
                  Kristina Riemer and
                  Saket Choudhary and
                  Morgan Ernest and
                  James Quadrino and
                  David LeBauer and
                  carol-rowe666 and
                  Bishakh Ghosh and
                  Barry Wark},
  title        = {weecology/retriever: v2.1.0},
  month        = oct,
  year         = 2017,
  publisher    = {Zenodo},
  version      = {v2.1.0},
  doi          = {10.5281/zenodo.1038272},
  url          = {https://doi.org/10.5281/zenodo.1038272}
}
```

<a id="getting-started">
## How do I get started?
 
You probably want to start with your programming language of interest - data retriever is 
available for both R and Python!

 - [Data Retriever with Python](https://retriever.readthedocs.io/en/latest/pyretriever.html)
 - [Data Retriever with R](https://retriever.readthedocs.io/en/latest/rdataretriever.html)
 - [GitHub](https://github.com/weecology/retriever)
 - [Documentation](https://retriever.readthedocs.io/en/latest/index.html)
 - [Datasets](https://retriever.readthedocs.io/en/latest/datasets_list.html)

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
