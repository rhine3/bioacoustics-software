# Update app table

You can directly update the contents of the table in the app with the contents from the [Google Sheets], by running the following script from the root directory of this repository:


```
python dataset/update-from-sheets.py #This MUST be run from the root directory of the repository.
```


## Deleting old entries

This script only saves new files or replaces existing ones with the same name. If you wish to delete existing entries, you should do so manually in the `github.com/rhine3/bioacoustics-software/datasets_json/` folder.

Alternatively, you can remove all JSON files from the directory and replace them with the contents of the updated sheet by running:

```
python dataset/update-from-sheets.py --clear-dir
```

## Additional options

 - You can run this script without exporting outputs by including the `--dry-run` argument.
 - You can specify a different Google Sheet URL or a custom output directory with the `--google_sheet_url` and `--output_dir` arguments, respectively.


```
python dataset/update-from-sheets.py 
```


## Deleting old entries

This script only saves new files or replaces existing ones with the same name. If you wish to delete existing entries, you should do it manually on the `github.com/rhine3/bioacoustics-software/datasets_json/` folder.

Alternatively, you can remove all JSON files from the directory and replace with the contents of the updated sheet by running:

```
python dataset/update-from-sheets.py --clear-dir
```

## Additional options

 - You can run this script without exporting outputs by including the `--dry-run` argument
 - You can specify a different Google Sheets URL or a custom output directory with the `--google_sheet_url` and `--output_dir` arguments respectively.
