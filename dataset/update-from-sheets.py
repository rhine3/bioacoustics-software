import argparse, json, re, os
import pandas as pd
import numpy as np
from glob import glob

def camel_case(s):
    """Convert a string to camelCase."""
    s = re.sub(r'[^a-zA-Z0-9]+', ' ', s).title().replace(' ', '')
    return s[0].lower() + s[1:]

def remove_json_files(directory):
    # Find all JSON files in the directory
    json_files = glob(os.path.join(directory, '*.json'))
    
    # Remove each JSON file
    for json_file in json_files:
        os.remove(json_file)
        print(f"Removed {json_file}")

def sheet_to_json(google_sheet_url, output_dir, dry_run = False):
    # Read Google Sheet into pandas dataframe
    sheet_id = google_sheet_url.split('/d/')[1].split('/')[0]
    url = f'https://docs.google.com/spreadsheets/d/{sheet_id}/export?format=csv'
    df = pd.read_csv(url)
    
    # Ensure output directory exists
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # Convert column names to camelCase
    df.columns = [camel_case(col) for col in df.columns]
    
    # Remove selected columns
    cols_to_remove = ['removeThisRowBeforePublicationWipCategory']
    df.drop(cols_to_remove, axis = 1)
    
    # Replace NaN with None (which gets serialized as null in JSON)
    df = df.replace({np.nan: None})

    # Convert each row to a JSON file
    for index, row in df.iterrows():
        json_data = row.to_dict()
        title = json_data.get('title', f'row_{index + 1}')
        json_filename = os.path.join(output_dir, f'{title}.json')
        
        if not dry_run:
            with open(json_filename, 'w') as json_file:
                json.dump(json_data, json_file, indent=4)
            print(f"Saved {json_filename}")
    
    return df

def parse_args():
    parser = argparse.ArgumentParser(description='Convert Google Sheet to JSON files.')
    parser.add_argument('--google_sheet_url', type=str, default= 'https://docs.google.com/spreadsheets/d/1Ba1MY4o5Sm1f08IekJcbxAtSjkDN71Z1RZ42kzrofJ0/edit?gid=0#gid=0', help='URL of the Google Sheet.')
    parser.add_argument('--output_dir', type=str, default= 'datasets_json', help='Directory to save the JSON files.')
    parser.add_argument("--dry-run", dest="dry_run", action="store_true", default=False, help = "Don't export outputs.")
    parser.add_argument("--clear-dir", dest="clear_dir", action="store_true", default=False, help = "Delete all JSON files from output_dir")

    return parser.parse_args()

if __name__ == '__main__':
    args = args = parse_args()
    
    if args.clear_dir:
        remove_json_files(args.output_dir)
    
    df = sheet_to_json(args.google_sheet_url, args.output_dir, args.dry_run)
    