import requests

def main():
    while True:
        country_name = input("Enter a country name: ").strip()
        if country_name:
            url = f"https://restcountries.com/v3.1/name/{country_name}"

            # Fetch country details from the REST Countries API
            res = requests.get(url)

            # Check if the response status code is 200
            if res.status_code == 200:
                data = res.json()

                # If the response status code is 200, get the first matching country result
                if isinstance(data, list) and len(data) > 0:
                    country = data[0]

                    # Get the common name and population of the country
                    common_name = country.get("name", {}).get("common", "Unknown")
                    population = country.get("population", "Unknown")

                    # Print the country name and population
                    print(f"Country: {common_name}")
                    print(f"Population: {population}")
                else:
                    print("No data found for this country.")
            else:
                print(f"Error: Unable to fetch data. Status code: {res.status_code}")
            break
        else:
            print("Invalid input. Please enter a valid country name.")

if __name__ == "__main__":
    main()
