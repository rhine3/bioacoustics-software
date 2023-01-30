---
layout: post
title: "geopandas"
date: 2021-02-06
author: "@vsoch"
annotate_criteria: https://rseng.github.io/software/repository/github/geopandas/geopandas/annotate-criteria/index.html
annotate_taxonomy: https://rseng.github.io/software/repository/github/geopandas/geopandas/annotate-taxonomy/index.html
categories:
- Software
---

For our RSEPedia showcase this week, we want to direct your attention to [GeoPandas](https://github.com/geopandas/geopandas/)!

<br>

![{{ site.baseurl }}/assets/img/posts/showcase/geopandas.png]({{ site.baseurl }}/assets/img/posts/showcase/geopandas.png)

<br>

If you are already familiar with this software, we encourage you to contribute to the [research software encyclopedia](https://rseng.github.io/rse/tutorials/annotation/) and annotate the respository:

<ul>
<li><a href="{{ page.annotate_criteria }}" target="_blank">Annotate the software criteria</a></li>
<li><a href="{{ page.annotate_taxonomy }}" target="_blank">Annotate the software taxonomy</a></li>
</ul>

otherwise, keep reading!

<!--more--> 

 - [What is geopandas?](#what-is)
 - [How do I cite it?](#cite)
 - [How do I get started?](#getting-started)
 - [How do I contribute to the software survey](#contribute)
 - [Where can I learn more?](#learn-more)

<a id="what-is">
## What is geopandas?

Do you ever work with geographic data? Consider trying out GeoPandas. This library expands on Pandas DataFrames to represent geographic data. In a few lines, you can create maps as well perform geospatial operations on your data from a high-level interface. Geopandas relies on [shapely](https://shapely.readthedocs.io/en/stable/) for geometric operations, [fiona](https://fiona.readthedocs.io/en/latest/) for reading and writing data, and [pyproj](https://pyproj4.github.io/pyproj/stable/) to project data for plotting maps. Check out some examples [here](https://github.com/geopandas/geopandas/tree/master/examples). Geopandas also uses PySAL under the hood for spatial data analysis. For example, it can easily generate histograms using geographic data as shown [here](https://github.com/geopandas/geopandas/blob/master/examples/choropleths.ipynb).

### A quick example

For a quick example, here is the plot that is generated in the [README](https://github.com/geopandas/geopandas/#examples). 
Even without a shapefile proper, we can still generate quick plots with our own coordinates.


```python
import geopandas
from shapely.geometry import Polygon

# Here we generate polygons, what do these look like to you?
p1 = Polygon([(0, 0), (1, 0), (1, 1)])
p2 = Polygon([(0, 0), (1, 0), (1, 1), (0, 1)])
p3 = Polygon([(2, 0), (3, 0), (3, 1), (2, 1)])

# Put them into a GeoSeries object (akin to a pandas series perhaps?)
g = geopandas.GeoSeries([p1, p2, p3])
# 0         POLYGON ((0 0, 1 0, 1 1, 0 0))
# 1    POLYGON ((0 0, 1 0, 1 1, 0 1, 0 0))
# 2    POLYGON ((2 0, 3 0, 3 1, 2 1, 2 0))
dtype: geometry
```

If you guessed two squares, one overlayed with a triangle, that is what we get!
We can visualize it to see:

![https://raw.githubusercontent.com/geopandas/geopandas/master/examples/test.png](https://raw.githubusercontent.com/geopandas/geopandas/master/examples/test.png)

One thing that is really neat is that once you have a geoseries, you can easily
calculate the area - a pandas series that shows the area for each polygon:

```python
print(g.area)
0    0.5
1    1.0
2    1.0
dtype: float64
```

This barely captures the richness of what this library can do. You should check out
the [examples gallery](https://geopandas.readthedocs.io/en/latest/gallery/index.html) for a larger set of
examples.

<a id="cite">
## How do I cite it?

You can cite the software on [Zenodo](https://zenodo.org/record/4464949#.YB8aT-plAYs).
Look at all those authors! This is truly a team, open source effort.

```
@software{kelsey_jordahl_2021_4464949,
  author       = {Kelsey Jordahl and
                  Joris Van den Bossche and
                  Martin Fleischmann and
                  James McBride and
                  Jacob Wasserman and
                  Jeffrey Gerard and
                  Adrian Garcia Badaracco and
                  Alan D. Snow and
                  Jeff Tratner and
                  Matthew Perry and
                  Carson Farmer and
                  Geir Arne Hjelle and
                  Micah Cochran and
                  Sean Gillies and
                  Lucas Culbertson and
                  Matt Bartos and
                  Nick Eubank and
                  Sergio Rey and
                  Giacomo Caria and
                  maxalbert and
                  Aleksey Bilogur and
                  Christopher Ren and
                  Dani Arribas-Bel and
                  Leah Wasser and
                  sangarshanan and
                  Levi John Wolf and
                  Martin Journois and
                  abonte and
                  Joshua Wilson and
                  Adam Greenhall},
  title        = {geopandas/geopandas: v0.8.2},
  month        = jan,
  year         = 2021,
  publisher    = {Zenodo},
  version      = {v0.8.2},
  doi          = {10.5281/zenodo.4464949},
  url          = {https://doi.org/10.5281/zenodo.4464949}
}
```

More on citation can be found on the [Citation Page](https://geopandas.readthedocs.io/en/latest/about/citing.html).


<a id="getting-started">
## How do I get started?
 
You might want to check out:

 - [The GitHub Repository](https://github.com/geopandas/geopandas)
 - [Documentation](https://geopandas.readthedocs.io/en/latest/) 
 - [User Guide](https://geopandas.readthedocs.io/en/latest/docs/user_guide.html)


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
