import os

docs = r"C:\Users\NAVI\Documents"
for name in os.listdir(docs):
    if "pagina" in name or "electricista" in name:
        print(f"Name: {repr(name)}")
        print(f"Char codes: {[ord(c) for c in name]}")
