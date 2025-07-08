import os

documents_path = os.path.join(os.path.dirname(__file__), "Documents")
files = os.listdir(documents_path)
print(files)

with open(os.path.join(os.path.dirname(__file__), "results.txt"), "w") as results_file:
  results_file.write("\n".join(files))
