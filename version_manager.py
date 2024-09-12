import sys
import subprocess
import os

def get_latest_tag():
    try:
        return subprocess.check_output(['git', 'describe', '--tags', '--abbrev=0']).decode().strip()
    except subprocess.CalledProcessError:
        return '0.0.0'

def increment_version(version, increment_type):
    major, minor, patch = map(int, version.split('.'))
    if increment_type == 'MAJOR':
        return f'{major + 1}.0.0'
    elif increment_type == 'MINOR':
        return f'{major}.{minor + 1}.0'
    else:  # PATCH
        return f'{major}.{minor}.{patch + 1}'

def is_amend_commit():
    current_count = int(subprocess.check_output(['git', 'rev-list', 'HEAD', '--count']).decode().strip())
    
    if os.path.exists('.temp/.last-commit-count.tmp'):
        with open('.temp/.last-commit-count.tmp', 'r') as f:
            previous_count = int(f.read().strip())
        return current_count == previous_count
    return False

def create_or_update_tag(tag_name):
    # Crea el tag o lo actualiza si ya existe
    subprocess.run(['git', 'tag', '-f', tag_name])
    # Asegura que el tag esté en el HEAD actual
    subprocess.run(['git', 'push', '--force', 'origin', tag_name])

def main():
    commit_msg = sys.argv[1]
    increment_type = commit_msg.split()[0]
    
    if is_amend_commit():
        print('Commit amend detectado. Se actualizará el tag existente.')
        latest_tag = get_latest_tag()
        create_or_update_tag(latest_tag)
        print(f'Tag actualizado: {latest_tag}')
    else:
        latest_tag = get_latest_tag()
        new_version = increment_version(latest_tag, increment_type)
        create_or_update_tag(new_version)
        print(f'Nuevo tag creado: {new_version}')

    # No es necesario limpiar el archivo temporal aquí, ya que se actualizará en el próximo pre-commit

if __name__ == '__main__':
    main()
