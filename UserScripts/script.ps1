$ErrorActionPreference = "Stop"
$folderPath = "C:\Path\to\folder"

if (Test-Path $folderPath) {
    try {
        # Remove any read-only attribute from files within the folder and its subfolders
        Get-ChildItem $folderPath -Recurse | ForEach-Object { $_.Attributes = $_.Attributes -bxor [System.IO.FileAttributes]::ReadOnly }

        # Remove all files within the folder and its subfolders
        Get-ChildItem $folderPath -File -Recurse | Remove-Item -Force -ErrorAction Stop

        # Remove all subfolders within the folder
        Get-ChildItem $folderPath -Directory -Recurse | Remove-Item -Force -ErrorAction Stop

        # Remove the main folder
        Remove-Item $folderPath -Force -Recurse -ErrorAction Stop
    }
    catch {
        # Handle the error if required
        exit 1
    }
}
else {
    exit 0
}
