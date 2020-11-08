import requests
import csv
from bs4 import BeautifulSoup

class scraper:
    URL = 'https://www.bphc.org/whatwedo/infectious-diseases/Infectious-Diseases-A-to-Z/covid-19/Pages/default.aspx'
    page = requests.get(URL)

    soup = BeautifulSoup(page.content, 'html.parser')


    #due to the similarity of tables in html I created a list of the tables and 
    #extracted the correct one as town_table
    test_tables = soup.find_all("table", attrs={'class': "ms-rteTable-2"})


    town_table = test_tables[2]

    town_table_data = town_table.tbody.find_all("tr")

    #code to find the titles of each column and remove unnecessary characters
    headings = []
    for td in town_table_data[0].find_all("td"):
        # remove any newlines and extra spaces from left and right
        title = td.strong.text

        ftitle = (title.encode('ascii', 'ignore')).decode("utf-8")

        if(ftitle != 'CURRENT WEEK'):
            headings.append(ftitle.replace('\n', ' ').strip())
        else:
            headings.append(ftitle.replace('\n', ' ').strip() + " % POSITIVE")

        if(ftitle == "NEIGHBORHOOD"):
            headings.append("ZIP CODE")

    del headings[-1] 
    headings.append("TOTAL POSITIVE CASES")

    print(headings)

    #whole table = town_table
    #all rows of table = town_table_data

    #iterate through table data by parsing through each row except the first to grab all data

    data = []

    tp_data = []

    for i in range(len(town_table.tbody.find_all("tr"))-1):
        row = {}
        zip_data = []
        next_var= " "
        num_tested = " "
        pcent_pos = " "
        for x, y in zip(town_table_data[i+1].find_all("td"), headings):
                #to fill in both N and Z we need to splice the data
                #N gets the left of the hyphen and Z gets the right

            stat = x.text
            if(y == "NUMBER TESTED"):
                z = (next_var.encode('ascii', 'ignore')).decode("utf-8")
                a = z.replace('\n', '').strip()
                a = a.replace(",", "")
                num_tested= int(a)
            elif(y == "OF TESTED, CUMULATIVE % POSITIVE"):
                z = (next_var.encode('ascii', 'ignore')).decode("utf-8")
                a = z.replace('\n', '').strip()
                a = a.replace("%", "")
                a = a.replace(".", "")
                pcent_pos = int(a)
    
            #input zip code info
            if(y == "NEIGHBORHOOD"):
                if(stat.find("-")>0):
                    #to seperate the zip code and area name define sindex as the index of the hyphen to split
                    sindex = stat.index("-")
                    area = stat[0: sindex-1]
                    zcode = stat[sindex+1: len(stat)]
                    
                    #enter area name into row
                    z = (area.encode('ascii', 'ignore')).decode("utf-8")
                    row[y] = z.replace('\n', '').strip()

                    #append zip code to zip_data
                    zip_data.append(zcode)
                else:
                    if(stat=="Other"):
                        row[y] = "N/A"
                    else:
                        z = (stat.encode('ascii', 'ignore')).decode("utf-8")
                        row[y] = z.replace('\n', '').strip()
            elif(y == "ZIP CODE"):
                # print(zip_data)
                next_var += stat
                if(len(zip_data)>0):
                    zcode = zip_data.pop()
                    z = (zcode.encode('ascii', 'ignore')).decode("utf-8")
                    row[y] = z.replace('\n', '').strip() 
                else:
                    row[y] = "N/A" 
            else:

                z = (next_var.encode('ascii', 'ignore')).decode("utf-8")
                row[y] = z.replace('\n', '').strip()
                next_var = stat
            #input rest of info
        row["TOTAL POSITIVE CASES"] = (round(num_tested*(pcent_pos/1000)))
        print(row)
        data.append(row)

        def getData(self):
            return self.data


    # open csv table
    # with open(f"Neighborhood Data.csv", 'w') as out_file:
    #     headers = [
    #         "NEIGHBORHOOD",
    #         "ZIP CODE",
    #         "NUMBER TESTED",
    #         "OF TESTED, CUMULATIVE % POSITIVE",
    #         "CURRENT WEEK % POSITIVE",
    #         "TOTAL POSITIVE CASES"
    #     ]
    #     writer = csv.DictWriter(out_file, headers)

    #     writer.writeheader()
    #     for row in data:
    #         if row:
    #             print(row)
    #             writer.writerow(row)