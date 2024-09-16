param (
    [Parameter()][string]$id,
    [Parameter()][bool]$install = $false
)

Write-Output "ID: $id"
Write-Output "Should Install: $install"

Write-Output "Getting List of Installed Packages..."
# Execute winget list and output to temp.json
winget list $id > temp.json
Write-Output "winget list output saved to temp.json"

if (Select-String -Path temp.json -Pattern $id -SimpleMatch -Quiet) {
    Write-Output "Package $id is already installed."
} else {
    Write-Output "Package $id is not installed."
    Write-Output "Checking if the Package exists in the repository..."
    # Execute winget search and output to temp2.json
    winget search --id $id > temp2.json
    Write-Output "winget search output saved to temp2.json"

    if (Select-String -Path temp2.json -Pattern $id -SimpleMatch -Quiet) {
        Write-Output "Package $id exists in the repository."
        if ($install) {
            Write-Output "Installing Package $id..."
            winget install $id --silent
            Write-Output "Installation command executed."
        } else {
            Write-Output "Package $id exists, but installation is not requested."
        }
    } else {
        Write-Output "Package $id is not available in the repository or is invalid."
    }

    Remove-Item temp2.json
    Write-Output "Temporary file temp2.json removed."
}

Remove-Item temp.json
Write-Output "Temporary file temp.json removed."

Write-Output "Script execution completed for Package $id."
