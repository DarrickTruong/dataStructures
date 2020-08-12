import re

notes = {
    1: "2020-07-29 13:43:37 - api integrations (Notes) 2020-07-24 13:53:38 - Kathleen Tardugno (Notes) 2020-07-21 09:08:31 - Kathleen Tardugno (Notes)",
    2: "2020-07-29 13:43:37 - api integrations (Notes) 2020-07-24 13:53:38 - Kathleen Tardugno (Notes) 2020-07-23 09:08:31 - Kathleen Tardugno (Notes)",
    3: "2020-07-29 13:43:37 - api integrations (Notes) 2020-07-24 13:53:38 - Kathleen Tardugno (Notes) 2020-07-25 09:08:31 - Kathleen Tardugno (Notes)",
}

dates = []

for note in notes:
    all = re.findall(r"[\d]{4}-[\d]{2}-[\d]{2}", notes[note])
    dates.append(all[len(all)-1])

print(dates)