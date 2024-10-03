"""
Update the .json files that populate the table.

This is a draft version that does it from a local csv file. Should move to google sheets API!

"""

import pandas as pd
import numpy as np
import json, os, re, argparse

def to_camel_case(s):
    s = re.sub(r'[^a-zA-Z0-9]', ' ', s).title().replace(' ', '')
    return s[0].lower() + s[1:]

def csv_to_json(csv_file_path, output_dir):
    # Create a directory for the output JSON files if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)

    # Read the CSV file using pandas
    df = pd.read_csv(csv_file_path)
    
    # Replace NaN with None (which converts to null in JSON)
    df = df.replace({np.nan: None})

    # Process each row and save as a JSON file
    for index, row in df.iterrows():
        json_data = {}

        # Convert column headers to camelCase and add row data
        for key, value in row.items():
            camel_case_key = to_camel_case(key)
            json_data[camel_case_key] = value

        # Get the title for naming the file
        title = row['Title']
        safe_title = re.sub(r'\W+', '_', str(title))  # Replace non-alphanumeric characters with underscores
        
        # Save each row as a separate JSON file named after the title
        json_filename = os.path.join(output_dir, f'{safe_title}.json')
        with open(json_filename, 'w') as json_file:
            json.dump(json_data, json_file, indent=4)

    print(f"JSON files created successfully in {output_dir}.")



def parse_args():
    parser = argparse.ArgumentParser(description='Convert CSV rows to JSON files with camelCase keys.')
    parser.add_argument('csv_file', type=str, help='Path to the input CSV file.')
    parser.add_argument('--output_dir', type=str, default= 'datasets_json_tmp', help='Directory to save the JSON files.')
    
    return parser.parse_args()

if __name__ == '__main__':
    args = rgs = parse_args()
    
    print('Hello world')
    csv_to_json(args.csv_file, args.output_dir)
