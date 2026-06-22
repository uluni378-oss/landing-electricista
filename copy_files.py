import shutil
import os

src = r"C:\Users\NAVI\Documents\landing-electricista-main\landing-electricista-main"
dst = r"C:\Users\NAVI\Documents\pagina electricista"

def copy_dir():
    for root, dirs, files in os.walk(src):
        # Determine destination folder
        rel_path = os.path.relpath(root, src)
        dest_dir = dst if rel_path == "." else os.path.join(dst, rel_path)
        
        if not os.path.exists(dest_dir):
            print(f"Creating directory: {dest_dir}")
            os.makedirs(dest_dir, exist_ok=True)
            
        for file in files:
            src_file = os.path.join(root, file)
            dst_file = os.path.join(dest_dir, file)
            print(f"Copying {src_file} -> {dst_file}")
            try:
                shutil.copy2(src_file, dst_file)
            except Exception as e:
                print(f"Error copying {file}: {e}")

if __name__ == "__main__":
    copy_dir()
