import subprocess

def get_latest_tag():
    try:
        return subprocess.check_output(['git', 'describe', '--tags', '--abbrev=0']).decode().strip()
    except subprocess.CalledProcessError:
        return '0.0.0'

def get_last_commit_message():
    return subprocess.check_output(['git', 'log', '-1', '--pretty=%B']).decode().strip()

def increment_version(version, increment_type):
    major, minor, patch = map(int, version.split('.'))
    if increment_type == 'MAJOR':
        return f'{major + 1}.0.0'
    elif increment_type == 'MINOR':
        return f'{major}.{minor + 1}.0'
    else:  # PATCH
        return f'{major}.{minor}.{patch + 1}'

def create_tag(tag_name):
    subprocess.run(['git', 'tag', tag_name])
    subprocess.run(['git', 'push', 'origin', tag_name])

def main():
    commit_msg = get_last_commit_message()
    increment_type = commit_msg.split()[0].upper()

    if increment_type not in ['MAJOR', 'MINOR', 'PATCH']:
        print("No se requiere un nuevo tag.")
        return

    latest_tag = get_latest_tag()
    new_version = increment_version(latest_tag, increment_type)
    create_tag(new_version)
    print(f'Nuevo tag creado: {new_version}')

if __name__ == '__main__':
    main()