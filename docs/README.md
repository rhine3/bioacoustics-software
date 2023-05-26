# Bioacoustics Software Database

Below are instructions for how to maintain the bioacoustics software database. This is a custom research software database created in the style of the [Research Software Encyclopedia](https://rseng.github.io/software/)

## General site config

Edit the `_config.yaml` to update metadata and site settings.
This includes everything from the logo to social media handles and some colors. If there is an additional
style not exposed, please [open an issue](https://github.com/rseng/rse/issues).

## Index Page

The index.html in the root is where the site's welcome message is saved. The logo defined in the config appears here.

<!--The Posts page was removed from the template so these instructions are commented out in the README.
## Posts

A fully populated [_posts](_posts) folder is included with an example of how to organize your posts! These will be included in the "news" portion of your site, and as you see, you can use this for news, tutorials, software review, or other blog content.-->

## Source Sheet

The website auto-generates based on the [Bioacoustics software Google Sheet](https://docs.google.com/spreadsheets/d/1Ba1MY4o5Sm1f08IekJcbxAtSjkDN71Z1RZ42kzrofJ0/edit#gid=0). Most of the columns in the sheet are not shown on the website. To edit this, see "Software Table" below.

This information is used to automatically populate the markdown files within [_software](_software). These contain all the data (and custom data) from the RSEPedia. 

## Software Table

The columns that go into the software table displayed on the website are determined by (`_layouts/software.html`). It contains just a couple of the fields from the markdown files in [_software](_software). You are free to select anything from these files, and edit either in [pages/data.json](pages/data.json) for the API, or directly in the table template!

## Workflows

You likely will maintain this alongside a database (e.g., in docs) in which case you might want workflows!
Check out the example deployment at [rseng/rse-jekyll-web](https://github.com/rseng/rse-jekyll-web) and please [open an issue](https://github.com/rseng/rse/issues) if you want any help with custom automation.
