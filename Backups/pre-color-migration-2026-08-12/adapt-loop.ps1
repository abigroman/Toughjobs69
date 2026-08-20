# Target web files directly in the root directory and subdirectories
$files = Get-ChildItem -Path "." -Recurse -File -Include *.html, *.css, *.js, *.jsx, *.tsx

foreach ($file in $files) {
    # Skip the loop script itself so it doesn't try to adapt its own code
    if ($file.Name -eq "adapt-loop.ps1") { continue }

    Write-Host "🚀 Adapting file to mobile: $($file.FullName)" -ForegroundColor Cyan
    
    # Run Impeccable on the single file
    /impeccable adapt $file.FullName to mobile
    
    Write-Host "💤 Sleeping for 4 hours to refresh token window..." -ForegroundColor Yellow
    Start-Sleep -Seconds 14400
}
